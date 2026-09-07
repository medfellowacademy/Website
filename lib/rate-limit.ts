// Best-effort in-memory rate limiter. On serverless this is per-instance, so it
// only blunts bursts from a single client hitting a warm instance — good enough
// to discourage casual enumeration of the /verify lookup without extra infra.

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 20, windowMs = 60_000): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now >= existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return { ok: false, retryAfter: Math.ceil((existing.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfter: 0 };
}

// Opportunistic cleanup so the map can't grow unbounded on a long-lived instance.
if (typeof setInterval === 'function') {
  setInterval(() => {
    const now = Date.now();
    for (const [k, b] of buckets) if (now >= b.resetAt) buckets.delete(k);
  }, 5 * 60_000).unref?.();
}

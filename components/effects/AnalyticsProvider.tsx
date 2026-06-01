'use client';
import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

/**
 * Mounts once in the root layout.
 * Wires up scroll-depth tracking automatically — no per-component setup needed.
 */
export default function AnalyticsProvider() {
  useEffect(() => {
    analytics.initScrollDepth();
    return () => analytics.destroyScrollDepth();
  }, []);

  return null;
}

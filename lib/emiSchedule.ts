// Pure date math for turning (start date, tenure, monthly amount) into a
// list of installment due dates. No server-only imports, so this can be
// used from the admin client component, the API route, and the PDF builder.

export interface EmiInstallment {
  index: number;
  dueDate: string; // yyyy-mm-dd
  label: string; // e.g. "15 Nov 2026"
  amount: number;
}

function formatLabel(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// startDate must be an ISO "yyyy-mm-dd" string (from a <input type="date">).
// Each installment lands on the same day-of-month as startDate, one month apart.
export function buildEmiSchedule(startDate: string, months: number, monthlyAmount: number): EmiInstallment[] {
  if (!startDate || !months || months < 1 || !monthlyAmount) return [];
  const [y, m, d] = startDate.split('-').map(Number);
  if (!y || !m || !d) return [];

  const schedule: EmiInstallment[] = [];
  for (let i = 0; i < months; i++) {
    const due = new Date(Date.UTC(y, m - 1 + i, d));
    schedule.push({
      index: i + 1,
      dueDate: due.toISOString().slice(0, 10),
      label: formatLabel(due),
      amount: monthlyAmount,
    });
  }
  return schedule;
}

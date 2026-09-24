// Generates the "EMI Plan Confirmation" PDF attached to the approval email.
// Text-based (pdfkit), no headless browser — safe to run in a serverless
// function. Never throws: a PDF build failure just means no attachment,
// never a broken approval (see lib/notify.ts's best-effort philosophy).

import PDFDocument from 'pdfkit';
import { buildEmiSchedule } from './emiSchedule';

const BRAND_GREEN = '#15401E';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#6B7280';

export interface EmiPlanPdfInput {
  full_name: string;
  email: string;
  phone: string;
  program: string;
  emi_months: number | null;
  emi_monthly_amount: number | null;
  emi_start_date: string; // yyyy-mm-dd
  emi_processing_fee: number | null;
  emi_registration_amount: number | null;
  emi_notes: string;
  currency?: string;
}

export async function generateEmiPlanPdf(app: EmiPlanPdfInput): Promise<Buffer | null> {
  try {
    const usd = app.currency === 'USD';
    const money = (n: number) => `${usd ? 'USD ' : 'Rs. '}${n.toLocaleString(usd ? 'en-US' : 'en-IN')}`;
    const fmt = (n: number | null) => (n == null ? '—' : money(n));
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks: Buffer[] = [];
    doc.on('data', (c) => chunks.push(c));
    const done = new Promise<Buffer>((resolve) => doc.on('end', () => resolve(Buffer.concat(chunks))));

    // ── Letterhead ──────────────────────────────────────────────────────
    doc.rect(0, 0, doc.page.width, 90).fill(BRAND_GREEN);
    doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(20).text('MedFellow Academy', 50, 32);
    doc.font('Helvetica').fontSize(9.5).fillColor('#DCE9DF')
      .text('Mahavir House, Basheer Bagh, Hyderabad 500029  |  info@medfellow.in  |  +91 99850 44993', 50, 60);

    doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(16).text('EMI Plan Confirmation', 50, 118);
    doc.font('Helvetica').fontSize(9).fillColor(TEXT_MUTED)
      .text(`Generated on ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}`, 50, 140);

    // ── Applicant details ───────────────────────────────────────────────
    let y = 172;
    doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_DARK).text('Applicant Details', 50, y);
    y += 20;
    const detailRow = (label: string, value: string) => {
      doc.font('Helvetica').fontSize(10).fillColor(TEXT_MUTED).text(label, 50, y, { width: 140 });
      doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_DARK).text(value || '—', 200, y, { width: 340 });
      y += 18;
    };
    detailRow('Name', app.full_name);
    detailRow('Email', app.email);
    detailRow('Phone', app.phone);
    detailRow('Program', app.program);

    // ── Plan summary ────────────────────────────────────────────────────
    y += 14;
    doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_DARK).text('Plan Summary', 50, y);
    y += 20;
    if (app.emi_registration_amount != null) detailRow('Registration amount (upfront)', fmt(app.emi_registration_amount));
    detailRow('Tenure', `${app.emi_months ?? '—'} months`);
    detailRow('Monthly installment', fmt(app.emi_monthly_amount));
    detailRow('First due date', app.emi_start_date ? new Date(app.emi_start_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—');
    detailRow('Processing fee', fmt(app.emi_processing_fee));

    if (app.emi_notes) {
      y += 6;
      doc.rect(50, y, 495, 40).fillAndStroke('#FFFBEB', '#FDE68A');
      doc.font('Helvetica').fontSize(9.5).fillColor(TEXT_DARK).text(app.emi_notes, 60, y + 8, { width: 475 });
      y += 55;
    } else {
      y += 14;
    }

    // ── Payment schedule ────────────────────────────────────────────────
    const schedule = app.emi_months && app.emi_monthly_amount && app.emi_start_date
      ? buildEmiSchedule(app.emi_start_date, app.emi_months, app.emi_monthly_amount)
      : [];

    if (schedule.length) {
      doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_DARK).text('Payment Schedule', 50, y);
      y += 22;

      const colX = { no: 50, date: 110, amount: 400 };
      doc.rect(50, y - 6, 495, 22).fill('#F7FAF8');
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(BRAND_GREEN);
      doc.text('#', colX.no + 6, y, { width: 40 });
      doc.text('Due Date', colX.date, y, { width: 200 });
      doc.text('Amount', colX.amount, y, { width: 140, align: 'right' });
      y += 22;

      doc.font('Helvetica').fontSize(9.5).fillColor(TEXT_DARK);
      for (const inst of schedule) {
        if (y > doc.page.height - 100) {
          doc.addPage();
          y = 50;
        }
        doc.text(String(inst.index), colX.no + 6, y, { width: 40 });
        doc.text(inst.label, colX.date, y, { width: 200 });
        doc.text(money(inst.amount), colX.amount, y, { width: 140, align: 'right' });
        y += 18;
        doc.moveTo(50, y - 4).lineTo(545, y - 4).strokeColor('#F1F1F1').lineWidth(0.5).stroke();
      }
    }

    // ── Footer ──────────────────────────────────────────────────────────
    const footerY = doc.page.height - 70;
    doc.font('Helvetica').fontSize(8).fillColor(TEXT_MUTED)
      .text('This document confirms the EMI plan agreed between MedFellow Academy and the applicant named above. For questions, contact info@medfellow.in or +91 99850 44993.', 50, footerY, { width: 495, align: 'center', lineBreak: true });

    doc.end();
    return await done;
  } catch (err) {
    console.error('EMI PDF generation error:', err);
    return null;
  }
}

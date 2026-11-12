'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationFormSheet from '@/components/ApplicationFormSheet';

export default function ApplicationFormPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="print:hidden"><Navbar /></div>

      <div className="print:hidden container-custom">
        <div className="max-w-[210mm] mx-auto pt-8 pb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">Application Form</h1>
            <p className="text-sm text-[#6B7280] mt-1">
              Print it, or choose <strong>Save as PDF</strong> in the print window to download.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link href="/apply" className="btn-outline">Apply online</Link>
            <button type="button" onClick={() => window.print()} className="btn-primary">
              Download / Print
            </button>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-6 pb-12 print:p-0">
        <ApplicationFormSheet />
      </div>

      <div className="print:hidden"><Footer /></div>
    </div>
  );
}

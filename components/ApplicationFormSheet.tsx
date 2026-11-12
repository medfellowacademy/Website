import { PROGRAMS, PRACTICE_TYPES, DECLARATIONS, TERMS_SECTIONS, DOC_SLOTS, MODES } from '@/lib/application-form';

export type ApplicationFormData = {
  fullName: string; dob: string; gender: string; phone: string; email: string;
  qualification: string; regNumber: string; stateCouncil: string; yearOfReg: string;
  practiceType: string; experience: string; hospitalName: string; clinicName: string; city: string;
  program: string; modePreference: string; reason: string;
};

type Props = {
  /** Leave out for a blank form to fill by hand. */
  data?: ApplicationFormData;
  /** Names of uploaded files, keyed like DOC_SLOTS. */
  documents?: Record<string, string | null>;
  submittedAt?: Date;
};

const GENDERS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not', label: 'Prefer not to say' },
];
const QUALIFICATIONS = ['MBBS', 'MD', 'MS', 'DNB', 'BDS', 'MDS', 'Others'];

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return y && m && d ? `${d}/${m}/${y}` : iso;
}

/**
 * A4 application form. Wrapped in `.application-print`, so when the page is
 * printed (or saved as PDF) only this sheet appears.
 */
export default function ApplicationFormSheet({ data, documents, submittedAt }: Props) {
  const filled = !!data;
  const programLabel = data ? PROGRAMS.find(p => p.value === data.program)?.label ?? data.program : '';

  return (
    <div className="application-print mx-auto w-full max-w-[210mm] bg-white text-[#111827] shadow-sm border border-gray-200 px-[12mm] py-[12mm] print:max-w-none print:border-0 print:shadow-none print:p-0">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 border-b-2 border-[#15401E] pb-3">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="MedFellow Academy" className="h-11 w-auto" />
        </div>
        <div className="text-right">
          <p className="text-[17px] font-bold text-[#15401E] leading-tight">Fellowship Application Form</p>
          <p className="text-[10px] text-[#6B7280] mt-0.5">www.medfellowacademy.com · info@medfellow.in · +91 99850 44993</p>
        </div>
      </header>

      <p className="mt-3 text-[10.5px] text-[#374151] leading-relaxed">
        {filled
          ? 'Copy of the application submitted online. Keep it for your records.'
          : 'Please fill in BLOCK LETTERS. Fields marked * are required. Attach self-attested copies of the documents listed in Section 4 and send the completed form to info@medfellow.in, or apply online at medfellowacademy.com/apply.'}
        {filled && submittedAt && (
          <span className="ml-1 font-semibold text-[#15401E]">
            Submitted on {submittedAt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}.
          </span>
        )}
      </p>

      {/* 1. Personal */}
      <Section n={1} title="Personal Details">
        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <Field label="Full name (as per medical licence) *" value={data?.fullName} full />
            <div className="grid grid-cols-2 gap-x-6">
              <Field label="Date of birth *" value={data?.dob ? formatDate(data.dob) : undefined} />
              <Field label="Contact number *" value={data?.phone} />
            </div>
            <Field label="Email ID *" value={data?.email} full />
            <Choice label="Gender *" options={GENDERS} selected={data?.gender} />
          </div>
          <div className="shrink-0 w-[30mm] h-[38mm] border border-dashed border-gray-400 flex items-center justify-center text-center text-[9px] text-[#9CA3AF] leading-snug px-2">
            {filled && documents?.photo ? 'Photograph uploaded online' : 'Affix recent passport-size photograph'}
          </div>
        </div>
      </Section>

      {/* 2. Professional */}
      <Section n={2} title="Professional Details">
        <Choice label="Medical qualification *" options={QUALIFICATIONS.map(q => ({ value: q, label: q }))} selected={data?.qualification} />
        <div className="grid grid-cols-2 gap-x-6">
          <Field label="Medical council registration number *" value={data?.regNumber} />
          <Field label="State medical council name *" value={data?.stateCouncil} />
          <Field label="Year of registration *" value={data?.yearOfReg} />
          <Field label="Years of experience *" value={data?.experience} />
        </div>
        <Choice label="Current practice type *" options={PRACTICE_TYPES} selected={data?.practiceType} />
        <div className="grid grid-cols-3 gap-x-6">
          <Field label="Hospital name" value={data?.hospitalName} />
          <Field label="Clinic name" value={data?.clinicName} />
          <Field label="City" value={data?.city} />
        </div>
      </Section>

      {/* 3. Course */}
      <Section n={3} title="Course Selection">
        <Field label="Fellowship program applied for *" value={programLabel} full />
        <Choice label="Mode preference *" options={MODES} selected={data?.modePreference} />
        <Field label="Reason for joining *" value={data?.reason} lines={4} full />
      </Section>

      {/* 4. Documents — starts page 2 when printed */}
      <div className="print:break-before-page" />
      <Section n={4} title="Documents Enclosed">
        <p className="text-[10px] text-[#6B7280] -mt-1 mb-2">Self-attested copies. PDF, JPG or PNG when emailed (CV may be Word), max 10 MB each.</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {DOC_SLOTS.map(slot => {
            const name = documents?.[slot.key];
            return (
              <div key={slot.key} className="flex items-start gap-2 text-[11px]">
                <Box checked={!!name} />
                <span>
                  {slot.label}
                  {name && <span className="block text-[9.5px] text-[#6B7280] break-all">{name}</span>}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Terms */}
      <Section title="Terms and Conditions">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {TERMS_SECTIONS.map(sec => (
            <div key={sec.title} className="break-inside-avoid">
              <p className="text-[10.5px] font-semibold text-[#15401E]">{sec.title}</p>
              <ul className="list-disc pl-4 text-[9.5px] text-[#374151] leading-snug space-y-0.5 mt-0.5">
                {sec.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Declarations */}
      <Section title="Declaration by Applicant">
        <div className="space-y-1.5">
          {DECLARATIONS.map((d, i) => (
            <div key={i} className="flex items-start gap-2 text-[10.5px] text-[#374151] leading-snug">
              <Box checked={filled} />
              <span>{d}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-x-6 mt-5">
          <Field label="Place" value={data?.city} />
          <Field label="Date" value={submittedAt ? submittedAt.toLocaleDateString('en-IN') : undefined} />
          <Field label="Signature of applicant" value={filled ? 'Declared online' : undefined} />
        </div>
      </Section>

      {/* Office use */}
      <div className="mt-5 border border-gray-300 rounded p-3 break-inside-avoid">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">For office use only</p>
        <div className="grid grid-cols-4 gap-x-4">
          <Field label="Application no." />
          <Field label="Received on" />
          <Field label="Verified by" />
          <Field label="Status" />
        </div>
      </div>

      <p className="mt-4 text-center text-[9px] text-[#9CA3AF]">
        MedFellow Academy · www.medfellowacademy.com · info@medfellow.in · +91 99850 44993
      </p>
    </div>
  );
}

function Section({ n, title, children }: { n?: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-4 break-inside-avoid">
      <h3 className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#15401E] bg-[#e8f2ea] px-2.5 py-1.5 rounded-sm mb-2.5 [print-color-adjust:exact] [-webkit-print-color-adjust:exact]">
        {n && <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-[#15401E] text-white text-[10px]">{n}</span>}
        {title}
      </h3>
      {children}
    </section>
  );
}

function Field({ label, value, lines = 1, full }: { label: string; value?: string; lines?: number; full?: boolean }) {
  return (
    <div className={`mb-2 ${full ? 'w-full' : ''}`}>
      <p className="text-[9.5px] font-semibold uppercase tracking-wide text-[#6B7280]">{label}</p>
      {value ? (
        <p className="border-b border-gray-300 text-[12px] font-medium min-h-[22px] pt-1 pb-0.5 whitespace-pre-wrap break-words">{value}</p>
      ) : (
        Array.from({ length: lines }).map((_, i) => <div key={i} className="border-b border-gray-400 h-[22px]" />)
      )}
    </div>
  );
}

function Choice({ label, options, selected }: { label: string; options: { value: string; label: string }[]; selected?: string }) {
  return (
    <div className="mb-2">
      <p className="text-[9.5px] font-semibold uppercase tracking-wide text-[#6B7280] mb-1">{label}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {options.map(o => (
          <span key={o.value} className="inline-flex items-center gap-1.5 text-[11px]">
            <Box checked={selected === o.value} />
            {o.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Box({ checked }: { checked?: boolean }) {
  return (
    <span className={`inline-flex shrink-0 w-3.5 h-3.5 mt-[1px] items-center justify-center border border-gray-500 rounded-[2px] text-[9px] font-bold leading-none ${checked ? 'bg-[#15401E] border-[#15401E] text-white' : ''} [print-color-adjust:exact] [-webkit-print-color-adjust:exact]`}>
      {checked ? '✓' : ''}
    </span>
  );
}

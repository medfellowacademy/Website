'use client';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    title: 'Browse Freely',
    description: 'Read full syllabus and explore program details before deciding.',
  },
  {
    step: '2',
    title: 'Enroll & Learn',
    description: 'Pay securely, get instant access, learn at your own pace.',
  },
  {
    step: '3',
    title: 'Complete & Certify',
    description: 'Finish the program and receive your verified fellowship certificate.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#1B4F72' }}>
            How It Works
          </h2>
          <p className="text-xs" style={{ color: '#5D6D7E' }}>
            A clear path from application to fellowship certification
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-3 flex-1">
                {/* Step number */}
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium"
                  style={{ background: '#1B4F72', color: '#FFFFFF' }}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xs font-medium mb-1" style={{ color: '#1B4F72' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#5D6D7E', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < STEPS.length - 1 && (
                <ArrowRight 
                  className="hidden md:block w-5 h-5 flex-shrink-0" 
                  style={{ color: '#AED6F1' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

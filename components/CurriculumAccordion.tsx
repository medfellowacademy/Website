'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Submodule {
  module: string;
  topics: string[];
}

interface Module {
  module: string;
  duration?: string;
  topics?: string[];
  submodules?: Submodule[];
}

export default function CurriculumAccordion({ curriculum }: { curriculum: Module[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {curriculum.map((module, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
            {/* Header — clickable */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-base md:text-xl font-heading font-bold text-primary leading-tight">
                  {module.module}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {module.duration && (
                  <span className="hidden sm:block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-semibold">
                    {module.duration}
                  </span>
                )}
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            {/* Content — collapsible */}
            {isOpen && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-primary/10 pt-4">
                {module.submodules ? (
                  <div className="space-y-4">
                    {module.submodules.map((sub, sIdx) => (
                      <div key={sIdx} className="border border-primary/10 rounded-lg p-3 md:p-4">
                        <h4 className="text-sm md:text-base font-semibold text-primary mb-2">{sub.module}</h4>
                        <div className="flex flex-wrap gap-2">
                          {sub.topics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm border border-primary/10"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(module.topics ?? []).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm border border-primary/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

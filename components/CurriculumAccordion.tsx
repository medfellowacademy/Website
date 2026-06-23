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
          <div key={index} className="card overflow-hidden hover:shadow-md transition-shadow">
            {/* Header — clickable */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-3 p-3 md:p-4 text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {index + 1}
                </div>
                <h3 className="text-sm md:text-base font-heading font-bold text-primary leading-tight">
                  {module.module}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {module.duration && (
                  <span className="hidden sm:block px-2.5 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                    {module.duration}
                  </span>
                )}
                <ChevronDown
                  className={`w-4 h-4 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            {/* Content — collapsible */}
            {isOpen && (
              <div className="px-3 md:px-4 pb-3 md:pb-4 border-t border-primary/10 pt-3">
                {module.submodules ? (
                  <div className="space-y-3">
                    {module.submodules.map((sub, sIdx) => (
                      <div key={sIdx} className="border border-primary/10 rounded-lg p-2.5 md:p-3">
                        <h4 className="text-xs md:text-sm font-semibold text-primary mb-1.5">{sub.module}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {sub.topics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 bg-primary/5 text-primary rounded-full text-xs border border-primary/10"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {(module.topics ?? []).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-primary/5 text-primary rounded-full text-xs border border-primary/10"
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

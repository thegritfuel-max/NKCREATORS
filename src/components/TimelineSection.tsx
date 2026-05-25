/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CalendarDays, Network, FileCheck, Car, Key, ClipboardList, ChevronDown } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function TimelineSection() {
  const stepIcons = [
    <CalendarDays className="text-[#00529C]" size={22} />,
    <ClipboardList className="text-[#00529C]" size={22} />,
    <Network className="text-[#00529C]" size={22} />,
    <Car className="text-[#00529C]" size={22} />,
    <FileCheck className="text-[#00529C]" size={22} />,
    <Key className="text-[#00529C]" size={22} />
  ];

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200"
      id="process"
    >
      <div className="absolute top-1/2 left-0 right-0 w-full h-[300px] bg-gradient-radial from-blue-500/3 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="process-inner">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-10" id="process-header">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
            Our Clear Process
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            6 Steps to a Safe Property Deal
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-700 font-bold max-w-xl mx-auto mt-4 leading-relaxed">
            We follow a secure, legal-first methodology designed to protect your investment and ensure completely uncompromised peace of mind.
          </p>
        </div>

        {/* Vertical Timeline Track Container */}
        <div className="relative" id="timeline-track-container">
          {/* Vertical Center Axis Line (Desktop only, fades towards ends) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden lg:block" />

          {/* Symmetrical Steps Loop */}
          <div className="space-y-10 lg:space-y-16" id="timeline-steps">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  id={`process-step-row-${step.number}`}
                >
                  {/* Content Box (occupies left/right grid half) */}
                  <div className="w-full lg:w-1/2 flex justify-center" id={`process-step-card-col-${step.number}`}>
                    <div 
                      className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#00529C] group transition-all duration-300 w-full max-w-xl"
                      id={`process-step-card-${step.number}`}
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="p-2.5 bg-blue-50 rounded-xl border border-blue-100 transition-all">
                            {stepIcons[idx]}
                          </span>
                          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest leading-none font-bold">Step 0{idx + 1}</span>
                        </div>
                        <span className="font-sans font-black text-3xl sm:text-4xl text-[#00529C]/10 group-hover:text-[#00529C]/30 transition-all select-none">
                          {step.number}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-sans font-black text-xl text-slate-900 tracking-wide mb-3 group-hover:text-[#00529C] transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-slate-800 font-bold leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Nested sub-tasks bullets */}
                      <div className="space-y-2 bg-white rounded-xl p-4 border border-slate-200" id={`process-sub-tasks-${step.number}`}>
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-bold" id={`process-detail-${step.number}-${dIdx}`}>
                            <span className="h-1.5 w-1.5 bg-[#00529C] rounded-full mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Bullet Node Indicator Circle (Desktop only) */}
                  <div className="absolute left-[50%] -translate-x-[50%] h-9 w-9 rounded-full bg-white border border-blue-200 flex items-center justify-center z-10 hidden lg:flex shadow-sm animate-pulse" id={`timeline-bullet-node-${step.number}`}>
                    <div className="h-4.5 w-4.5 rounded-full bg-linear-to-r from-[#00529C] to-blue-400" />
                  </div>

                  {/* Empty space filler for symmetrical balances */}
                  <div className="w-full lg:w-1/2 hidden lg:block" id={`timeline-spacing-col-${step.number}`} />

                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic visual downward chevron calling action */}
        <div className="flex justify-center mt-10 mb-2" id="process-chevron">
          <div className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-[#00529C] animate-bounce">
            <ChevronDown size={14} />
          </div>
        </div>

      </div>
    </section>
  );
}

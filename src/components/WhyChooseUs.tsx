/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, Milestone, Sparkles, Network, UserCheck, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';

export default function WhyChooseUs() {
  const icons = [
    <Eye className="text-[#00529C]" size={24} />,
    <Milestone className="text-[#00529C]" size={24} />,
    <Sparkles className="text-[#00529C]" size={24} />,
    <Network className="text-[#00529C]" size={24} />,
    <UserCheck className="text-[#00529C]" size={24} />,
    <ShieldCheck className="text-[#00529C]" size={24} />
  ];

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden border-b border-slate-200"
      id="why-choose-us"
    >
      <div className="absolute inset-0 bg-radial-at-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="why-choose-us-inner">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-10" id="why-choose-us-header">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
            Absolute Integrity
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Why Choose Nitin Kesarkar
          </h2>
          <div className="w-16 h-[2.5px] bg-[#00529C] mx-auto mt-4" />
        </div>

        {/* Dense Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="why-choose-us-grid">
          {WHY_CHOOSE_US_DATA.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#00529C] group hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
              id={`why-card-${idx}`}
            >
              <div id={`why-body-${idx}`}>
                {/* Icon Container with border */}
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 w-fit mb-6 group-hover:bg-[#00529C]/10 transition-all">
                  {icons[idx]}
                </div>

                {/* Title */}
                <h3 className="font-sans font-black text-xl text-slate-900 mb-3 group-hover:text-[#00529C] transition-colors">
                  {feat.title}
                </h3>

                {/* Subtext */}
                <p className="font-sans text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Minimal verified label instead of low-quality mock codes */}
              <div className="flex justify-between items-center mt-6 border-t border-slate-100 pt-4 text-xs font-mono" id={`why-footer-${idx}`}>
                <span className="text-[#00529C] font-black uppercase tracking-wider">✓ Verified Guarantee</span>
                <span className="text-slate-400 font-bold">Advisory Team</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

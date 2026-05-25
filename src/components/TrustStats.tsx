/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Landmark, Users, TrendingUp } from 'lucide-react';
import { INSTANT_STATS } from '../data';

export default function TrustStats() {
  // Map icons to the metrics index
  const icons = [
    <Landmark className="text-luxury-bronze" size={28} />,
    <TrendingUp className="text-luxury-bronze" size={28} />,
    <Users className="text-luxury-bronze" size={28} />,
    <Award className="text-luxury-bronze" size={28} />
  ];

  const helperTexts = [
    "No legal property disputes since 2011",
    "Worth of deals successfully closed in Kolhapur",
    "Elite families and businesses served",
    "Clients who come back to us for future deals"
  ];

  return (
    <section 
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden border-b border-slate-200"
      id="stats"
    >
      <div className="absolute inset-0 bg-radial-at-t from-luxury-bronze/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto" id="stats-inner">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-10" id="stats-header">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-bronze font-black mb-3">
            Our Performance
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Proven Real Estate Experience in Kolhapur
          </h2>
          <div className="w-16 h-[2.5px] bg-luxury-bronze mx-auto mt-4" />
        </div>

        {/* Dense Bento-Grid Style Column Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-grid">
          {INSTANT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-[#00529C] hover:bg-white group hover:scale-[1.01] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              id={`stat-card-${idx}`}
            >
              {/* Background gradient glow */}
              <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-luxury-bronze/5 rounded-full blur-2xl group-hover:bg-[#00529C]/10 transition-colors" />

              <div className="flex items-start justify-between mb-4" id={`stat-top-${idx}`}>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-all">
                  {icons[idx]}
                </div>
                <span className="font-mono text-sm text-slate-400 font-bold">0{idx + 1}</span>
              </div>

              <div id={`stat-bottom-${idx}`}>
                <div className="flex items-baseline gap-1 mb-1" id={`stat-value-container-${idx}`}>
                  <span className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#00529C] transition-all duration-300">
                    {stat.value}
                  </span>
                </div>
                
                <h3 className="font-sans font-black text-sm sm:text-base text-slate-900 tracking-wide uppercase mb-1">
                  {stat.label}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                  {helperTexts[idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

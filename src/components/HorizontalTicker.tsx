/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const TICKER_ITEMS = [
  "✓ 100% Verified Titles",
  "✓ Tarabai Park Premium",
  "✓ Nagalapark Residential",
  "✓ Direct Owner Connection",
  "✓ No Broker Markup",
  "✓ MIDC Shiroli Industrial",
  "✓ Gokul Shirgaon MIDC",
  "✓ 15+ Years Legal Expertise",
  "✓ Client Money Protection",
  "✓ RERA Maharashtra Compliant",
  "✓ Multi-generational Trust",
  "✓ Authentic Property Evaluation"
];

export default function HorizontalTicker() {
  return (
    <div className="relative bg-[#00529C] text-white py-4 overflow-hidden border-y border-[#00529C]/30 shadow-sm" id="ticker-bar">
      {/* Decorative side blurs */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#00529C] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#00529C] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Running Marquee using pure CSS keyframes */}
      <div className="flex whitespace-nowrap" id="ticker-track">
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite] text-sm uppercase tracking-widest font-extrabold" id="ticker-slide-primary">
          {TICKER_ITEMS.map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-emerald-300 font-extrabold text-base">•</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
        {/* Duplicate list to form seamless infinite loop loop */}
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite] text-sm uppercase tracking-widest font-extrabold ml-12" id="ticker-slide-secondary">
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-3">
              <span className="text-emerald-300 font-extrabold text-base">•</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Inject custom animation into JSX directly so we never worry about tailwind.config configs */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Building2, Factory, Search, TrendingUp, Trophy, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function ServicesGrid() {
  // Map strings to Lucide icon components
  const renderIcon = (iconName: string) => {
    const iconClass = "text-[#00529C] group-hover:text-white transition-colors duration-300";
    switch (iconName) {
      case 'Home':
        return <Home className={iconClass} size={26} />;
      case 'Briefcase':
        return <Building2 className={iconClass} size={26} />;
      case 'Flame':
        return <Factory className={iconClass} size={26} />;
      case 'Search':
        return <Search className={iconClass} size={26} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} size={26} />;
      default:
        return <Trophy className={iconClass} size={26} />;
    }
  };

  const handleScrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden"
      id="services"
    >
      <div className="absolute inset-0 bg-radial-at-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="services-inner">
        
        {/* Editorial Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="services-headings">
          <div className="max-w-2xl" id="services-title-col">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
              What We Do Best
            </p>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Professional Services
            </h2>
          </div>
          <div className="max-w-xl" id="services-desc-col">
            <p className="font-sans text-base sm:text-lg text-slate-700 font-bold leading-relaxed">
              We help you find, buy, and verify properties safely with 100% legal clarity. No mockups, direct owner connection, and absolute transparent deals in Kolhapur.
            </p>
          </div>
        </div>

        {/* Dense Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-250 hover:border-[#00529C] group transition-all duration-300 hover:scale-[1.01] hover:shadow-xl relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Cover card glow background lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00529C]/10 transition-all duration-700" />
              
              <div id={`service-head-${service.id}`}>
                {/* Icon Container */}
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 w-fit mb-6 group-hover:bg-[#00529C] group-hover:border-[#00529C] transition-colors duration-300" id={`service-ico-box-${service.id}`}>
                  {renderIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 tracking-wide mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Paragraph */}
                <p className="font-sans text-sm sm:text-base text-slate-705 font-bold leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-slate-200 pt-5 space-y-2.5" id={`service-features-${service.id}`}>
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-bold" id={`service-feature-${service.id}-${fIdx}`}>
                    <span className="p-0.5 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action trigger footer */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between" id={`service-action-${service.id}`}>
                <button
                  onClick={handleScrollToContact}
                  className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#00529C] font-black flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                  id={`service-btn-${service.id}`}
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <span className="font-mono text-sm text-slate-400 font-bold select-none">0{idx + 1}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Callout box for customized consultations */}
        <div 
          className="mt-12 bg-[#00529C] text-white rounded-3xl p-8 md:p-12 border border-blue-400/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl"
          id="services-consultation-callout"
        >
          <div className="relative z-10 space-y-3" id="callout-text-block">
            <span className="font-mono text-xs text-white/95 uppercase tracking-[0.25em] font-extrabold">Exclusive Custom Sourcing</span>
            <p className="font-sans font-black text-2xl sm:text-3xl text-white leading-tight">
              Looking for a specific commercial land or off-market property?
            </p>
            <p className="font-sans text-sm sm:text-base text-blue-50 font-bold">
              We coordinate private alignments for commercial buyers with complete NDA-covered confidential assistance.
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="relative z-10 px-8 py-4 rounded-full bg-white text-[#00529C] hover:bg-slate-100 hover:scale-105 transition-all text-xs font-sans uppercase tracking-[0.15em] font-black shrink-0 cursor-pointer shadow-lg"
            id="callout-cta-btn"
          >
            Sourcing Assistance
          </button>
        </div>

      </div>
    </section>
  );
}

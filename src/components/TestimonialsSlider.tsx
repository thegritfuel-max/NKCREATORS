/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialsSlider() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden border-b border-slate-200"
      id="testimonials"
    >
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-radial from-blue-500/3 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto" id="testimonials-inner">
        
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-xl mx-auto mb-10" id="testimonials-header">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
            Client Reviews
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Loved by Kolhapur’s Business Community
          </h2>
          <div className="w-16 h-[2.5px] bg-[#00529C] mx-auto mt-4" />
        </div>

        {/* Primary Quotation slider container */}
        <div 
          className="relative bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-md overflow-hidden min-h-[340px] flex flex-col justify-between"
          id="testimonial-quote-box"
        >
          {/* Faded giant quotation decorative anchor */}
          <div className="absolute -top-6 -left-6 text-[#00529C]/5 pointer-events-none">
            <Quote size={160} className="transform -rotate-12" />
          </div>

          <div className="relative z-10 space-y-6" id="testimonial-quote-body">
            {/* Rates Star Row */}
            <div className="flex items-center gap-1.5" id="testimonial-stars-row">
              {Array.from({ length: TESTIMONIALS_DATA[activeReview].rating }).map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" className="text-[#F59E0B]" />
              ))}
            </div>

            {/* Quote narrative text itself */}
            <blockquote 
              className="font-sans font-bold text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed italic transition-all duration-500"
              id="testimonial-quote-text"
            >
              “{TESTIMONIALS_DATA[activeReview].text}”
            </blockquote>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-slate-200 pt-6 mt-6" id="testimonial-quote-footer">
            {/* Client Signature Descriptors */}
            <div className="space-y-1" id="testimonial-client-signature">
              <div className="flex items-center gap-2">
                <span className="p-0.5 rounded-full bg-green-100 border border-green-200 text-green-700">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span className="font-sans font-black text-slate-900 tracking-wide text-base">{TESTIMONIALS_DATA[activeReview].name}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#00529C] uppercase tracking-widest font-black">
                {TESTIMONIALS_DATA[activeReview].role}
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-bold">
                {TESTIMONIALS_DATA[activeReview].location}
              </p>
            </div>

            {/* Slider triggers and bullets */}
            <div className="flex items-center gap-4 self-end sm:self-auto" id="testimonial-triggers-cluster">
              <button
                onClick={prevReview}
                className="p-3 rounded-full border border-slate-200 hover:border-[#00529C] hover:bg-slate-50 text-slate-700 hover:text-[#00529C] transition-all cursor-pointer"
                aria-label="Previous review"
                id="testimonial-prev-trigger"
              >
                <ChevronLeft size={18} />
              </button>
              
              {/* Pagination bullets numbers */}
              <div className="flex items-center gap-1.5 font-mono text-sm text-slate-500 font-bold">
                <span className="text-slate-900 font-black">{(activeReview + 1).toString().padStart(2, '0')}</span>
                <span>/</span>
                <span>{TESTIMONIALS_DATA.length.toString().padStart(2, '0')}</span>
              </div>

              <button
                onClick={nextReview}
                className="p-3 rounded-full border border-slate-200 hover:border-[#00529C] hover:bg-slate-50 text-slate-700 hover:text-[#00529C] transition-all cursor-pointer"
                aria-label="Next review"
                id="testimonial-next-trigger"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Flat list of mini logos indicating institutional trusts */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-14 opacity-75 grayscale" id="testimonial-institutions">
          <span className="font-sans font-black text-xs sm:text-sm tracking-[0.22em] text-slate-500">STERLING MEDCARE</span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-[0.22em] text-slate-500">PATIL FOUNDRIES</span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-[0.22em] text-slate-500">SHAH PLASTICS MIDC</span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-[0.22em] text-slate-500">REALTOR COUNCIL INDIA</span>
        </div>

      </div>
    </section>
  );
}

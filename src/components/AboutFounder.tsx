/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Award, Signature, Check, MapPin } from 'lucide-react';
import { FOUNDER_INFO } from '../data';

export default function AboutFounder() {
  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200"
      id="about"
    >
      {/* Decorative luxury radial blur lights */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="about-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="about-grid">
          
          {/* Left Column: Portrait Showcase with Luxury Offsets */}
          <div className="lg:col-span-12 xl:col-span-5 md:max-w-xl mx-auto xl:max-w-none w-full relative group" id="about-portrait-wrapper">
            {/* Outline Offset Box */}
            <div className="absolute -inset-4 rounded-3xl border border-[#00529C]/20 scale-95 group-hover:scale-100 group-hover:border-[#00529C]/45 transition-all duration-700 pointer-events-none" />
            
            {/* Primary Portrait Image */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl z-10 aspect-[3/4]" id="portrait-image-container">
              <img
                src="https://i.ibb.co/DgY4sVkw/Screenshot-2026-05-25-222240.png"
                alt={FOUNDER_INFO.name}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-all duration-1000"
                referrerPolicy="no-referrer"
                id="founder-portrait"
              />
              
              {/* Very light clean overlay optimized for ultra high image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00529C]/5 to-transparent pointer-events-none" />

              {/* Floating Asset Location Indicator badge */}
              <div 
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/50 text-slate-900 flex items-center justify-between shadow-lg"
                id="portrait-badge"
              >
                <div>
                  <p className="font-sans font-black text-slate-900 text-base tracking-wide">{FOUNDER_INFO.name}</p>
                  <p className="font-mono text-[10px] text-[#00529C] uppercase tracking-widest mt-0.5 font-bold">ESTD. 2011 • KOLHAPUR CONSULTANT</p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>

            {/* Micro Badge for certified credentials */}
            <div 
              className="absolute -top-4 -right-2 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#00529C]/30 shadow-2xl z-20 flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300"
              id="certified-sticker"
            >
              <Award className="text-[#00529C] animate-pulse" size={24} />
              <span className="font-mono text-[10px] text-slate-900 font-extrabold uppercase tracking-wider">NAR Certified</span>
            </div>
          </div>

          {/* Right Column: Editorial Copywriting */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6" id="about-text-wrapper">
            <div id="about-header">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-2">
                Founder Profile
              </p>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                Authenticity & Integrity in Real Estate Consulting
              </h2>
              <p className="font-sans italic text-lg sm:text-xl text-[#00529C] font-extrabold mt-4">
                "{FOUNDER_INFO.tagline}"
              </p>
            </div>

            <div className="space-y-4 font-sans text-slate-800 font-bold text-base sm:text-lg leading-relaxed" id="about-bio-paragraphs">
              <p>{FOUNDER_INFO.bio}</p>
              <p>
                The Kolhapur property market rewards clear, vetted intelligence. We represent your pure interests with complete transparency, direct buyer-to-seller dialogue, and zero hidden markups.
              </p>
            </div>

            {/* Structured Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-slate-200 py-6" id="about-credentials-grid">
              <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200" id="about-cr-1">
                <span className="font-mono text-xs text-[#00529C] uppercase tracking-widest font-black">National Vetting</span>
                <p className="font-sans font-black text-slate-900 text-sm sm:text-base">NAR India Governing Member</p>
                <p className="font-sans text-xs sm:text-sm text-slate-705 font-bold">Upholding professional guidelines and ethical broker standards across West India.</p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200" id="about-cr-2">
                <span className="font-mono text-xs text-[#00529C] uppercase tracking-widest font-black">Local Anchorage</span>
                <p className="font-sans font-black text-slate-900 text-sm sm:text-base">Kolhapur Realtors Association</p>
                <p className="font-sans text-xs sm:text-sm text-slate-705 font-bold">Direct assistance helping buyers secure clear title documents block by block.</p>
              </div>
            </div>

            {/* Oaths Check List */}
            <div className="space-y-3" id="oaths-list">
              <h4 className="font-sans font-black text-xs sm:text-sm tracking-widest text-[#00529C] uppercase">The Advisory Mandate</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 font-bold" id="oaths-checks">
                <div className="flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>30-Year History Legal Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>Direct-Owner Fair Negotiation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>Zero Price Mockups & Markups</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>100% Secure & RERA Sanctioned</span>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-6" id="about-signature-block">
              <div className="flex flex-col">
                <span className="font-sans font-black text-slate-900 tracking-wide text-base sm:text-lg">{FOUNDER_INFO.name}</span>
                <span className="font-mono text-xs text-[#00529C] tracking-widest uppercase mt-0.5 font-bold">{FOUNDER_INFO.title}</span>
              </div>
              <div className="text-right" id="signature-sign">
                <span className="font-display italic text-2xl sm:text-3xl text-[#00529C] font-black select-none block tracking-wider pr-2">
                  {FOUNDER_INFO.signature}
                </span>
                <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest block mt-1">Certified Signature</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

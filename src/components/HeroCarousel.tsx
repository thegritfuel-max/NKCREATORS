/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Compass, ShieldCheck, MapPin } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85",
    preTitle: "TRUSTED PORTFOLIO LEADERSHIP • SINCE 2011",
    title: "Sovereign Property Advisory",
    subtitle: "Facilitating premium residential, commercial, and industrial property acquisitions in Kolhapur with absolute legal diligence and clean title verification.",
    highlightText: "Tarabai Park",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    preTitle: "KOLHAPUR ELITE HOMES",
    title: "Curated Luxury Residential Assets",
    subtitle: "Private, off-market listings featuring high-end villas, sky duplexes, and premium plots across Kolhapur's prestigious enclaves.",
    highlightText: "Nagalapark Elite",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
    preTitle: "MIDC INDUSTRIAL & COMMERCIAL",
    title: "Strategic Enterprise Developments",
    subtitle: "Fully compliant industrial warehouse facilities, manufacturing plants, and corporate complexes inside Shiroli and Gokul Shirgaon MIDC.",
    highlightText: "MIDC Industrial",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85",
    preTitle: "PREMIUM OFFICE PORTFOLIOS",
    title: "Absolute Integrity & Local Anchorage",
    subtitle: "Direct-to-owner Grade-A commercial workspaces and prime investment avenues with guaranteed 30-year legacy record tracing.",
    highlightText: "Commercial Sectors",
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[750px] lg:h-screen w-full overflow-hidden bg-slate-950 flex items-center py-16 lg:py-0"
      id="home"
    >
      {/* Background Slides with fully visible images & robust contrast styling */}
      <div className="absolute inset-0 z-0" id="hero-slides-wrapper">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-[6500ms]`}
            id={`hero-slide-${idx}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-95"
              referrerPolicy="no-referrer"
              id={`hero-bg-img-${idx}`}
            />
            {/* Soft, beautiful dark radial and linear gradients to preserve maximum photo detail while locking readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/45 to-black/35 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-black/30 to-transparent z-[1]" />
          </div>
        ))}
      </div>

      {/* Hero Content Grid - text made bright, visible, and highly accessible */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 lg:pb-24" id="hero-content">
        <div className="max-w-4xl" id="hero-text-block">
          {/* Tagline Badge */}
          <div 
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00529C]/95 border border-[#00529C]/30 backdrop-blur-md mb-8 animate-fadeIn"
            id="hero-badge"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white font-bold leading-none">
              {HERO_SLIDES[currentSlide].preTitle}
            </span>
          </div>

          {/* Magnified Heading using High-End Playfair Display Font */}
          <h1 
            className="font-display font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] mb-6 sm:mb-8 select-none drop-shadow-md brightness-110 filter"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}
            id="hero-main-title"
          >
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle with highly visible format & large fonts */}
          <p 
            className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-100 font-semibold leading-relaxed max-w-3xl mb-8 sm:mb-10 lg:mb-12 drop-shadow-md"
            style={{ textShadow: "0 1px 5px rgba(0,0,0,0.7)" }}
            id="hero-subtitle"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* CTA Buttons in high contrast */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 max-w-sm sm:max-w-none mb-12 lg:mb-0" id="hero-ctas">
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-sans uppercase tracking-[0.15em] font-black text-white bg-[#00529C] hover:bg-[#003970] rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-[#00529C]/30 flex items-center justify-center gap-3 cursor-pointer border border-white/25"
              id="hero-cta-book"
            >
              <Calendar size={14} className="animate-pulse" />
              Book Private Consultation
            </button>
            <button
              onClick={() => handleScrollTo('properties')}
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-sans uppercase tracking-[0.15em] font-black text-slate-900 bg-white border-2 border-white rounded-full hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              id="hero-cta-explore"
            >
              <Compass size={14} className="text-[#00529C]" />
              Explore Asset Boards
            </button>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="relative lg:absolute lg:bottom-10 lg:left-8 lg:right-8 mt-12 lg:mt-0 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6 z-20 w-full" id="hero-footer-indicators">
          {/* Active Status Display with location indicator */}
          <div className="flex items-center gap-4 text-xs text-slate-200 font-mono" id="hero-active-location font-semibold">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-emerald-400" />
              <span className="text-white font-extrabold tracking-wide">{HERO_SLIDES[currentSlide].highlightText}</span>
            </div>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Sanction Compliant</span>
            </div>
          </div>

          {/* Left/Right manual click triggers and Bullets */}
          <div className="flex items-center gap-4" id="hero-slider-controls">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/40 text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-sm"
              aria-label="Previous slide"
              id="hero-prev-btn"
            >
              <ChevronLeft size={16} />
            </button>
            {/* Slide Indicators */}
            <div className="flex items-center gap-2" id="hero-indicator-bullets">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === currentSlide ? 'w-8 bg-[#00529C]' : 'w-2 bg-slate-400 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`hero-bullet-${idx}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/40 text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-sm"
              aria-label="Next slide"
              id="hero-next-btn"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

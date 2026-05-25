/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, CalendarRange, Landmark, MapPin, Eye, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import ImageModal from './ImageModal';

export default function ProjectsShowcase() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string; loc: string } | null>(null);

  const handleInquireProject = (projectTitle: string) => {
    localStorage.setItem('inquiry_property_title', `Project Advisory: ${projectTitle}`);
    localStorage.setItem('inquiry_property_category', 'commercial');
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new Event('propertyInquiryUpdate'));
    }
  };

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200"
      id="projects"
    >
      <div className="absolute inset-0 bg-radial-at-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="projects-inner">
        {/* Editorial Sub-Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="projects-headings">
          <div className="max-w-xl" id="projects-title-col">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
              Milestone Showcase
            </p>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Our Completed Real Estate Projects
            </h2>
          </div>
          <div className="max-w-md" id="projects-desc-col">
            <p className="font-sans text-sm sm:text-base text-slate-705 font-bold leading-relaxed">
              Real records of successful site clearance, land title verification, and transparent delivery in Kolhapur's prime zones.
            </p>
          </div>
        </div>

        {/* Projects Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-cards-grid">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between group hover:border-[#00529C] hover:scale-[1.01] transition-all duration-300 hover:shadow-lg"
              id={`project-card-${proj.id}`}
            >
              <div id={`project-main-${proj.id}`}>
                {/* Visual Cover image */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer group-hover:scale-102 transition-transform duration-500"
                  onClick={() => setSelectedImage({ src: proj.image, alt: proj.title, title: proj.title, loc: proj.location })}
                  id={`project-image-wrap-${proj.id}`}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter saturate-[95%]"
                    referrerPolicy="no-referrer"
                    id={`project-img-${proj.id}`}
                  />
                  {/* Absolute Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Interactive Eye icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 bg-white rounded-full border border-blue-200 text-[#00529C] flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold">
                      <Eye size={14} />
                      <span>Zoom Project Image</span>
                    </div>
                  </div>

                  {/* Operational Year overlay indicator */}
                  <div 
                    className="absolute top-4 left-4 px-3.5 py-1.5 bg-white text-slate-900 border border-slate-200 rounded-full text-[10px] font-mono font-bold flex items-center gap-2 shadow-sm"
                    id={`project-year-${proj.id}`}
                  >
                    <CalendarRange size={12} className="text-[#00529C]" />
                    <span className="font-extrabold text-[#00529C]">DELIVERED {proj.year}</span>
                  </div>

                  {/* Status Indicator Stamp */}
                  <div 
                    className={`absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-extrabold tracking-wide ${
                      proj.status === 'Completed'
                        ? 'bg-green-100 border border-green-200 text-green-800 font-extrabold'
                        : 'bg-blue-100 border border-blue-200 text-[#00529C] font-extrabold'
                    }`}
                    id={`project-status-stamp-${proj.id}`}
                  >
                    {proj.status.toUpperCase()}
                  </div>
                </div>

                {/* Narrative Details Box */}
                <div className="p-6 md:p-8 space-y-4" id={`project-content-${proj.id}`}>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#00529C] font-black" id={`project-loc-${proj.id}`}>
                    <MapPin size={14} />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 group-hover:text-[#00529C] transition-colors" id={`project-title-h-${proj.id}`}>
                    {proj.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-slate-800 font-bold leading-relaxed" id={`project-desc-${proj.id}`}>
                    {proj.description}
                  </p>

                  {/* Project Checklist details */}
                  <div className="space-y-2 border-t border-slate-200 pt-4" id={`project-highlights-${proj.id}`}>
                    <h4 className="font-sans font-black text-xs uppercase tracking-widest text-[#00529C]">Project Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id={`project-highlights-grid-${proj.id}`}>
                      {proj.highlights.map((hlt, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-700 font-bold" id={`project-hlt-${proj.id}-${idx}`}>
                          <span className="p-0.5 rounded-full bg-green-100 border border-green-200 text-green-700 mt-0.5 shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span>{hlt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Inquire Call to action */}
              <div className="p-6 pb-8 border-t border-slate-250 flex items-center justify-between" id={`project-footer-${proj.id}`}>
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-mono uppercase tracking-widest font-bold" id={`project-legal-mark-${proj.id}`}>
                  <ShieldCheck size={14} className="text-green-600" />
                  <span className="font-extrabold text-[#00529C]">Tested Documentations</span>
                </div>
                <button
                  onClick={() => handleInquireProject(proj.title)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-widest font-black text-[#00529C] hover:text-white border-2 border-[#00529C] hover:bg-[#00529C] rounded-full transition-all cursor-pointer shadow-sm"
                  id={`project-btn-${proj.id}`}
                >
                  Request Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Projects Visualizer overlay portals */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          location={selectedImage.loc}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}

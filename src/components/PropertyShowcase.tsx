/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Bed, Bath, Layout, MapPin, SearchCode, ArrowRight, Eye } from 'lucide-react';
import { PROPERTIES_DATA } from '../data';
import { PropertyCategory, Property } from '../types';
import ImageModal from './ImageModal';

interface PropertyShowcaseProps {
  onSelectProperty?: (propTitle: string, category: PropertyCategory) => void;
}

export default function PropertyShowcase({ onSelectProperty }: PropertyShowcaseProps) {
  const [activeTab, setActiveTab] = useState<PropertyCategory | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string; loc: string } | null>(null);

  const filteredProperties = PROPERTIES_DATA.filter((prop) => {
    if (activeTab === 'all') return true;
    return prop.category === activeTab;
  });

  const handleInquire = (prop: Property) => {
    if (onSelectProperty) {
      onSelectProperty(prop.title, prop.category);
    } else {
      // Fallback scroll and simple session population
      localStorage.setItem('inquiry_property_title', prop.title);
      localStorage.setItem('inquiry_property_category', prop.category);
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        // Dispatch custom global event to notify the form
        window.dispatchEvent(new Event('propertyInquiryUpdate'));
      }
    }
  };

  const tabs: { id: PropertyCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'residential', label: 'Residential Estates' },
    { id: 'commercial', label: 'Commercial Cores' },
    { id: 'industrial', label: 'Industrial Logistics' }
  ];

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden border-b border-slate-200"
      id="properties"
    >
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="properties-inner">
        {/* Editorial Subcategory Headings */}
        <div className="text-center max-w-3xl mx-auto mb-10" id="properties-header">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-3">
            Active Portfolios
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Clear Titles. Secure Purchases.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-705 font-bold max-w-2xl mx-auto leading-relaxed">
            Choose from our active list of verified residential, commercial, or industrial properties in Kolhapur. Every property has been fully checked for clean paperwork.
          </p>

          {/* Filter Tabs - Premium pill buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8" id="property-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#00529C] border-[#00529C] text-white font-black shadow-md scale-105'
                    : 'bg-white border-slate-250 text-slate-800 hover:text-[#00529C] hover:border-[#00529C] hover:bg-slate-50 font-black'
                }`}
                id={`property-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dense Showcase Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="property-listings-grid"
        >
          {filteredProperties.map((prop) => (
            <article
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between group hover:border-[#00529C] hover:scale-[1.01] transition-all duration-300 hover:shadow-xl relative"
              id={`property-card-${prop.id}`}
            >
              <div id={`property-card-main-${prop.id}`}>
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer" id={`property-img-wrap-${prop.id}`}>
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id={`property-img-${prop.id}`}
                  />
                  {/* Subtle Shading Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Action Trigger Sticker */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setSelectedImage({ src: prop.image, alt: prop.title, title: prop.title, loc: prop.location })}
                    id={`property-img-hover-overlay-${prop.id}`}
                  >
                    <div className="p-3 rounded-full bg-white border border-[#00529C] text-[#00529C] flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:scale-105 transition-transform font-bold" id={`property-img-zoom-sticker-${prop.id}`}>
                      <Eye size={14} />
                      <span>Zoom View</span>
                    </div>
                  </div>

                  {/* Status Sticker Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#00529C] rounded-full text-[10px] font-mono uppercase tracking-widest text-white font-extrabold shadow-md"
                    id={`property-status-${prop.id}`}
                  >
                    {prop.tag}
                  </div>

                  {/* Metadata location badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-mono text-slate-905 bg-white backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200 font-bold" id={`property-location-${prop.id}`}>
                    <MapPin size={12} className="text-[#00529C]" />
                    <span>{prop.location}</span>
                  </div>
                </div>

                {/* Listing Details Area */}
                <div className="p-6" id={`property-content-${prop.id}`}>
                  {/* Category Stamp & Area dimensions */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4" id={`property-meta-row-${prop.id}`}>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00529C] font-black animate-pulse">
                      {prop.category}
                    </span>
                    <div className="flex items-center gap-1 font-mono text-xs text-slate-720 font-bold" id={`property-sqft-${prop.id}`}>
                      <Layout size={13} className="text-[#00529C]" />
                      <span>{prop.sqft}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 group-hover:text-[#00529C] transition-colors leading-snug mb-3" id={`property-title-${prop.id}`}>
                    {prop.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-800 font-bold leading-relaxed mb-5" id={`property-desc-${prop.id}`}>
                    {prop.description}
                  </p>

                  {/* Fine Features Grid */}
                  <div className="space-y-1.5 mb-6" id={`property-features-${prop.id}`}>
                    {prop.features.slice(0, 3).map((feat, fIdx) => (
                      <p key={fIdx} className="font-sans text-xs sm:text-sm text-slate-700 font-bold flex items-center gap-1.5" id={`property-feat-${prop.id}-${fIdx}`}>
                        <span className="h-1.5 w-1.5 bg-[#00529C] rounded-full animate-ping" />
                        <span>{feat}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Area */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between" id={`property-card-foot-${prop.id}`}>
                <div className="flex flex-col" id={`property-price-${prop.id}`}>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none font-bold">Investment Price</span>
                  <span className="font-sans font-black text-xl sm:text-2xl text-[#00529C] mt-1.5 animate-pulse">{prop.price}</span>
                </div>
                
                <button
                  onClick={() => handleInquire(prop)}
                  className="px-6 py-3.5 text-xs font-sans uppercase tracking-[0.15em] font-black text-white bg-[#00529C] rounded-full hover:bg-[#003970] transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-900/10"
                  id={`property-inquire-${prop.id}`}
                >
                  <span>Inquire</span>
                  <ArrowRight size={13} className="animate-bounce" />
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* Embedded Enlarge Viewer Modal */}
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

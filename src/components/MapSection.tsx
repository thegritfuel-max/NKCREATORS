/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Navigation, Clock, CalendarCheck } from 'lucide-react';

export default function MapSection() {
  const officeAddress = {
    line1: "Office No. 410, 4th Floor,",
    line2: "Krystal Square, E Ward,",
    line3: "Near Khanvilkar Petrol Pump, Nagalapark,",
    line4: "Kolhapur, Maharashtra 416002"
  };

  const handleOpenGPS = () => {
    const query = encodeURIComponent("Krystal Square Nagalapark Kolhapur");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-200"
      id="map-section"
    >
      <div className="max-w-7xl mx-auto" id="map-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="map-grid">
          
          {/* Left Column: Office Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="map-info-col">
            <div id="map-heading">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-2">
                Our Office LOCATION
              </p>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Visit Our Office
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-700 font-bold mt-3 leading-relaxed">
                Connect directly with Nitin Kesarkar & Associates at Krystal Square, Nagalapark in Kolhapur. We are always happy to help with a friendly consultation.
              </p>
            </div>

            {/* Address Details Block */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-250 space-y-4 shadow-sm" id="map-details-card">
              <div className="flex items-start gap-3" id="address-block">
                <div className="p-2.5 bg-blue-100 border border-blue-200 text-[#00529C] rounded-lg mt-1 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans font-black text-slate-900 text-sm sm:text-base">Office Address</h3>
                  <address className="font-sans text-sm sm:text-base text-slate-800 font-bold not-italic leading-relaxed">
                    <p>{officeAddress.line1}</p>
                    <p>{officeAddress.line2}</p>
                    <p>{officeAddress.line3}</p>
                    <p>{officeAddress.line4}</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3" id="hours-block">
                <div className="p-2.5 bg-blue-100 border border-blue-200 text-[#00529C] rounded-lg shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-slate-900 text-sm sm:text-base">Consultation Hours</h3>
                  <p className="font-sans text-sm sm:text-base text-slate-800 font-bold leading-relaxed">Monday - Saturday: 10:30 AM – 07:30 PM</p>
                  <p className="font-sans text-xs text-[#00529C] font-semibold mt-0.5">Prior appointment recommended</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-200 pt-4" id="phone-block">
                <div className="p-2.5 bg-blue-100 border border-blue-200 text-[#00529C] rounded-lg shrink-0">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-slate-900 text-sm sm:text-base">Inquiry Channel</h3>
                  <a href="#contact" className="font-sans text-sm sm:text-base text-[#00529C] hover:underline hover:text-[#003970] font-bold block mt-1 transition-colors">
                    Secure Digital Portal &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Quick GPS Launch Action Buttons */}
            <div className="flex flex-wrap gap-4" id="map-buttons-cluster">
              <button
                onClick={handleOpenGPS}
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-black text-white bg-[#00529C] rounded-full hover:bg-[#003970] hover:scale-103 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                id="maps-launch-btn"
              >
                <Navigation size={14} className="animate-pulse" />
                Open Google Maps App
              </button>
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-black text-slate-900 border border-slate-350 hover:bg-slate-50 rounded-full hover:scale-103 transition-all flex items-center gap-2 cursor-pointer"
                id="call-office-btn"
              >
                Inquire to Office
              </a>
            </div>
          </div>

          {/* Right Column: Actual Interactive Map iframe */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="map-vector-wrapper">
            <div className="w-full h-full min-h-[350px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-slate-250 shadow-md relative group">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Krystal%20Square%20E%20Ward%20Nagalapark%20Kolhapur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="google-map-iframe"
              />
              <div className="absolute bottom-3 right-3 bg-[#00529C] text-white px-3 py-1 bg-opacity-95 text-xs font-mono rounded border border-blue-400/30 z-10">
                Interactive Map View
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

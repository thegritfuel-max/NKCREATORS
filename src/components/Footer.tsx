/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, Facebook, MapPin, Mail, FileCheck2, ShieldAlert } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="bg-slate-50 text-slate-600 font-sans border-t border-slate-200 relative z-10"
      id="app-footer"
    >
      {/* Decorative top tiny lines border matches premium electronics designs */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00529C]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="footer-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-11" id="footer-main-grid">
          
          {/* Column 1: Core logo and narrative briefs (covers 4 cols) */}
          <div className="lg:col-span-4 space-y-5" id="footer-brand-col">
            <Logo showText={true} />
            <p className="text-sm text-slate-700 font-bold leading-relaxed">
              Serving elite residential, commercial, and industrial transactions in Kolhapur, Maharashtra since 2011. Structured on clean paperwork and 100% legal clearance.
            </p>
            {/* Regulatory markers */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono font-bold" id="footer-legal-marks">
              <FileCheck2 size={14} className="text-[#00529C]" />
              <span className="text-[#00529C]">NAR INDIA WEST CODE COMPLIANT</span>
            </div>
          </div>

          {/* Column 2: Navigator Links (covers 3 cols) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-col">
            <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm" id="footer-navigation-list">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  About Founder
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleSmoothScroll(e, '#properties')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  Verified Properties
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')} className="hover:text-[#00529C] transition-colors font-bold text-slate-700">
                  Purchase Process
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact indices (covers 3 cols) */}
          <div className="lg:col-span-3 space-y-4" id="footer-contact-col">
            <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-wider">Office Address</h4>
            <div className="space-y-3.5 text-sm text-slate-600 font-bold" id="footer-contact-block">
              <div className="flex items-start gap-2.5" id="foot-address">
                <MapPin size={15} className="text-[#00529C] mt-0.5 shrink-0" />
                <address className="not-italic text-slate-700 font-bold">
                  Office No. 410, 4th Floor,<br />
                  Krystal Square, Nagalapark,<br />
                  Kolhapur, MH 416002
                </address>
              </div>
              <div className="flex items-center gap-2.5" id="foot-phone">
                <FileCheck2 size={15} className="text-[#00529C] shrink-0" />
                <a href="#contact" className="hover:text-[#00529C] font-sans text-slate-950 font-bold transitions-colors whitespace-nowrap">
                  Secure Consultation Desk
                </a>
              </div>
              <div className="flex items-center gap-2.5" id="foot-mail">
                <Mail size={15} className="text-[#00529C] shrink-0" />
                <span className="text-slate-900 font-mono font-black">info@kesarkarrealtors.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Outreaches (covers 2 cols) */}
          <div className="lg:col-span-2 space-y-4" id="footer-social-col">
            <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-wider">Follow Us</h4>
            <div className="flex flex-col gap-2" id="footer-social-links">
              <a 
                href="https://www.linkedin.com/in/nitinkesarkar-best-real-estate-consultant-in-kolhapur/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-[#00529C] transition-colors border border-slate-200 p-2 rounded-lg bg-white shadow-xs"
                id="social-li"
              >
                <Linkedin size={14} className="text-[#0E76A8]" />
                <span className="font-sans font-black text-slate-755">LinkedIn</span>
              </a>
              <a 
                href="https://www.facebook.com/realnitinkesarkar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-[#00529C] transition-colors border border-slate-200 p-2 rounded-lg bg-white shadow-xs"
                id="social-fb"
              >
                <Facebook size={14} className="text-[#3B5998]" />
                <span className="font-sans font-black text-slate-755">Facebook Page</span>
              </a>
              <a 
                href="https://www.facebook.com/realnitinkesarkar/reels/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-[#00529C] transition-colors border border-slate-200 p-2 rounded-lg bg-white shadow-xs"
                id="social-fbr"
              >
                <Facebook size={14} className="text-pink-600" />
                <span className="font-sans font-black text-slate-755">Facebook Reels</span>
              </a>
              <a 
                href="https://www.facebook.com/realnitinkesarkar/videos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-[#00529C] transition-colors border border-slate-200 p-2 rounded-lg bg-white shadow-xs"
                id="social-fbv"
              >
                <Facebook size={14} className="text-[#00529C]" />
                <span className="font-sans font-black text-slate-755">Videos</span>
              </a>
            </div>
          </div>

        </div>

        {/* Elegant divider system */}
        <div className="w-full h-[1px] bg-slate-200 my-8" id="footer-bottom-divider" />

        {/* Bottom copyright disclaimers line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono" id="footer-bottom">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} Nitin Kesarkar & Associates. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-405 font-bold">Maharashtra RERA professional advisory guideline compliance.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2" id="footer-bottom-links">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-slate-800 transition-colors font-bold">Confidentiality</a>
            <span>•</span>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-slate-800 transition-colors font-bold">Arbitration</a>
            <span>•</span>
            <span className="flex items-center gap-1 font-bold">
              <ShieldAlert size={12} className="text-[#00529C]" />
              <span>Certified NAR Advisory</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

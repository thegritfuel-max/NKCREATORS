/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'Founder', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'properties', label: 'Properties', href: '#properties' },
    { id: 'projects', label: 'Completed', href: '#projects' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSegment(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-white/95 py-4 border-slate-200 shadow-lg shadow-slate-200/40'
            : 'bg-white py-5 border-slate-100'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" id="navbar-inner">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center" id="nav-logo-link">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3" id="desktop-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm xl:text-base font-sans uppercase tracking-wider transition-all duration-300 rounded-md relative group ${
                  activeSegment === item.id
                    ? 'text-[#00529C] font-black'
                    : 'text-slate-700 hover:text-[#00529C] font-extrabold'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {/* Micro underline indicator */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[3px] bg-[#00529C] rounded-full transition-transform duration-300 ${
                    activeSegment === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6" id="desktop-cta-container">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 text-sm font-sans uppercase text-slate-800 hover:text-[#00529C] transition-colors font-bold whitespace-nowrap"
              id="header-phone-cta"
            >
              <CalendarCheck size={15} className="text-[#00529C]" />
              <span className="whitespace-nowrap">Consultation Desk</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-6 py-3 text-xs xl:text-sm font-sans uppercase tracking-widest font-black text-white bg-[#00529C] rounded-full hover:scale-[1.03] hover:bg-[#003970] transition-all duration-300 shadow-md shadow-blue-900/10 border border-[#00529C]/30 cursor-pointer overflow-hidden"
              id="header-book-cta"
            >
              <span className="relative z-10 flex items-center gap-2">
                <CalendarCheck size={15} />
                Contact Office
              </span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3" id="mobile-controls-wrapper">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="p-2.5 rounded-full border border-slate-300 bg-white text-[#00529C] shadow-sm flex items-center justify-center"
              title="Inquire to Office"
              id="mobile-phone-trigger"
            >
              <CalendarCheck size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm focus:outline-none cursor-pointer font-bold"
              aria-label="Toggle menu"
              id="mobile-hamburger-trigger"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

          {/* Mobile Drawer (Left Slide/Full Cover) */}
      <div
        className={`fixed inset-0 z-30 transform transition-transform duration-500 bg-white/98 backdrop-blur-lg lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex flex-col gap-5" id="mobile-drawer-nav">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#00529C] font-extrabold border-b border-slate-200 pb-2 mb-2">
            Navigation Map
          </p>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-xl font-sans uppercase tracking-wider transition-all duration-300 py-2 border-b border-slate-100 flex items-center justify-between ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              } ${activeSegment === item.id ? 'text-[#00529C] font-black' : 'text-slate-800 font-bold'}`}
              id={`mobile-nav-item-${item.id}`}
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-[#00529C]/80">{(index + 1).toString().padStart(2, '0')}</span>
            </a>
          ))}
        </div>

        <div
          className={`space-y-4 border-t border-slate-200 pt-6 transition-all duration-500 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          id="mobile-drawer-footer"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-[#00529C] font-black">Main Office Location</span>
            <span className="text-sm text-slate-900 font-bold">Krystal Square, Nagalapark, Kolhapur</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-4 text-center text-xs font-sans uppercase tracking-widest font-black text-white bg-[#00529C] rounded-xl transition-all block cursor-pointer"
            id="mobile-drawer-cta"
          >
            Connect on WhatsApp / Call
          </a>
        </div>
      </div>
    </>
  );
}

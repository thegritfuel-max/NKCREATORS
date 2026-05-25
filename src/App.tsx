/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import HorizontalQuotesTicker from './components/HorizontalQuotesTicker';
import TrustStats from './components/TrustStats';
import AboutFounder from './components/AboutFounder';
import ServicesGrid from './components/ServicesGrid';
import PropertyShowcase from './components/PropertyShowcase';
import ProjectsShowcase from './components/ProjectsShowcase';
import TimelineSection from './components/TimelineSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSlider from './components/TestimonialsSlider';
import MapSection from './components/MapSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Exclusive splash screen loading timer
    const splashTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(splashTimer);
    };
  }, []);

  const handleSelectPropertyInquiry = (propTitle: string, category: string) => {
    localStorage.setItem('inquiry_property_title', propTitle);
    localStorage.setItem('inquiry_property_category', category);
    
    // Smooth scroll down to the contact form section matches user interactions
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
      // Notify the input form dynamically
      window.dispatchEvent(new Event('propertyInquiryUpdate'));
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-charcoal selection:bg-[#D4A373] selection:text-black overflow-x-hidden" id="app-root-container">
      
      {/* Absolute Loading Splash Screen with Logo overlay portal */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-6 text-center"
            id="splash-loading-screen"
          >
            {/* Ambient gold/blue radial glow inside splash */}
            <div className="absolute inset-0 bg-radial-at-c from-[#00529C]/15 via-transparent to-transparent pointer-events-none" />

            <div className="relative space-y-8 flex flex-col items-center max-w-sm" id="splash-core-content">
              {/* Splendid Logo displaying */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-850"
                id="splash-logo-card"
              >
                <img
                  src="https://i.ibb.co/PzhZDRh1/Screenshot-2026-05-25-220507.png"
                  alt="Kesarkar Realtors Logo"
                  className="h-16 w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Slogan details and loading bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
                id="splash-indicator-box"
              >
                <div className="space-y-1">
                  <h3 className="font-sans text-[#D4A373] uppercase tracking-[0.22em] text-xs font-black">
                    Nitin Kesarkar & Associates
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-400 font-extrabold tracking-widest uppercase">
                    Elite Property Advisory & Legal Clearances
                  </p>
                </div>

                {/* Simulated golden/blue beautiful line loader */}
                <div className="w-48 h-[2.5px] bg-slate-800 rounded-full mx-auto overflow-hidden relative" id="splash-progress-track">
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent rounded-full"
                    id="splash-progress-bar"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background radial accent light leak gradients representing astronomical luxury */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-luxury-bronze/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-[#F59E0B]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-0 w-[700px] h-[700px] bg-luxury-bronze/4 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Structured Single-Page Digital Luxury Modules */}
      <div className="relative z-10 flex flex-col min-h-screen" id="app-rendering-core">
        
        {/* Sticky Header Navigation bar */}
        <Navbar />

        {/* Cinematic Fullscreen Carousel Hero board */}
        <main className="flex-grow" id="app-main-viewports">
          
          <HeroCarousel />

          {/* Horizontal Rotating Quotes/Slogans Ticker */}
          <HorizontalQuotesTicker />
          
          {/* Animated Statistics & Counters section */}
          <TrustStats />
          
          {/* Executive Founder Brand section */}
          <AboutFounder />
          
          {/* Elite Services & Capabilities Grid */}
          <ServicesGrid />
          
          {/* Active Asset Listings Board with Filter controls */}
          <PropertyShowcase onSelectProperty={handleSelectPropertyInquiry} />
          
          {/* Landmark Completed Developments Grid */}
          <ProjectsShowcase />
          
          {/* Vertical Storytelling Timeline Section */}
          <TimelineSection />
          
          {/* Six Core Trust Feature Badges */}
          <WhyChooseUs />
          
          {/* High-level HNW Client Testimonials carousel */}
          <TestimonialsSlider />
          
          {/* Coordinate Vector Map & navigation anchors */}
          <MapSection />
          
          {/* Confidential Advisory Contact Scheduler form */}
          <ContactForm />

        </main>

        {/* Apple Inspired Minimalist Footer layout */}
        <Footer />

      </div>

      {/* WhatsApp Floating Advisory connection */}
      <WhatsAppFloating />

    </div>
  );
}

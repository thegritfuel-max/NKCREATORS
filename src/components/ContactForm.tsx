/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Compass } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'residential-buy',
    budget: '3-5-cr',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Read clicked values from localStorage to pre-fill inquiry
  const loadInquiryPrefills = () => {
    const cachedTitle = localStorage.getItem('inquiry_property_title');
    const cachedCategory = localStorage.getItem('inquiry_property_category');
    
    if (cachedTitle) {
      let reqValue = 'residential-buy';
      if (cachedCategory === 'commercial') reqValue = 'commercial-lease';
      if (cachedCategory === 'industrial') reqValue = 'industrial-midc';
      
      setFormData((prev) => ({
        ...prev,
        requirement: reqValue,
        message: `Hello Nitin Kesarkar & Associates, I am highly interested in the following asset: "${cachedTitle}". Please share details.`
      }));
      
      // Clean up cache to prevent stale pre-fills on manual reload
      localStorage.removeItem('inquiry_property_title');
      localStorage.removeItem('inquiry_property_category');
    }
  };

  useEffect(() => {
    // Initial load
    loadInquiryPrefills();

    // Listen to our custom property click events
    window.addEventListener('propertyInquiryUpdate', loadInquiryPrefills);
    return () => window.removeEventListener('propertyInquiryUpdate', loadInquiryPrefills);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    
    const phoneNo = formData.phone.trim();
    if (!phoneNo) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phoneNo.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        requirement: 'residential-buy',
        budget: '3-5-cr',
        message: ''
      });
    }, 1500);
  };

  const handleWhatsAppAction = () => {
    if (!validateForm()) return;

    const reqLabelMap: Record<string, string> = {
      'residential-buy': 'Residential Acquisition',
      'commercial-lease': 'Commercial Leasing / Retail',
      'industrial-midc': 'MIDC Industrial Logistics',
      'property-sell': 'Property Listing / Sale Representation'
    };

    const budgetLabelMap: Record<string, string> = {
      'under-1.5-cr': 'Below ₹1.5 Cr',
      '1.5-3-cr': '₹1.5 Cr - ₹3.0 Cr',
      '3-5-cr': '₹3.0 Cr - ₹5.0 Cr',
      'above-5-cr': '₹5.0 Cr+'
    };

    const requirementName = reqLabelMap[formData.requirement] || formData.requirement;
    const budgetRange = budgetLabelMap[formData.budget] || formData.budget;

    const textMessage = `*NITIN KESARKAR PROPERTY INQUIRY*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'N/A'}%0A*Requirement:* ${requirementName}%0A*Budget Range:* ${budgetRange}%0A*Message:* ${formData.message || 'Requesting property consultation.'}`;
    
    window.open(`https://api.whatsapp.com/send?phone=919552341166&text=${textMessage}`, '_blank');
  };

  return (
    <section 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden scroll-mt-12"
      id="contact"
    >
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" id="contact-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="contact-split">
          
          {/* Left Column: Explanatory Copy block */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6" id="contact-text-col">
            <div id="contact-heading">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00529C] font-black mb-2">
                Secure Channels
              </p>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Send Us a Message
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-705 font-bold mt-4 leading-relaxed">
                Send your property requirements to us securely. Nitin Kesarkar & Associates guarantees complete transactional confidentiality and direct professional advisor assistance.
              </p>
            </div>

            {/* Quick Guarantees row */}
            <div className="space-y-3" id="confidentiality-guarantees-row">
              <h3 className="font-sans font-black text-xs sm:text-sm text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2">Our Guarantees</h3>
              
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-bold" id="cg-1">
                <span className="p-1 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </span>
                <span>No third-party real estate database sharing</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-bold" id="cg-2">
                <span className="p-1 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </span>
                <span>Strictly 100% direct client-to-seller transparency</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-bold" id="cg-3">
                <span className="p-1 rounded-full bg-blue-100 border border-blue-200 text-[#00529C]">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </span>
                <span>Full title documentation support</span>
              </div>
            </div>

            {/* Direct Instant Dials Card */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center gap-4 animate-pulse" id="direct-whatsapp-advisory-card">
              <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-600 shrink-0">
                <Compass size={24} />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-slate-900 text-sm">Direct WhatsApp Contact</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-700 font-bold">Instantly dispatch your inquiry form to the founder's phone for immediate response.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Physical form elements */}
          <div className="lg:col-span-12 xl:col-span-7" id="contact-form-col">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative" id="contact-form-card">
              
              {/* Submission success window modal overlay */}
              {submitSuccess && (
                <div 
                  className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-fadeIn z-20"
                  id="success-overlay"
                >
                  <CheckCircle2 size={48} className="text-[#00529C] animate-bounce mb-4" />
                  <h3 className="font-sans font-black text-2xl text-slate-900 tracking-wide">Inquiry Sent Successfully</h3>
                  <p className="font-sans text-sm sm:text-base text-slate-800 max-w-sm mx-auto mt-2 leading-relaxed font-bold">
                    Thank you. Your details were delivered successfully. Nitin Kesarkar & Associates will contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-6 py-3 rounded-full bg-[#00529C] text-white hover:bg-blue-800 text-xs font-sans uppercase tracking-widest transition-all cursor-pointer font-black"
                    id="success-done-btn"
                  >
                    Return to Form
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" id="contact-executive-form">
                
                {/* Name Row */}
                <div className="flex flex-col space-y-1.5" id="form-group-name">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Your Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`bg-white border rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] transition-all placeholder-slate-400 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-350'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-bold" id="error-name">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Sub split row: Email and Phone number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-group-split-row">
                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5" id="form-group-phone">
                    <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">WhatsApp / Mobile *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit number"
                      className={`bg-white border rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] transition-all placeholder-slate-400 ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-350'
                      }`}
                    />
                    {errors.phone && (
                      <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-bold" id="error-phone">
                        <AlertCircle size={12} />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5" id="form-group-email">
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={`bg-white border rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] transition-all placeholder-slate-400 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-350'
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-bold" id="error-email">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Dropdowns split Row: Sector category requirement & Budget limit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-dropdowns-row">
                  {/* Category */}
                  <div className="flex flex-col space-y-1.5" id="form-group-requirement">
                    <label htmlFor="requirement" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Property Type Interest</label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-350 rounded-xl px-4 py-3 text-sm text-slate-950 font-black focus:outline-none focus:border-[#00529C] transition-all cursor-pointer"
                    >
                      <option value="residential-buy" className="text-slate-900 bg-white">Residential House / Plot</option>
                      <option value="commercial-lease" className="text-slate-900 bg-white">Commercial Plots / Office space</option>
                      <option value="industrial-midc" className="text-slate-900 bg-white">MIDC Industrial Ground / Warehouse</option>
                      <option value="property-sell" className="text-slate-900 bg-white">Sell / List My Property</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col space-y-1.5" id="form-group-budget">
                    <label htmlFor="budget" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Budget Sizing</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-350 rounded-xl px-4 py-3 text-sm text-slate-950 font-black focus:outline-none focus:border-[#00529C] transition-all cursor-pointer"
                    >
                      <option value="under-1.5-cr" className="text-slate-900 bg-white">Below ₹1.5 Crore</option>
                      <option value="1.5-3-cr" className="text-slate-900 bg-white">₹1.5 Cr – ₹3.0 Crore</option>
                      <option value="3-5-cr" className="text-slate-900 bg-white">₹3.0 Cr – ₹5.0 Crore</option>
                      <option value="above-5-cr" className="text-slate-900 bg-white">Above ₹5.0 Crore</option>
                    </select>
                  </div>
                </div>

                {/* Narrative Message Text area */}
                <div className="flex flex-col space-y-1.5" id="form-group-message">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Detailed Message Scope</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter sizes, location details or specific properties in Kolhapur..."
                    className="bg-white border border-slate-355 rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] transition-all placeholder-slate-400 resize-none"
                  />
                </div>

                {/* Submissions Double CTA Button Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-5" id="form-submit-cluster">
                  {/* Email Secure dispatch */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-4 rounded-full bg-[#00529C] hover:bg-[#003970] text-white font-sans uppercase tracking-widest text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    id="submit-secure-btn"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <Send size={14} className="animate-bounce" />
                    )}
                    <span>{isSubmitting ? 'Verifying...' : 'Submit Form'}</span>
                  </button>

                  {/* Immediate WhatsApp encrypt dispatch */}
                  <button
                    type="button"
                    onClick={handleWhatsAppAction}
                    className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebd5d] text-white font-sans uppercase tracking-widest text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    id="submit-whatsapp-btn"
                  >
                    <Phone size={14} className="animate-pulse" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

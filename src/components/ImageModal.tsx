/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  title?: string;
  location?: string;
}

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose, title, location }: ImageModalProps) {
  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300 animate-fadeIn"
      id="image-modal-portal"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-bronze hover:border-luxury-bronze hover:scale-105 transition-all cursor-pointer duration-300 group z-50"
        onClick={onClose}
        title="Close View"
        id="modal-close-btn"
      >
        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <div 
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        id="modal-content-container"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/5"
          referrerPolicy="no-referrer"
          id="modal-image"
        />

        {(title || location) && (
          <div 
            className="mt-6 text-center text-white space-y-1 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5"
            id="modal-caption"
          >
            {title && <h4 className="font-display font-semibold text-base tracking-wide">{title}</h4>}
            {location && <p className="font-sans text-xs text-luxury-bronze uppercase tracking-widest">{location}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QUOTES_LIST = [
  {
    text: "Land is the only thing in the world that amounts to anything, for it's the only thing in this world that lasts.",
    author: "Gerald O'Hara"
  },
  {
    text: "Don't wait to buy real estate. Buy real estate and wait.",
    author: "Will Rogers"
  },
  {
    text: "Buying real estate is the quickest, safest, and only way to become wealthy.",
    author: "Marshall Field"
  },
  {
    text: "Real estate cannot be lost or stolen, nor can it be carried away. It is the safest investment in the world.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "90% of all millionaires become so through owning real estate.",
    author: "Andrew Carnegie"
  }
];

export default function HorizontalQuotesTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES_LIST.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="bg-slate-900 text-slate-100 py-6 border-y border-slate-800 relative overflow-hidden"
      id="horizontal-quotes-bar"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4" id="quotes-ticker-inner">
        
        {/* Banner Label */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D4A373] shrink-0" id="quotes-label">
          <Sparkles size={14} className="text-[#D4A373] shrink-0" />
          <span className="font-extrabold">Wealth Intelligence</span>
        </div>

        {/* Rotating Core Quote Element */}
        <div className="flex-1 w-full flex items-center justify-center min-h-[44px] overflow-hidden relative" id="quotes-rotator-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4 px-4 w-full"
              id={`quote-slide-${index}`}
            >
              <Quote size={14} className="text-slate-500 transform -rotate-12 shrink-0 hidden sm:block" />
              <p className="font-sans font-medium text-sm sm:text-base text-slate-100 italic tracking-wide max-w-3xl line-clamp-2 md:line-clamp-1">
                “{QUOTES_LIST[index].text}”
              </p>
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold shrink-0">
                — {QUOTES_LIST[index].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

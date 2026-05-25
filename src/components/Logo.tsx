/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  monochrome?: boolean;
}

export default function Logo({ className = '', showText = true, monochrome = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`} id="logo-container">
      {/* High-fidelity Brand Logo Image */}
      <div className="relative flex items-center h-9 sm:h-11 overflow-hidden rounded-lg hover:opacity-90 transition-opacity" id="logo-branding-wrapper">
        <img
          src="https://i.ibb.co/PzhZDRh1/Screenshot-2026-05-25-220507.png"
          alt="Nitin Kesarkar & Associates Logo"
          referrerPolicy="no-referrer"
          className="h-full object-contain max-w-[180px] sm:max-w-[240px]"
          id="logo-img"
        />
      </div>
    </div>
  );
}

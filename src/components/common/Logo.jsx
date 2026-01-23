import React from 'react';

/**
 * Logo component - Brand identity header
 * Displays company name and tagline
 */
const Logo = () => (
  <div className="flex flex-col gap-0 flex-shrink-0" role="img" aria-label="SireSoft PK Logo">
    <h1 className="text-base sm:text-xl md:text-2xl font-bold text-black whitespace-nowrap">
      SireSoft PK
    </h1>
    <span className="text-xs lg:text-sm text-gray-600 whitespace-nowrap">
      A SireSoft LLC Company
    </span>
  </div>
);

export default React.memo(Logo);

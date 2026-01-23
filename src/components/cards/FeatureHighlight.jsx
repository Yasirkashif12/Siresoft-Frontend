import React from 'react';

/**
 * FeatureHighlight component - Feature showcase with icon and description
 * @param {Object} props - Component props
 * @param {Object} props.feature - Feature data object
 * @param {string} props.feature.icon - Icon text/symbol
 * @param {string} props.feature.title - Feature title
 * @param {Array} props.feature.lines - Description lines
 */
const FeatureHighlight = ({ feature }) => (
  <div className="flex gap-3 sm:gap-4">
    <div 
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      <span className="text-green-600 font-bold text-base sm:text-lg md:text-xl">
        {feature.icon}
      </span>
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{feature.title}</h3>
      {feature.lines.map((line, idx) => (
        <p key={idx} className="text-xs sm:text-sm text-gray-600 mt-1">{line}</p>
      ))}
    </div>
  </div>
);

export default React.memo(FeatureHighlight);

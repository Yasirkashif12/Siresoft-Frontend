import React from 'react';
import { Button } from '../common';

/**
 * AboutSnapshot section - Brief company information and team showcase
 */
const AboutSnapshot = () => (
  <section 
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white" 
    aria-labelledby="about-title"
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div>
          <h2 
            id="about-title"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Who We Are
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2 sm:mb-3">
            SireSoft was established in 2012 in Canton,
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2 sm:mb-3">
            Michigan USA. A growing team of engineers,
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            financialists, and marketers serving globally.
          </p>
          <Button className="w-full sm:w-auto">Meet Our Team</Button>
        </div>

        <div className="flex justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 flex-wrap">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div 
              key={idx}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-400 rounded-full"
              aria-hidden="true"
            ></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(AboutSnapshot);

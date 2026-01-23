import React from 'react';

/**
 * ServiceCard component - Service offering card
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {string} props.service.title - Service title
 * @param {string} props.service.description - Service description
 */
const ServiceCard = ({ service }) => (
  <article 
    className="bg-gray-100 rounded-xl p-4 sm:p-6 hover:bg-gray-200 transition group"
    aria-label={service.title}
  >
    <div 
      className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-xl mb-3 sm:mb-4 group-hover:bg-gray-400 transition"
      aria-hidden="true"
    ></div>
    <h3 className="text-base sm:text-lg font-bold text-gray-900">{service.title}</h3>
    <p className="mt-2 text-xs sm:text-sm text-gray-600 min-h-[2.5rem] sm:min-h-[3rem]">
      {service.description}
    </p>
    <a 
      href={`#${service.id}`}
      className="inline-block mt-8 sm:mt-16 text-green-600 font-bold text-xs sm:text-sm hover:text-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-1 py-1"
    >
      Learn More →
    </a>
  </article>
);

export default React.memo(ServiceCard);

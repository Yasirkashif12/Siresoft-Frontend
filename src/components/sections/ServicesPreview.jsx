import React from 'react';
import { ServiceCard } from '../cards';
import { SERVICES } from '../../constants';

/**
 * ServicesPreview section - Display all services offered
 */
const ServicesPreview = () => (
  <section 
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white" 
    aria-labelledby="services-title"
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <h2 id="services-title" className="sr-only">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(ServicesPreview);

import { ServiceCard } from "../../cards";
import { SERVICES } from "../../../constants";

const ServicesPreview = () => (
  <section
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white"
    aria-labelledby="services-title"
  >
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 lg:mb-20">
      Our Service
    </h2>
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <h2 id="services-title" className="sr-only">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;

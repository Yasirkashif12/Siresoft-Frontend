/**
 * ServiceCard component - Service offering card
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {string} props.service.title - Service title
 * @param {string} props.service.description - Service description
 * @param {string} props.service.image - Service image URL (optional)
 */
const ServiceCard = ({ service }) => (
  <article
    className="bg-gray-100 rounded-xl p-4 sm:p-6 hover:bg-gray-200 transition group"
    aria-label={service.title}
  >
    <h3 className="text-base sm:text-lg font-bold text-gray-900">
      {service.title}
    </h3>

    <p className="mt-2 text-xs sm:text-sm text-gray-600 min-h-[2.5rem] sm:min-h-[3rem]">
      {service.description}
    </p>

    <div
      className="w-full h-48 sm:h-56 bg-gray-300 rounded-xl mt-4 group-hover:bg-gray-400 transition overflow-hidden"
      aria-hidden="true"
    >
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      )}
    </div>

    <a
      href={`#${service.id}`}
      className="inline-block mt-4 sm:mt-6 text-green-600 font-bold text-xs sm:text-sm hover:text-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-1 py-1"
    >
      Learn More →
    </a>
  </article>
);

export default ServiceCard;

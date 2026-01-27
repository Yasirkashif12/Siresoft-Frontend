/**
 * TemplateCard component - Website template showcase card
 * @param {Object} props - Component props
 * @param {string} props.name - Template name
 * @param {string} [props.id] - Template ID for analytics
 */
const TemplateCard = ({ id, name }) => (
  <button
    className="bg-gray-300 rounded-xl h-36 sm:h-40 md:h-48 flex items-center justify-center hover:bg-gray-400 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
    aria-label={`Select ${name} template`}
  >
    <span className="text-gray-600 text-sm sm:text-base font-medium">
      {name}
    </span>
  </button>
);

export default TemplateCard;

/**
 * FooterColumn component - Footer section with links
 * @param {Object} props - Component props
 * @param {string} props.title - Column title
 * @param {Array} props.links - Links array with id and label
 */
const FooterColumn = ({ title, links }) => (
  <nav aria-label={title}>
    <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">{title}</h3>
    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
      {links.map((link) => (
        <li key={link.id}>
          <a 
            href={`#${link.id}`}
            className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-1 py-1 inline-block"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterColumn;

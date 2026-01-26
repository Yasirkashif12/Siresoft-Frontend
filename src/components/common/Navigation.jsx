/**
 * Navigation component - Main navigation links
 * @param {Object} props - Component props
 * @param {Array} props.links - Navigation links array
 * @param {string} [props.className] - Additional CSS classes
 */
const Navigation = ({ links, className = "", id }) => (
  <nav className={className} id={id}>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="text-sm xl:text-base font-medium text-gray-900 hover:text-green-600 
        transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-2 py-1
        relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
         after:bg-green-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default Navigation;

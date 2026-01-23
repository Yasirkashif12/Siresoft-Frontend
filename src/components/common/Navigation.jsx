import React from 'react';

/**
 * Navigation component - Main navigation links
 * @param {Object} props - Component props
 * @param {Array} props.links - Navigation links array
 * @param {string} [props.className] - Additional CSS classes
 */
const Navigation = ({ links, className = '', id }) => (
  <nav className={className} id={id}>
    {links.map((link) => (
      <a 
        key={link.label}
        href={link.href} 
        className="text-sm xl:text-base font-medium text-gray-900 hover:text-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-600 rounded px-2 py-1"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default React.memo(Navigation);

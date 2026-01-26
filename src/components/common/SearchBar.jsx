const SearchBar = () => (
  <div 
    className="hidden xl:flex items-center bg-white border border-gray-300 rounded-full px-3 py-1.5"
    role="search"
    aria-label="Domain search"
  >
    <input 
      type="text" 
      placeholder="Search domain..." 
      className="outline-none text-sm text-gray-600 bg-transparent w-32 focus:ring-0"
      aria-label="Search for domain"
    />
    <svg 
      className="w-4 h-4 text-gray-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
      <path d="m21 21-4.35-4.35" strokeWidth="2"/>
    </svg>
  </div>
);

export default SearchBar;

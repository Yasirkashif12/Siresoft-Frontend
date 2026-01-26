import {
  Logo,
  SearchBar,
  MobileMenuButton,
  Navigation,
  Button,
} from "../../common";
import { useMobileMenu } from "../../../hooks";

const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <header
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      role="banner"
    >
      <div className="w-full mx-auto px-2 sm:px-3 md:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex gap-4">
            <Logo />
            <Navigation
              links={NAVIGATION_LINKS}
              className="hidden lg:flex items-center gap-2 xl:gap-4 lg:ml-4"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <SearchBar />
            <Button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">
              Login
            </Button>
            <MobileMenuButton isOpen={isOpen} onClick={toggle} />
          </div>
        </div>

        {isOpen && (
          <nav
            className="lg:hidden py-4 border-t border-gray-200"
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Navigation
              links={NAVIGATION_LINKS}
              className="flex flex-col gap-3"
            />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

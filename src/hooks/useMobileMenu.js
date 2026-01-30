import { useState } from "react";

/**
 * Custom hook for managing mobile menu state
 * @returns {Object} - { isOpen, toggle, close, open }
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return { isOpen, toggle, close, open };
}

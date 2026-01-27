import React from "react";

/**
 * Button component - Primary UI element for CTAs
 * Supports primary and secondary variants with responsive sizing
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600";
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
    secondary:
      "border-2 border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

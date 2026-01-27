import React from "react";

const FormInput = React.forwardRef(
  ({ type = "text", placeholder, label, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="block text-sm mb-1 text-gray-700 font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          {...props}
        />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;

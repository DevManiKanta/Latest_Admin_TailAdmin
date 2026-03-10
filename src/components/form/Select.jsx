const _jsxFileName = "";
import React, { useState } from "react";














const Select = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
}) => {
  // Manage the selected value
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value); // Trigger parent handler
  };

  return (
    React.createElement('select', {
      className: `h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
        selectedValue
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
      } ${className}`,
      value: selectedValue,
      onChange: handleChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}

      /* Placeholder option */
      , React.createElement('option', {
        value: "",
        disabled: true,
        className: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}

        , placeholder
      )
      /* Map over options */
      , options.map((option) => (
        React.createElement('option', {
          key: option.value,
          value: option.value,
          className: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}

          , option.label
        )
      ))
    )
  );
};

export default Select;

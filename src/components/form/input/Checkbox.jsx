import React from "react";
const _jsxFileName = "";
import clsx from "clsx"; // Install with: npm install clsx










const Checkbox = ({
  label,
  checked,
  id,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    React.createElement('label', {
      className: clsx(
        "flex items-center space-x-3 cursor-pointer text-gray-800 dark:text-gray-200",
        { "cursor-not-allowed opacity-50": disabled }
      ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}

      , React.createElement('input', {
        id: id,
        type: "checkbox",
        className: clsx(
          "w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-brand-500",
          "dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-brand-500 dark:checked:border-brand-500",
          "focus:ring-offset-0 focus:outline-none",
          className
        ),
        checked: checked,
        onChange: (e) => onChange(e.target.checked),
        disabled: disabled, __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
      )
      , label && React.createElement('span', { className: "text-sm font-medium" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, label)
    )
  );
};

export default Checkbox;

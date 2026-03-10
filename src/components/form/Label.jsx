const _jsxFileName = "";
import React from "react";
import { twMerge } from "tailwind-merge";







const Label = ({ htmlFor, children, className }) => {
  return (
    React.createElement('label', {
      htmlFor: htmlFor,
      className: twMerge(
        // Default classes that apply by default
        "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",

        // User-defined className that can override the default margin
        className
      ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}

      , children
    )
  );
};

export default Label;

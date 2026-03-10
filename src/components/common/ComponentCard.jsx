import React from "react";
const _jsxFileName = "";






const ComponentCard = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    React.createElement('div', {
      className: `rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}

      /* Card Header */
      , React.createElement('div', { className: "px-6 py-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        , React.createElement('h3', { className: "text-base font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          , title
        )
        , desc && (
          React.createElement('p', { className: "mt-1 text-sm text-gray-500 dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
            , desc
          )
        )
      )

      /* Card Body */
      , React.createElement('div', { className: "p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
        , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, children)
      )
    )
  );
};

export default ComponentCard;

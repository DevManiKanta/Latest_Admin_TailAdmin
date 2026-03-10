import React from "react";
const _jsxFileName = "";









const RadioSm = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  className = "",
}) => {
  return (
    React.createElement('label', {
      htmlFor: id,
      className: `flex cursor-pointer select-none items-center text-sm text-gray-500 dark:text-gray-400 ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}

      , React.createElement('span', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
        /* Hidden Input */
        , React.createElement('input', {
          type: "radio",
          id: id,
          name: name,
          value: value,
          checked: checked,
          onChange: () => onChange(value),
          className: "sr-only", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
        )
        /* Styled Radio Circle */
        , React.createElement('span', {
          className: `mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${
            checked
              ? "border-brand-500 bg-brand-500"
              : "bg-transparent border-gray-300 dark:border-gray-700"
          }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}

          /* Inner Dot */
          , React.createElement('span', {
            className: `h-1.5 w-1.5 rounded-full ${
              checked ? "bg-white" : "bg-white dark:bg-[#1e2636]"
            }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
)
        )
      )
      , label
    )
  );
};

export default RadioSm;

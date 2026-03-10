import React from "react";
const _jsxFileName = "";










const Radio = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    React.createElement('label', {
      htmlFor: id,
      className: `relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium ${
        disabled
          ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
          : "text-gray-700 dark:text-gray-400"
      } ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}

      , React.createElement('input', {
        id: id,
        name: name,
        type: "radio",
        value: value,
        checked: checked,
        onChange: () => !disabled && onChange(value), // Prevent onChange when disabled
        className: "sr-only",
        disabled: disabled, __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}} // Disable input
      )
      , React.createElement('span', {
        className: `flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] ${
          checked
            ? "border-brand-500 bg-brand-500"
            : "bg-transparent border-gray-300 dark:border-gray-700"
        } ${
          disabled
            ? "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700"
            : ""
        }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}

        , React.createElement('span', {
          className: `h-2 w-2 rounded-full bg-white ${
            checked ? "block" : "hidden"
          }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
)
      )
      , label
    )
  );
};

export default Radio;

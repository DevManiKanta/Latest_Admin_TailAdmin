const _jsxFileName = ""; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; };
import React, { useState } from "react";














const MultiSelect = ({
  label,
  options,
  defaultSelected = [],
  onChange,
  disabled = false,
}) => {
  const [selectedOptions, setSelectedOptions] =
    useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue) => {
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((value) => value !== optionValue)
      : [...selectedOptions, optionValue];

    setSelectedOptions(newSelectedOptions);
    _optionalChain([onChange, 'optionalCall', _ => _(newSelectedOptions)]);
  };

  const removeOption = (value) => {
    const newSelectedOptions = selectedOptions.filter((opt) => opt !== value);
    setSelectedOptions(newSelectedOptions);
    _optionalChain([onChange, 'optionalCall', _2 => _2(newSelectedOptions)]);
  };

  const selectedValuesText = selectedOptions.map(
    (value) => _optionalChain([options, 'access', _3 => _3.find, 'call', _4 => _4((option) => option.value === value), 'optionalAccess', _5 => _5.text]) || ""
  );

  return (
    React.createElement('div', { className: "w-full", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
      , React.createElement('label', { className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
        , label
      )

      , React.createElement('div', { className: "relative z-20 inline-block w-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
        , React.createElement('div', { className: "relative flex flex-col items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}
          , React.createElement('div', { onClick: toggleDropdown, className: "w-full", __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}
            , React.createElement('div', { className: "mb-2 flex h-11 rounded-lg border border-gray-300 py-1.5 pl-3 pr-3 shadow-theme-xs outline-none transition focus:border-brand-300 focus:shadow-focus-ring dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-300"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
              , React.createElement('div', { className: "flex flex-wrap flex-auto gap-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
                , selectedValuesText.length > 0 ? (
                  selectedValuesText.map((text, index) => (
                    React.createElement('div', {
                      key: index,
                      className: "group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pl-2.5 pr-2 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}

                      , React.createElement('span', { className: "flex-initial max-w-full" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}, text)
                      , React.createElement('div', { className: "flex flex-row-reverse flex-auto"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
                        , React.createElement('div', {
                          onClick: (e) => {
                            e.stopPropagation();
                            removeOption(selectedOptions[index]);
                          },
                          className: "pl-2 text-gray-500 cursor-pointer group-hover:text-gray-400 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}

                          , React.createElement('svg', {
                            className: "fill-current",
                            role: "button",
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14"   ,
                            xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}

                            , React.createElement('path', {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z"                                                 , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
                            )
                          )
                        )
                      )
                    )
                  ))
                ) : (
                  React.createElement('input', {
                    placeholder: "Select option" ,
                    className: "w-full h-full p-1 pr-2 text-sm bg-transparent border-0 outline-none appearance-none placeholder:text-gray-800 focus:border-0 focus:outline-none focus:ring-0 dark:placeholder:text-white/90"             ,
                    readOnly: true,
                    value: "Select option" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
                  )
                )
              )
              , React.createElement('div', { className: "flex items-center py-1 pl-1 pr-1 w-7"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                , React.createElement('button', {
                  type: "button",
                  onClick: toggleDropdown,
                  className: "w-5 h-5 text-gray-700 outline-none cursor-pointer focus:outline-none dark:text-gray-400"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}

                  , React.createElement('svg', {
                    className: `stroke-current ${isOpen ? "rotate-180" : ""}`,
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20"   ,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}

                    , React.createElement('path', {
                      d: "M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551"   ,
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round", __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}
                    )
                  )
                )
              )
            )
          )

          , isOpen && (
            React.createElement('div', {
              className: "absolute left-0 z-40 w-full overflow-y-auto bg-white rounded-lg shadow top-full max-h-select dark:bg-gray-900"          ,
              onClick: (e) => e.stopPropagation(), __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}

              , React.createElement('div', { className: "flex flex-col" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}
                , options.map((option, index) => (
                  React.createElement('div', {
                    key: index,
                    className: `hover:bg-primary/5 w-full cursor-pointer rounded-t border-b border-gray-200 dark:border-gray-800`,
                    onClick: () => handleSelect(option.value), __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}

                    , React.createElement('div', {
                      className: `relative flex w-full items-center p-2 pl-2 ${
                        selectedOptions.includes(option.value)
                          ? "bg-primary/10"
                          : ""
                      }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}

                      , React.createElement('div', { className: "mx-2 leading-6 text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}
                        , option.text
                      )
                    )
                  )
                ))
              )
            )
          )
        )
      )
    )
  );
};

export default MultiSelect;

const _jsxFileName = "";
import React, { useState } from "react";

const ChartTab = () => {
  const [selected, setSelected] = useState

("optionOne");

  const getButtonClass = (option) =>
    selected === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    React.createElement('div', { className: "flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
      , React.createElement('button', {
        onClick: () => setSelected("optionOne"),
        className: `px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionOne"
        )}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
, "Monthly"

      )

      , React.createElement('button', {
        onClick: () => setSelected("optionTwo"),
        className: `px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionTwo"
        )}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
, "Quarterly"

      )

      , React.createElement('button', {
        onClick: () => setSelected("optionThree"),
        className: `px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionThree"
        )}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
, "Annually"

      )
    )
  );
};

export default ChartTab;

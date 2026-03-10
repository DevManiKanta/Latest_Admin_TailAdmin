const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Checkbox from "../input/Checkbox";

export default function CheckboxComponents() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);
  const [isCheckedDisabled, setIsCheckedDisabled] = useState(true);
  return (
    React.createElement(ComponentCard, { title: "Checkbox", __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      , React.createElement('div', { className: "flex items-center gap-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
        , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
          , React.createElement(Checkbox, { checked: isChecked, onChange: setIsChecked, __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
          , React.createElement('span', { className: "block text-sm font-medium text-gray-700 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Default"

          )
        )
        , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement(Checkbox, {
            checked: isCheckedTwo,
            onChange: setIsCheckedTwo,
            label: "Checked", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
          )
        )
        , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , React.createElement(Checkbox, {
            checked: isCheckedDisabled,
            onChange: setIsCheckedDisabled,
            disabled: true,
            label: "Disabled", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          )
        )
      )
    )
  );
}

const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Radio from "../input/Radio";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("option2");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    React.createElement(ComponentCard, { title: "Radio Buttons" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      , React.createElement('div', { className: "flex flex-wrap items-center gap-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
        , React.createElement(Radio, {
          id: "radio1",
          name: "group1",
          value: "option1",
          checked: selectedValue === "option1",
          onChange: handleRadioChange,
          label: "Default", __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        )
        , React.createElement(Radio, {
          id: "radio2",
          name: "group1",
          value: "option2",
          checked: selectedValue === "option2",
          onChange: handleRadioChange,
          label: "Selected", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
        )
        , React.createElement(Radio, {
          id: "radio3",
          name: "group1",
          value: "option3",
          checked: selectedValue === "option3",
          onChange: handleRadioChange,
          label: "Disabled",
          disabled: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
        )
      )
    )
  );
}

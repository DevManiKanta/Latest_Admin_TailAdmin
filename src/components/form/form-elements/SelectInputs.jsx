const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };
  const [selectedValues, setSelectedValues] = useState([]);

  const multiOptions = [
    { value: "1", text: "Option 1", selected: false },
    { value: "2", text: "Option 2", selected: false },
    { value: "3", text: "Option 3", selected: false },
    { value: "4", text: "Option 4", selected: false },
    { value: "5", text: "Option 5", selected: false },
  ];
  return (
    React.createElement(ComponentCard, { title: "Select Inputs" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
      , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, "Select Input" )
          , React.createElement(Select, {
            options: options,
            placeholder: "Select Option" ,
            onChange: handleSelectChange,
            className: "dark:bg-dark-900", __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
          , React.createElement(MultiSelect, {
            label: "Multiple Select Options"  ,
            options: multiOptions,
            defaultSelected: ["1", "3"],
            onChange: (values) => setSelectedValues(values), __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
          )
          , React.createElement('p', { className: "sr-only", __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "Selected Values: "
              , selectedValues.join(", ")
          )
        )
      )
    )
  );
}

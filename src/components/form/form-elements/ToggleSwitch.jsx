const _jsxFileName = "";
import ComponentCard from "../../common/ComponentCard";
import React from "react";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
  return (
    React.createElement(ComponentCard, { title: "Toggle switch input"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      , React.createElement('div', { className: "flex gap-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
        , React.createElement(Switch, {
          label: "Default",
          defaultChecked: true,
          onChange: handleSwitchChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
        )
        , React.createElement(Switch, {
          label: "Checked",
          defaultChecked: true,
          onChange: handleSwitchChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        )
        , React.createElement(Switch, { label: "Disabled", disabled: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
      ), " "
      , React.createElement('div', { className: "flex gap-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
        , React.createElement(Switch, {
          label: "Default",
          defaultChecked: true,
          onChange: handleSwitchChange,
          color: "gray", __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
        )
        , React.createElement(Switch, {
          label: "Checked",
          defaultChecked: true,
          onChange: handleSwitchChange,
          color: "gray", __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
        )
        , React.createElement(Switch, { label: "Disabled", disabled: true, color: "gray", __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}} )
      )
    )
  );
}

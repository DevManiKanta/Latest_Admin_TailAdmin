const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { CalenderIcon, EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import Flatpickr from "react-flatpickr";

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (date) => {
    setDateOfBirth(date[0].toLocaleDateString()); // Handle selected date and format it
  };
  return (
    React.createElement(ComponentCard, { title: "Default Inputs" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
      , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
          , React.createElement(Label, { htmlFor: "input", __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Input")
          , React.createElement(Input, { type: "text", id: "input", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}} )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
          , React.createElement(Label, { htmlFor: "inputTwo", __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Input with Placeholder"  )
          , React.createElement(Input, { type: "text", id: "inputTwo", placeholder: "info@gmail.com", __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Select Input" )
          , React.createElement(Select, {
            options: options,
            placeholder: "Select an option"  ,
            onChange: handleSelectChange,
            className: "dark:bg-dark-900", __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Password Input" )
          , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}
            , React.createElement(Input, {
              type: showPassword ? "text" : "password",
              placeholder: "Enter your password"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
            )
            , React.createElement('button', {
              onClick: () => setShowPassword(!showPassword),
              className: "absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}

              , showPassword ? (
                React.createElement(EyeIcon, { className: "fill-gray-500 dark:fill-gray-400 size-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} )
              ) : (
                React.createElement(EyeCloseIcon, { className: "fill-gray-500 dark:fill-gray-400 size-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
              )
            )
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
          , React.createElement(Label, { htmlFor: "datePicker", __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, "Date Picker Input"  )
          , React.createElement('div', { className: "relative w-full flatpickr-wrapper"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
            , React.createElement(Flatpickr, {
              value: dateOfBirth, // Set the value to the state
              onChange: handleDateChange, // Handle the date change
              options: {
                dateFormat: "Y-m-d", // Set the date format
              },
              placeholder: "Select an option"  ,
              className: "h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700  dark:focus:border-brand-800"                        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
            )
            , React.createElement('span', { className: "absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
              , React.createElement(CalenderIcon, { className: "size-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}} )
            )
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
          , React.createElement(Label, { htmlFor: "tm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Date Picker Input"  )
          , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
            , React.createElement(Input, {
              type: "time",
              id: "tm",
              name: "tm",
              onChange: (e) => console.log(e.target.value), __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
            )
            , React.createElement('span', { className: "absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}
              , React.createElement(TimeIcon, { className: "size-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}} )
            )
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
          , React.createElement(Label, { htmlFor: "tm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, "Input with Payment"  )
          , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
            , React.createElement(Input, {
              type: "text",
              placeholder: "Card number" ,
              className: "pl-[62px]", __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
            )
            , React.createElement('span', { className: "absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}
              , React.createElement('svg', {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"   ,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}

                , React.createElement('circle', { cx: "6.25", cy: "10", r: "5.625", fill: "#E80B26", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} )
                , React.createElement('circle', { cx: "13.75", cy: "10", r: "5.625", fill: "#F59D31", __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}} )
                , React.createElement('path', {
                  d: "M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"                     ,
                  fill: "#FC6020", __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                )
              )
            )
          )
        )
      )
    )
  );
}

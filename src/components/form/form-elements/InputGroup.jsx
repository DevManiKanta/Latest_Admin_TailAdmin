const _jsxFileName = "";
import ComponentCard from "../../common/ComponentCard";
import React from "react";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

export default function InputGroup() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  const handlePhoneNumberChange = (phoneNumber) => {
    console.log("Updated phone number:", phoneNumber);
  };
  return (
    React.createElement(ComponentCard, { title: "Input Group" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
      , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, "Email")
          , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
            , React.createElement(Input, {
              placeholder: "info@gmail.com",
              type: "text",
              className: "pl-[62px]", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
            )
            , React.createElement('span', { className: "absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
              , React.createElement(EnvelopeIcon, { className: "size-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}} )
            )
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Phone")
          , React.createElement(PhoneInput, {
            selectPosition: "start",
            countries: countries,
            placeholder: "+1 (555) 000-0000"  ,
            onChange: handlePhoneNumberChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
          )
        ), " "
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}, "Phone")
          , React.createElement(PhoneInput, {
            selectPosition: "end",
            countries: countries,
            placeholder: "+1 (555) 000-0000"  ,
            onChange: handlePhoneNumberChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
          )
        )
      )
    )
  );
}

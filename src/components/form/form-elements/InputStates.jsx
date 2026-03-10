const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";
export default function InputStates() {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const handleEmailTwoChange = (e) => {
    const value = e.target.value;
    setEmailTwo(value);
    validateEmail(value);
  };
  return (
    React.createElement(ComponentCard, {
      title: "Input States" ,
      desc: "Validation styles for error, success and disabled states on form controls."          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}

      , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
        /* Error Input */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Email")
          , React.createElement(Input, {
            type: "email",
            value: email,
            error: error,
            onChange: handleEmailChange,
            placeholder: "Enter your email"  ,
            hint: error ? "This is an invalid email address." : "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
          )
        )

        /* Success Input */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, "Email")
          , React.createElement(Input, {
            type: "email",
            value: emailTwo,
            success: !error,
            onChange: handleEmailTwoChange,
            placeholder: "Enter your email"  ,
            hint: !error ? "This is an success message." : "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
          )
        )

        /* Disabled Input */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, "Email")
          , React.createElement(Input, {
            type: "text",
            value: "disabled@example.com",
            disabled: true,
            placeholder: "Disabled email" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
          )
        )
      )
    )
  );
}

const _jsxFileName = "";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    React.createElement(ComponentCard, { title: "Textarea input field"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
        /* Default TextArea */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Description")
          , React.createElement(TextArea, {
            value: message,
            onChange: (value) => setMessage(value),
            rows: 6, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          )
        )

        /* Disabled TextArea */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "Description")
          , React.createElement(TextArea, { rows: 6, disabled: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
        )

        /* Error TextArea */
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
          , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Description")
          , React.createElement(TextArea, {
            rows: 6,
            value: messageTwo,
            error: true,
            onChange: (value) => setMessageTwo(value),
            hint: "Please enter a valid message."    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
          )
        )
      )
    )
  );
}

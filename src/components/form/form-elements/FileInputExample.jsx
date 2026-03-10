const _jsxFileName = ""; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; };
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import FileInput from "../input/FileInput";
import Label from "../Label";

export default function FileInputExample() {
  const handleFileChange = (event) => {
    const file = _optionalChain([event, 'access', _ => _.target, 'access', _2 => _2.files, 'optionalAccess', _3 => _3[0]]);
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    React.createElement(ComponentCard, { title: "File Input" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
      , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
        , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "Upload file" )
        , React.createElement(FileInput, { onChange: handleFileChange, className: "custom-class", __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}} )
      )
    )
  );
}

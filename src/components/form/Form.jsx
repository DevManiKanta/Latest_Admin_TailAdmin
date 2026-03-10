import React from "react";
const _jsxFileName = "";







const Form = ({ onSubmit, children, className }) => {
  return (
    React.createElement('form', {
      onSubmit: (event) => {
        event.preventDefault(); // Prevent default form submission
        onSubmit(event);
      },
      className: ` ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}

      , children
    )
  );
};

export default Form;

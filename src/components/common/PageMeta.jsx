import React from "react";
const _jsxFileName = "";
import { HelmetProvider, Helmet } from "react-helmet-async";

const PageMeta = ({
  title,
  description,
}


) => (
  React.createElement(Helmet, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
    , React.createElement('title', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}, title)
    , React.createElement('meta', { name: "description", content: description, __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}} )
  )
);

export const AppWrapper = ({ children }) => (
  React.createElement(HelmetProvider, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, children)
);

export default PageMeta;

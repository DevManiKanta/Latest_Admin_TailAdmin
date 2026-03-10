import React from "react";
const _jsxFileName = "";
import { Link } from "react-router";





const PageBreadcrumb = ({ pageTitle }) => {
  return (
    React.createElement('div', { className: "flex flex-wrap items-center justify-between gap-3 mb-6"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      , React.createElement('h2', {
        className: "text-xl font-semibold text-gray-800 dark:text-white/90"   ,
        'x-text': "pageName", __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}

        , pageTitle
      )
      , React.createElement('nav', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement('ol', { className: "flex items-center gap-1.5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
            , React.createElement(Link, {
              className: "inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"     ,
              to: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
, "Home"

              , React.createElement('svg', {
                className: "stroke-current",
                width: "17",
                height: "16",
                viewBox: "0 0 17 16"   ,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}

                , React.createElement('path', {
                  d: "M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"   ,
                  stroke: "",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round", __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
                )
              )
            )
          )
          , React.createElement('li', { className: "text-sm text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
            , pageTitle
          )
        )
      )
    )
  );
};

export default PageBreadcrumb;

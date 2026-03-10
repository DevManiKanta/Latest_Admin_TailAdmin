const _jsxFileName = "";
import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}

) {
  return (
    React.createElement('div', { className: "relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      , React.createElement('div', { className: "relative flex flex-col justify-center w-full h-screen lg:flex-row-reverse dark:bg-gray-900 sm:p-0"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
        , children
        , React.createElement('div', { className: "items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          , React.createElement('div', { className: "relative flex items-center justify-center z-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
            /* <!-- ===== Common Grid Shape Start ===== --> */
            , React.createElement(GridShape, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
            , React.createElement('div', { className: "flex flex-col items-center max-w-xs"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
              , React.createElement(Link, { to: "/", className: "block mb-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
                , React.createElement('img', {
                  width: 231,
                  height: 48,
                  src: "/images/logo/auth-logo.svg",
                  alt: "Logo", __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
                )
              )
              , React.createElement('p', { className: "text-center text-gray-400 dark:text-white/60"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Free and Open-Source Tailwind CSS Admin Dashboard Template"

              )
            )
          )
        )
        , React.createElement('div', { className: "fixed z-50 hidden bottom-6 right-6 sm:block"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
          , React.createElement(ThemeTogglerTwo, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} )
        )
      )
    )
  );
}

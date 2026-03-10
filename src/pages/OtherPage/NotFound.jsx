const _jsxFileName = "";
import GridShape from "../../components/common/GridShape";
import React from "react";
import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";

export default function NotFound() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js 404 Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js 404 Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
      )
      , React.createElement('div', { className: "relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement(GridShape, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
        , React.createElement('div', { className: "mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
          , React.createElement('h1', { className: "mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, "ERROR"

          )

          , React.createElement('img', { src: "/images/error/404.svg", alt: "404", className: "dark:hidden", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}} )
          , React.createElement('img', {
            src: "/images/error/404-dark.svg",
            alt: "404",
            className: "hidden dark:block" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          )

          , React.createElement('p', { className: "mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "We can’t seem to find the page you are looking for!"

          )

          , React.createElement(Link, {
            to: "/",
            className: "inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
, "Back to Home Page"

          )
        )
        /* <!-- Footer --> */
        , React.createElement('p', { className: "absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "© "
           , new Date().getFullYear(), " - TailAdmin"
        )
      )
    )
  );
}

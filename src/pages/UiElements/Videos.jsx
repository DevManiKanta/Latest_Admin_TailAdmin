const _jsxFileName = "";
import ComponentCard from "../../components/common/ComponentCard";
import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FourIsToThree from "../../components/ui/videos/FourIsToThree";
import OneIsToOne from "../../components/ui/videos/OneIsToOne";
import SixteenIsToNine from "../../components/ui/videos/SixteenIsToNine";
import TwentyOneIsToNine from "../../components/ui/videos/TwentyOneIsToNine";

export default function Videos() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Videos Tabs | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Videos page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Videos", __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} )
      , React.createElement('div', { className: "grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement(ComponentCard, { title: "Video Ratio 16:9"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
            , React.createElement(SixteenIsToNine, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}} )
          )
          , React.createElement(ComponentCard, { title: "Video Ratio 4:3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
            , React.createElement(FourIsToThree, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
          )
        )
        , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement(ComponentCard, { title: "Video Ratio 21:9"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
            , React.createElement(TwentyOneIsToNine, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 28}} )
          )
          , React.createElement(ComponentCard, { title: "Video Ratio 1:1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
            , React.createElement(OneIsToOne, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}} )
          )
        )
      )
    )
  );
}

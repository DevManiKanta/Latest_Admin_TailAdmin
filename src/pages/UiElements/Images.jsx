const _jsxFileName = "";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import React from "react";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

export default function Images() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Images", __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} )
      , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement(ComponentCard, { title: "Responsive image" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
          , React.createElement(ResponsiveImage, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
        )
        , React.createElement(ComponentCard, { title: "Image in 2 Grid"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          , React.createElement(TwoColumnImageGrid, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
        )
        , React.createElement(ComponentCard, { title: "Image in 3 Grid"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          , React.createElement(ThreeColumnImageGrid, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}} )
        )
      )
    )
  );
}

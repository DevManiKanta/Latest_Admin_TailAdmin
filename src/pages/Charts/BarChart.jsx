const _jsxFileName = "";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import React from "react";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function BarChart() {
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
      , React.createElement(PageMeta, {
        title: "React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Bar Chart" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
      , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement(ComponentCard, { title: "Bar Chart 1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          , React.createElement(BarChartOne, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} )
        )
      )
    )
  );
}

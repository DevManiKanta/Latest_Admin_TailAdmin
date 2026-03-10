const _jsxFileName = "";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import React from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Alert from "../../components/ui/alert/Alert";
import PageMeta from "../../components/common/PageMeta";

export default function Alerts() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Alerts Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Alerts Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Alerts", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
      , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement(ComponentCard, { title: "Success Alert" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          , React.createElement(Alert, {
            variant: "success",
            title: "Success Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: true,
            linkHref: "/",
            linkText: "Learn more" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
          )
          , React.createElement(Alert, {
            variant: "success",
            title: "Success Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: false, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
          )
        )
        , React.createElement(ComponentCard, { title: "Warning Alert" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
          , React.createElement(Alert, {
            variant: "warning",
            title: "Warning Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: true,
            linkHref: "/",
            linkText: "Learn more" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
          )
          , React.createElement(Alert, {
            variant: "warning",
            title: "Warning Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: false, __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
          )
        ), " "
        , React.createElement(ComponentCard, { title: "Error Alert" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
          , React.createElement(Alert, {
            variant: "error",
            title: "Error Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: true,
            linkHref: "/",
            linkText: "Learn more" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
          )
          , React.createElement(Alert, {
            variant: "error",
            title: "Error Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: false, __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
          )
        ), " "
        , React.createElement(ComponentCard, { title: "Info Alert" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
          , React.createElement(Alert, {
            variant: "info",
            title: "Info Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: true,
            linkHref: "/",
            linkText: "Learn more" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
          )
          , React.createElement(Alert, {
            variant: "info",
            title: "Info Message" ,
            message: "Be cautious when performing this action."     ,
            showLink: false, __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
          )
        )
      )
    )
  );
}

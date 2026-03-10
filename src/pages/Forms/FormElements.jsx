const _jsxFileName = "";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import React from "react";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
import RadioButtons from "../../components/form/form-elements/RadioButtons";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import InputStates from "../../components/form/form-elements/InputStates";
import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
      , React.createElement(PageMeta, {
        title: "React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"          ,
        description: "This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "From Elements" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
      , React.createElement('div', { className: "grid grid-cols-1 gap-6 xl:grid-cols-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
        , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          , React.createElement(DefaultInputs, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}} )
          , React.createElement(SelectInputs, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
          , React.createElement(TextAreaInput, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 26}} )
          , React.createElement(InputStates, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}} )
        )
        , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
          , React.createElement(InputGroup, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} )
          , React.createElement(FileInputExample, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}} )
          , React.createElement(CheckboxComponents, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}} )
          , React.createElement(RadioButtons, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
          , React.createElement(ToggleSwitch, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}} )
          , React.createElement(DropzoneComponent, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} )
        )
      )
    )
  );
}

const _jsxFileName = "";
import ComponentCard from "../../components/common/ComponentCard";
import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon } from "../../icons";

export default function Buttons() {
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      , React.createElement(PageMeta, {
        title: "React.js Buttons Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Buttons", __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}} )
      , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
        /* Primary Button */
        , React.createElement(ComponentCard, { title: "Primary Button" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
            , React.createElement(Button, { size: "sm", variant: "primary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, "Button Text"

            )
            , React.createElement(Button, { size: "md", variant: "primary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Button Text"

            )
          )
        )
        /* Primary Button with Start Icon */
        , React.createElement(ComponentCard, { title: "Primary Button with Left Icon"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement(Button, {
              size: "sm",
              variant: "primary",
              startIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
, "Button Text"

            )
            , React.createElement(Button, {
              size: "md",
              variant: "primary",
              startIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
, "Button Text"

            )
          )
        )
        /* Primary Button with Start Icon */
        , React.createElement(ComponentCard, { title: "Primary Button with Right Icon"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
            , React.createElement(Button, {
              size: "sm",
              variant: "primary",
              endIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
, "Button Text"

            )
            , React.createElement(Button, {
              size: "md",
              variant: "primary",
              endIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
, "Button Text"

            )
          )
        )
        /* Outline Button */
        , React.createElement(ComponentCard, { title: "Secondary Button" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
            /* Outline Button */
            , React.createElement(Button, { size: "sm", variant: "outline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}, "Button Text"

            )
            , React.createElement(Button, { size: "md", variant: "outline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, "Button Text"

            )
          )
        )
        /* Outline Button with Start Icon */
        , React.createElement(ComponentCard, { title: "Outline Button with Left Icon"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
            , React.createElement(Button, {
              size: "sm",
              variant: "outline",
              startIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
, "Button Text"

            )
            , React.createElement(Button, {
              size: "md",
              variant: "outline",
              startIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
, "Button Text"

            )
          )
        ), " "
        /* Outline Button with Start Icon */
        , React.createElement(ComponentCard, { title: "Outline Button with Right Icon"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
          , React.createElement('div', { className: "flex items-center gap-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
            , React.createElement(Button, {
              size: "sm",
              variant: "outline",
              endIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
, "Button Text"

            )
            , React.createElement(Button, {
              size: "md",
              variant: "outline",
              endIcon: React.createElement(BoxIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
, "Button Text"

            )
          )
        )
      )
    )
  );
}

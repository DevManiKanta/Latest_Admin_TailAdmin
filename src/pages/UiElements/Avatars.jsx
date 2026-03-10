const _jsxFileName = "";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import React from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Avatar from "../../components/ui/avatar/Avatar";
import PageMeta from "../../components/common/PageMeta";

export default function Avatars() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Avatars Dashboard | TailAdmin - React.js Admin Dashboard Template"         ,
        description: "This is React.js Avatars Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Avatars", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
      , React.createElement('div', { className: "space-y-5 sm:space-y-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement(ComponentCard, { title: "Default Avatar" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          /* Default Avatar (No Status) */
          , React.createElement('div', { className: "flex flex-col items-center justify-center gap-5 sm:flex-row"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "xsmall", __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "small", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}} )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}} )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "large", __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "xlarge", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "xxlarge", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
          )
        )
        , React.createElement(ComponentCard, { title: "Avatar with online indicator"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement('div', { className: "flex flex-col items-center justify-center gap-5 sm:flex-row"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xsmall",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "small",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "medium",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "large",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xlarge",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xxlarge",
              status: "online", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
            )
          )
        )
        , React.createElement(ComponentCard, { title: "Avatar with Offline indicator"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
          , React.createElement('div', { className: "flex flex-col items-center justify-center gap-5 sm:flex-row"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xsmall",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "small",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "medium",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "large",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xlarge",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xxlarge",
              status: "offline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
            )
          )
        ), " "
        , React.createElement(ComponentCard, { title: "Avatar with busy indicator"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
          , React.createElement('div', { className: "flex flex-col items-center justify-center gap-5 sm:flex-row"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xsmall",
              status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
            )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "small", status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}} )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "medium",
              status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}
            )
            , React.createElement(Avatar, { src: "/images/user/user-01.jpg", size: "large", status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}} )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xlarge",
              status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
            )
            , React.createElement(Avatar, {
              src: "/images/user/user-01.jpg",
              size: "xxlarge",
              status: "busy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
            )
          )
        )
      )
    )
  );
}

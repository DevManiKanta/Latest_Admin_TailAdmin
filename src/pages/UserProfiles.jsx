const _jsxFileName = "";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import React from "react";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"         ,
        description: "This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      )
      , React.createElement(PageBreadcrumb, { pageTitle: "Profile", __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}} )
      , React.createElement('div', { className: "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
        , React.createElement('h3', { className: "mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "Profile"

        )
        , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
          , React.createElement(UserMetaCard, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}} )
          , React.createElement(UserInfoCard, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
          , React.createElement(UserAddressCard, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} )
        )
      )
    )
  );
}

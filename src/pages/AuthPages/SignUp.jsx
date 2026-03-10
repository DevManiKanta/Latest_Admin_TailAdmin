const _jsxFileName = "";
import PageMeta from "../../components/common/PageMeta";
import React from "react";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    React.createElement(React.Fragment, null
      , React.createElement(PageMeta, {
        title: "React.js SignUp Dashboard | TailAdmin - Next.js Admin Dashboard Template"         ,
        description: "This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
      )
      , React.createElement(AuthLayout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement(SignUpForm, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
      )
    )
  );
}

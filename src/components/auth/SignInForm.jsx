const _jsxFileName = "";
import React, { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    React.createElement('div', { className: "flex flex-col flex-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
      , React.createElement('div', { className: "w-full max-w-md pt-10 mx-auto"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement(Link, {
          to: "/",
          className: "inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}

          , React.createElement(ChevronLeftIcon, { className: "size-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}} ), "Back to dashboard"

        )
      )
      , React.createElement('div', { className: "flex flex-col justify-center flex-1 w-full max-w-md mx-auto"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
          , React.createElement('div', { className: "mb-5 sm:mb-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
            , React.createElement('h1', { className: "mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "Sign In"

            )
            , React.createElement('p', { className: "text-sm text-gray-500 dark:text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, "Enter your email and password to sign in!"

            )
          )
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('div', { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement('button', { className: "inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                , React.createElement('svg', {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20"   ,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}

                  , React.createElement('path', {
                    d: "M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"                   ,
                    fill: "#4285F4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
                  )
                  , React.createElement('path', {
                    d: "M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"                         ,
                    fill: "#34A853", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                  )
                  , React.createElement('path', {
                    d: "M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"                         ,
                    fill: "#FBBC05", __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                  )
                  , React.createElement('path', {
                    d: "M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"                       ,
                    fill: "#EB4335", __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
                  )
                ), "Sign in with Google"

              )
              , React.createElement('button', { className: "inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
                , React.createElement('svg', {
                  width: "21",
                  className: "fill-current",
                  height: "20",
                  viewBox: "0 0 21 20"   ,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}

                  , React.createElement('path', { d: "M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}} )
                ), "Sign in with X"

              )
            )
            , React.createElement('div', { className: "relative py-3 sm:py-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
              , React.createElement('div', { className: "absolute inset-0 flex items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
                , React.createElement('div', { className: "w-full border-t border-gray-200 dark:border-gray-800"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}})
              )
              , React.createElement('div', { className: "relative flex justify-center text-sm"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
                , React.createElement('span', { className: "p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Or"

                )
              )
            )
            , React.createElement('form', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
              , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
                  , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "Email "
                     , React.createElement('span', { className: "text-error-500", __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}, "*"), " "
                  )
                  , React.createElement(Input, { placeholder: "info@gmail.com", __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}} )
                )
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
                  , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, "Password "
                     , React.createElement('span', { className: "text-error-500", __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "*"), " "
                  )
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                    , React.createElement(Input, {
                      type: showPassword ? "text" : "password",
                      placeholder: "Enter your password"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
                    )
                    , React.createElement('span', {
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}

                      , showPassword ? (
                        React.createElement(EyeIcon, { className: "fill-gray-500 dark:fill-gray-400 size-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}} )
                      ) : (
                        React.createElement(EyeCloseIcon, { className: "fill-gray-500 dark:fill-gray-400 size-5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} )
                      )
                    )
                  )
                )
                , React.createElement('div', { className: "flex items-center justify-between"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
                  , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                    , React.createElement(Checkbox, { checked: isChecked, onChange: setIsChecked, __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}} )
                    , React.createElement('span', { className: "block font-normal text-gray-700 text-theme-sm dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "Keep me logged in"

                    )
                  )
                  , React.createElement(Link, {
                    to: "/reset-password",
                    className: "text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
, "Forgot password?"

                  )
                )
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
                  , React.createElement(Button, { className: "w-full", size: "sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}, "Sign in"

                  )
                )
              )
            )

            , React.createElement('div', { className: "mt-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}
              , React.createElement('p', { className: "text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, "Don't have an account? "
                    , ""
                , React.createElement(Link, {
                  to: "/signup",
                  className: "text-brand-500 hover:text-brand-600 dark:text-brand-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}
, "Sign Up"

                )
              )
            )
          )
        )
      )
    )
  );
}

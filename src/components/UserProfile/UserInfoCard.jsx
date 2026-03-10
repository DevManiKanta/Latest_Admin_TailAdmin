const _jsxFileName = "";
import { useModal } from "../../hooks/useModal";
import React from "react";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    React.createElement('div', { className: "p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
      , React.createElement('div', { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
          , React.createElement('h4', { className: "text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}, "Personal Informssssation"

          )

          , React.createElement('div', { className: "grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
              , React.createElement('p', { className: "mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "First Name"

              )
              , React.createElement('p', { className: "text-sm font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Musharof"

              )
            )

            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
              , React.createElement('p', { className: "mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}, "Last Name"

              )
              , React.createElement('p', { className: "text-sm font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Chowdhury"

              )
            )

            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
              , React.createElement('p', { className: "mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}, "Email address"

              )
              , React.createElement('p', { className: "text-sm font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "randomuser@pimjo.com"

              )
            )

            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
              , React.createElement('p', { className: "mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, "Phone"

              )
              , React.createElement('p', { className: "text-sm font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, "+09 363 398 46"

              )
            )

            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}
              , React.createElement('p', { className: "mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, "Bio"

              )
              , React.createElement('p', { className: "text-sm font-medium text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}, "Team Manager"

              )
            )
          )
        )

        , React.createElement('button', {
          onClick: openModal,
          className: "flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"                       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}

          , React.createElement('svg', {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18"   ,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}

            , React.createElement('path', {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"                                                                   ,
              fill: "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
            )
          ), "Edit"

        )
      )

      , React.createElement(Modal, { isOpen: isOpen, onClose: closeModal, className: "max-w-[700px] m-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
        , React.createElement('div', { className: "no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
          , React.createElement('div', { className: "px-2 pr-14" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
            , React.createElement('h4', { className: "mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "Edit Personal Information"

            )
            , React.createElement('p', { className: "mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Update your details to keep your profile up-to-date."

            )
          )
          , React.createElement('form', { className: "flex flex-col" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
            , React.createElement('div', { className: "custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
                , React.createElement('h5', { className: "mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}, "Social Links"

                )

                , React.createElement('div', { className: "grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}, "Facebook")
                    , React.createElement(Input, {
                      type: "text",
                      value: "https://www.facebook.com/PimjoHQ", __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
                    )
                  )

                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}, "X.com")
                    , React.createElement(Input, { type: "text", value: "https://x.com/PimjoHQ", __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
                  )

                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}, "Linkedin")
                    , React.createElement(Input, {
                      type: "text",
                      value: "https://www.linkedin.com/company/pimjo", __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}
                    )
                  )

                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}, "Instagram")
                    , React.createElement(Input, { type: "text", value: "https://instagram.com/PimjoHQ", __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}} )
                  )
                )
              )
              , React.createElement('div', { className: "mt-7", __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}
                , React.createElement('h5', { className: "mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Personal Information"

                )

                , React.createElement('div', { className: "grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}
                  , React.createElement('div', { className: "col-span-2 lg:col-span-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, "First Name" )
                    , React.createElement(Input, { type: "text", value: "Musharof", __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}} )
                  )

                  , React.createElement('div', { className: "col-span-2 lg:col-span-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}, "Last Name" )
                    , React.createElement(Input, { type: "text", value: "Chowdhury", __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}} )
                  )

                  , React.createElement('div', { className: "col-span-2 lg:col-span-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}, "Email Address" )
                    , React.createElement(Input, { type: "text", value: "randomuser@pimjo.com", __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}} )
                  )

                  , React.createElement('div', { className: "col-span-2 lg:col-span-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, "Phone")
                    , React.createElement(Input, { type: "text", value: "+09 363 398 46"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}} )
                  )

                  , React.createElement('div', { className: "col-span-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
                    , React.createElement(Label, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}, "Bio")
                    , React.createElement(Input, { type: "text", value: "Team Manager" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}} )
                  )
                )
              )
            )
            , React.createElement('div', { className: "flex items-center gap-3 px-2 mt-6 lg:justify-end"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}
              , React.createElement(Button, { size: "sm", variant: "outline", onClick: closeModal, __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, "Close"

              )
              , React.createElement(Button, { size: "sm", onClick: handleSave, __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}, "Save Changes"

              )
            )
          )
        )
      )
    )
  );
}

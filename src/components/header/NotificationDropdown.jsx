const _jsxFileName = "";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Link } from "react-router";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
      , React.createElement('button', {
        className: "relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"                   ,
        onClick: handleClick, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}

        , React.createElement('span', {
          className: `absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}

          , React.createElement('span', { className: "absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}})
        )
        , React.createElement('svg', {
          className: "fill-current",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20"   ,
          xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}

          , React.createElement('path', {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"                                                                         ,
            fill: "currentColor", __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
          )
        )
      )
      , React.createElement(Dropdown, {
        isOpen: isOpen,
        onClose: closeDropdown,
        className: "absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}

        , React.createElement('div', { className: "flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
          , React.createElement('h5', { className: "text-lg font-semibold text-gray-800 dark:text-gray-200"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}, "Notification"

          )
          , React.createElement('button', {
            onClick: toggleDropdown,
            className: "text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}

            , React.createElement('svg', {
              className: "fill-current",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"   ,
              xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}

              , React.createElement('path', {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"                                                 ,
                fill: "currentColor", __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
              )
            )
          )
        )
        , React.createElement('ul', { className: "flex flex-col h-auto overflow-y-auto custom-scrollbar"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
          /* Example notification items */
          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-02.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
                , React.createElement('span', { className: "mb-1.5 block  text-theme-sm text-gray-500 dark:text-gray-400 space-x-1"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Terry Franci"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, " requests permission to change"    )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "5 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-03.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
                , React.createElement('span', { className: "mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}, "Alena Franci"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, "requests permission to change"   )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}, "8 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-04.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
                , React.createElement('span', { className: "mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, "Jocelyn Kenter"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 174}}, " requests permission to change"    )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, "15 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 189}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          ,
              to: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-05.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 206}}
                , React.createElement('span', { className: "mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 207}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}, "Brandon Philips"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}, "requests permission to change"   )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 217}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 218}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 220}}, "1 hr ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 226}}
            , React.createElement(DropdownItem, {
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          ,
              onItemClick: closeDropdown, __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 231}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-02.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}}
                , React.createElement('span', { className: "mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 243}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, "Terry Franci"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, " requests permission to change"    )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 253}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 254}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 255}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 256}}, "5 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 262}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-03.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 268}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 275}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 278}}
                , React.createElement('span', { className: "mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 279}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 280}}, "Alena Franci"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 283}}, " requests permission to change"    )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 284}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 289}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 290}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 291}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 292}}, "8 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 298}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 299}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 303}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-04.jpg",
                  alt: "User",
                  className: "w-full overflow-hidden rounded-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 304}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 311}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}}
                , React.createElement('span', { className: "mb-1.5 block  space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 315}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 316}}, "Jocelyn Kenter"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}, " requests permission to change"    )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 320}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 325}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 326}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 327}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 328}}, "15 min ago"  )
                )
              )
            )
          )

          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 334}}
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 335}}

              , React.createElement('span', { className: "relative block w-full h-10 rounded-full z-1 max-w-10"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 339}}
                , React.createElement('img', {
                  width: 40,
                  height: 40,
                  src: "/images/user/user-05.jpg",
                  alt: "User",
                  className: "overflow-hidden rounded-full" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}
                )
                , React.createElement('span', { className: "absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 347}})
              )

              , React.createElement('span', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 350}}
                , React.createElement('span', { className: "mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 352}}, "Brandon Philips"

                  )
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 355}}, "requests permission to change"   )
                  , React.createElement('span', { className: "font-medium text-gray-800 dark:text-white/90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 356}}, "Project - Nganter App"

                  )
                )

                , React.createElement('span', { className: "flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 361}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 362}}, "Project")
                  , React.createElement('span', { className: "w-1 h-1 bg-gray-400 rounded-full"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 363}})
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 364}}, "1 hr ago"  )
                )
              )
            )
          )
          /* Add more items as needed */
        )
        , React.createElement(Link, {
          to: "/",
          className: "block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 371}}
, "View All Notifications"

        )
      )
    )
  );
}

const _jsxFileName = "";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    React.createElement('div', { className: "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
      , React.createElement('div', { className: "flex justify-between" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          , React.createElement('h3', { className: "text-lg font-semibold text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, "Customers Demographic"

          )
          , React.createElement('p', { className: "mt-1 text-gray-500 text-theme-sm dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "Number of customer based osssn country"

          )
        )
        , React.createElement('div', { className: "relative inline-block" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('button', { className: "dropdown-toggle", onClick: toggleDropdown, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement(MoreDotIcon, { className: "text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} )
          )
          , React.createElement(Dropdown, {
            isOpen: isOpen,
            onClose: closeDropdown,
            className: "w-40 p-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}

            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
, "View More"

            )
            , React.createElement(DropdownItem, {
              onItemClick: closeDropdown,
              className: "flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
, "Delete"

            )
          )
        )
      )
      , React.createElement('div', { className: "px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl dark:border-gray-800 sm:px-6"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
        , React.createElement('div', {
          id: "mapOne",
          className: "mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}

          , React.createElement(CountryMap, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} )
        )
      )

      , React.createElement('div', { className: "space-y-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
        , React.createElement('div', { className: "flex items-center justify-between"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
          , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
            , React.createElement('div', { className: "items-center w-full rounded-full max-w-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
              , React.createElement('img', { src: "./images/country/country-01.svg", alt: "usa", __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}} )
            )
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
              , React.createElement('p', { className: "font-semibold text-gray-800 text-theme-sm dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}, "USA"

              )
              , React.createElement('span', { className: "block text-gray-500 text-theme-xs dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "2,379 Customers"

              )
            )
          )

          , React.createElement('div', { className: "flex w-full max-w-[140px] items-center gap-3"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
            , React.createElement('div', { className: "relative block h-2 w-full max-w-[100px] rounded bg-gray-200 dark:bg-gray-800"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
              , React.createElement('div', { className: "absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded bg-brand-500 text-xs font-medium text-white"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}})
            )
            , React.createElement('p', { className: "font-medium text-gray-800 text-theme-sm dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "79%"

            )
          )
        )

        , React.createElement('div', { className: "flex items-center justify-between"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
          , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
            , React.createElement('div', { className: "items-center w-full rounded-full max-w-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}
              , React.createElement('img', { src: "./images/country/country-02.svg", alt: "france", __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}} )
            )
            , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}
              , React.createElement('p', { className: "font-semibold text-gray-800 text-theme-sm dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}, "France"

              )
              , React.createElement('span', { className: "block text-gray-500 text-theme-xs dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "589 Customers"

              )
            )
          )

          , React.createElement('div', { className: "flex w-full max-w-[140px] items-center gap-3"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}
            , React.createElement('div', { className: "relative block h-2 w-full max-w-[100px] rounded bg-gray-200 dark:bg-gray-800"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
              , React.createElement('div', { className: "absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded bg-brand-500 text-xs font-medium text-white"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}})
            )
            , React.createElement('p', { className: "font-medium text-gray-800 text-theme-sm dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}, "23%"

            )
          )
        )
      )
    )
  );
}

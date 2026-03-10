const _jsxFileName = "";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import React from "react";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for the table rows











// Define the table data using the interface
const tableData = [
  {
    id: 1,
    name: "MacBook Pro 13”",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    image: "/images/product/product-01.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    image: "/images/product/product-02.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    image: "/images/product/product-03.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    image: "/images/product/product-04.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    image: "/images/product/product-05.jpg", // Replace with actual image URL
  },
];

export default function RecentOrders() {
  return (
    React.createElement('div', { className: "overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}
      , React.createElement('div', { className: "flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
          , React.createElement('h3', { className: "text-lg font-semibold text-gray-800 dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "Recent Orders"

          )
        )

        , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
          , React.createElement('button', { className: "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
            , React.createElement('svg', {
              className: "stroke-current fill-white dark:fill-gray-800"  ,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20"   ,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}

              , React.createElement('path', {
                d: "M2.29004 5.90393H17.7067" ,
                stroke: "",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round", __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
              )
              , React.createElement('path', {
                d: "M17.7075 14.0961H2.29085" ,
                stroke: "",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round", __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
              )
              , React.createElement('path', {
                d: "M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"                     ,
                fill: "",
                stroke: "",
                strokeWidth: "1.5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
              )
              , React.createElement('path', {
                d: "M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"                     ,
                fill: "",
                stroke: "",
                strokeWidth: "1.5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
              )
            ), "Filter"

          )
          , React.createElement('button', { className: "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"                   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}, "See all"

          )
        )
      )
      , React.createElement('div', { className: "max-w-full overflow-x-auto" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
        , React.createElement(Table, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}
          /* Table Header */
          , React.createElement(TableHeader, { className: "border-gray-100 dark:border-gray-800 border-y"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}
            , React.createElement(TableRow, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
              , React.createElement(TableCell, {
                isHeader: true,
                className: "py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}
, "Products"

              )
              , React.createElement(TableCell, {
                isHeader: true,
                className: "py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}
, "Category"

              )
              , React.createElement(TableCell, {
                isHeader: true,
                className: "py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}}
, "Price"

              )
              , React.createElement(TableCell, {
                isHeader: true,
                className: "py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}
, "Status"

              )
            )
          )

          /* Table Body */

          , React.createElement(TableBody, { className: "divide-y divide-gray-100 dark:divide-gray-800"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
            , tableData.map((product) => (
              React.createElement(TableRow, { key: product.id, className: "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}
                , React.createElement(TableCell, { className: "py-3", __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}
                  , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
                    , React.createElement('div', { className: "h-[50px] w-[50px] overflow-hidden rounded-md"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
                      , React.createElement('img', {
                        src: product.image,
                        className: "h-[50px] w-[50px]" ,
                        alt: product.name, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
                      )
                    )
                    , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}
                      , React.createElement('p', { className: "font-medium text-gray-800 text-theme-sm dark:text-white/90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}
                        , product.name
                      )
                      , React.createElement('span', { className: "text-gray-500 text-theme-xs dark:text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}
                        , product.variants
                      )
                    )
                  )
                )
                , React.createElement(TableCell, { className: "py-3 text-gray-500 text-theme-sm dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}
                  , product.price
                )
                , React.createElement(TableCell, { className: "py-3 text-gray-500 text-theme-sm dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
                  , product.category
                )
                , React.createElement(TableCell, { className: "py-3 text-gray-500 text-theme-sm dark:text-gray-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}
                  , React.createElement(Badge, {
                    size: "sm",
                    color: 
                      product.status === "Delivered"
                        ? "success"
                        : product.status === "Pending"
                        ? "warning"
                        : "error"
                    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}

                    , product.status
                  )
                )
              )
            ))
          )
        )
      )
    )
  );
}

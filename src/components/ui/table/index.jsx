import React from "react";
const _jsxFileName = "";

// Props for Table






























// Table Component
const Table = ({ children, className }) => {
  return React.createElement('table', { className: `min-w-full  ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, children);
};

// TableHeader Component
const TableHeader = ({ children, className }) => {
  return React.createElement('thead', { className: className, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, children);
};

// TableBody Component
const TableBody = ({ children, className }) => {
  return React.createElement('tbody', { className: className, __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, children);
};

// TableRow Component
const TableRow = ({ children, className }) => {
  return React.createElement('tr', { className: className, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, children);
};

// TableCell Component
const TableCell = ({
  children,
  isHeader = false,
  className,
}) => {
  const CellTag = isHeader ? "th" : "td";
  return React.createElement(CellTag, { className: ` ${className}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}, children);
};

export { Table, TableHeader, TableBody, TableRow, TableCell };

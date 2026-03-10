const _jsxFileName = "";
import React from "react";
import { Link } from "react-router";











export const DropdownItem = ({
  tag = "button",
  to,
  onClick,
  onItemClick,
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  className = "",
  children,
}) => {
  const combinedClasses = `${baseClassName} ${className}`.trim();

  const handleClick = (event) => {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
  };

  if (tag === "a" && to) {
    return (
      React.createElement(Link, { to: to, className: combinedClasses, onClick: handleClick, __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
        , children
      )
    );
  }

  return (
    React.createElement('button', { onClick: handleClick, className: combinedClasses, __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
      , children
    )
  );
};

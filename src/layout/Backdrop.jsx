import React from "react";
const _jsxFileName = "";
import { useSidebar } from "../context/SidebarContext";

const Backdrop = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    React.createElement('div', {
      className: "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 lg:hidden"     ,
      onClick: toggleMobileSidebar, __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
    )
  );
};

export default Backdrop;

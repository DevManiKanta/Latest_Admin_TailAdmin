// const _jsxFileName = "";
// import { SidebarProvider, useSidebar } from "../context/SidebarContext";
// import React from "react";
// import { Outlet } from "react-router";
// import AppHeader from "./AppHeader";
// import Backdrop from "./Backdrop";
// import AppSidebar from "./AppSidebar";

// const LayoutContent = () => {
//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

//   return (
//     React.createElement('div', { className: "min-h-screen xl:flex" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
//       , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
//         , React.createElement(AppSidebar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
//         , React.createElement(Backdrop, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 14}} )
//       )
//       , React.createElement('div', {
//         className: `flex-1 transition-all duration-300 ease-in-out ${
//           isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
//         } ${isMobileOpen ? "ml-0" : ""}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}

//         , React.createElement(AppHeader, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}} )
//         , React.createElement('div', { className: "p-4 mx-auto max-w-screen-2xl md:p-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
//           , React.createElement(Outlet, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
//         )
//       )
//     )
//   );
// };

// const AppLayout = () => {
//   return (
//     React.createElement(SidebarProvider, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
//       , React.createElement(LayoutContent, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
//     )
//   );
// };

// export default AppLayout;

import React from "react";
import { Outlet } from "react-router";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";

import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />

        <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;

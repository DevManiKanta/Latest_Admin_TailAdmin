// const _jsxFileName = ""; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; };
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router";

// // Assume these icons are imported from an icon library
// import {
//   BoxCubeIcon,
//   CalenderIcon,
//   ChevronDownIcon,
//   GridIcon,
//   HorizontaLDots,
//   ListIcon,
//   PageIcon,
//   PieChartIcon,
//   PlugInIcon,
//   TableIcon,
//   UserCircleIcon,
// } from "../icons";
// import { useSidebar } from "../context/SidebarContext";
// import SidebarWidget from "./SidebarWidget";








// const navItems = [
//   {
//     icon: React.createElement(GridIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} ),
//     name: "Dashboard",
//     subItems: [{ name: "Ecommerce", path: "/", pro: false }],
//   },
//   {
//     icon: React.createElement(CalenderIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} ),
//     name: "Calendar",
//     path: "/calendar",
//   },
//   {
//     icon: React.createElement(UserCircleIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 40}} ),
//     name: "User Profile",
//     path: "/profile",
//   },
//   {
//     name: "Forms",
//     icon: React.createElement(ListIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} ),
//     subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
//   },
//   {
//     name: "Tables",
//     icon: React.createElement(TableIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 51}} ),
//     subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
//   },
//   {
//     name: "Pages",
//     icon: React.createElement(PageIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} ),
//     subItems: [
//       { name: "Blank Page", path: "/blank", pro: false },
//       { name: "404 Error", path: "/error-404", pro: false },
//     ],
//   },
// ];

// const othersItems = [
//   {
//     icon: React.createElement(PieChartIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 66}} ),
//     name: "Charts",
//     subItems: [
//       { name: "Line Chart", path: "/line-chart", pro: false },
//       { name: "Bar Chart", path: "/bar-chart", pro: false },
//     ],
//   },
//   {
//     icon: React.createElement(BoxCubeIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} ),
//     name: "UI Elements",
//     subItems: [
//       { name: "Alerts", path: "/alerts", pro: false },
//       { name: "Avatar", path: "/avatars", pro: false },
//       { name: "Badge", path: "/badge", pro: false },
//       { name: "Buttons", path: "/buttons", pro: false },
//       { name: "Images", path: "/images", pro: false },
//       { name: "Videos", path: "/videos", pro: false },
//     ],
//   },
//   {
//     icon: React.createElement(PlugInIcon, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}} ),
//     name: "Authentication",
//     subItems: [
//       { name: "Sign In", path: "/signin", pro: false },
//       { name: "Sign Up", path: "/signup", pro: false },
//     ],
//   },
// ];

// const AppSidebar = () => {
//   const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
//   const location = useLocation();

//   const [openSubmenu, setOpenSubmenu] = useState


// (null);
//   const [subMenuHeight, setSubMenuHeight] = useState(
//     {}
//   );
//   const subMenuRefs = useRef({});

//   // const isActive = (path: string) => location.pathname === path;
//   const isActive = useCallback(
//     (path) => location.pathname === path,
//     [location.pathname]
//   );

//   useEffect(() => {
//     let submenuMatched = false;
//     ["main", "others"].forEach((menuType) => {
//       const items = menuType === "main" ? navItems : othersItems;
//       items.forEach((nav, index) => {
//         if (nav.subItems) {
//           nav.subItems.forEach((subItem) => {
//             if (isActive(subItem.path)) {
//               setOpenSubmenu({
//                 type: menuType ,
//                 index,
//               });
//               submenuMatched = true;
//             }
//           });
//         }
//       });
//     });

//     if (!submenuMatched) {
//       setOpenSubmenu(null);
//     }
//   }, [location, isActive]);

//   useEffect(() => {
//     if (openSubmenu !== null) {
//       const key = `${openSubmenu.type}-${openSubmenu.index}`;
//       if (subMenuRefs.current[key]) {
//         setSubMenuHeight((prevHeights) => ({
//           ...prevHeights,
//           [key]: _optionalChain([subMenuRefs, 'access', _ => _.current, 'access', _2 => _2[key], 'optionalAccess', _3 => _3.scrollHeight]) || 0,
//         }));
//       }
//     }
//   }, [openSubmenu]);

//   const handleSubmenuToggle = (index, menuType) => {
//     setOpenSubmenu((prevOpenSubmenu) => {
//       if (
//         prevOpenSubmenu &&
//         prevOpenSubmenu.type === menuType &&
//         prevOpenSubmenu.index === index
//       ) {
//         return null;
//       }
//       return { type: menuType, index };
//     });
//   };

//   const renderMenuItems = (items, menuType) => (
//     React.createElement('ul', { className: "flex flex-col gap-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
//       , items.map((nav, index) => (
//         React.createElement('li', { key: nav.name, __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}
//           , nav.subItems ? (
//             React.createElement('button', {
//               onClick: () => handleSubmenuToggle(index, menuType),
//               className: `menu-item group ${
//                 _optionalChain([openSubmenu, 'optionalAccess', _4 => _4.type]) === menuType && _optionalChain([openSubmenu, 'optionalAccess', _5 => _5.index]) === index
//                   ? "menu-item-active"
//                   : "menu-item-inactive"
//               } cursor-pointer ${
//                 !isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "lg:justify-start"
//               }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}

//               , React.createElement('span', {
//                 className: `menu-item-icon-size  ${
//                   _optionalChain([openSubmenu, 'optionalAccess', _6 => _6.type]) === menuType && _optionalChain([openSubmenu, 'optionalAccess', _7 => _7.index]) === index
//                     ? "menu-item-icon-active"
//                     : "menu-item-icon-inactive"
//                 }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}

//                 , nav.icon
//               )
//               , (isExpanded || isHovered || isMobileOpen) && (
//                 React.createElement('span', { className: "menu-item-text", __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}, nav.name)
//               )
//               , (isExpanded || isHovered || isMobileOpen) && (
//                 React.createElement(ChevronDownIcon, {
//                   className: `ml-auto w-5 h-5 transition-transform duration-200 ${
//                     _optionalChain([openSubmenu, 'optionalAccess', _8 => _8.type]) === menuType &&
//                     _optionalChain([openSubmenu, 'optionalAccess', _9 => _9.index]) === index
//                       ? "rotate-180 text-brand-500"
//                       : ""
//                   }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 193}}
//                 )
//               )
//             )
//           ) : (
//             nav.path && (
//               React.createElement(Link, {
//                 to: nav.path,
//                 className: `menu-item group ${
//                   isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
//                 }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}}

//                 , React.createElement('span', {
//                   className: `menu-item-icon-size ${
//                     isActive(nav.path)
//                       ? "menu-item-icon-active"
//                       : "menu-item-icon-inactive"
//                   }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 211}}

//                   , nav.icon
//                 )
//                 , (isExpanded || isHovered || isMobileOpen) && (
//                   React.createElement('span', { className: "menu-item-text", __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, nav.name)
//                 )
//               )
//             )
//           )
//           , nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
//             React.createElement('div', {
//               ref: (el) => {
//                 subMenuRefs.current[`${menuType}-${index}`] = el;
//               },
//               className: "overflow-hidden transition-all duration-300"  ,
//               style: {
//                 height:
//                   _optionalChain([openSubmenu, 'optionalAccess', _10 => _10.type]) === menuType && _optionalChain([openSubmenu, 'optionalAccess', _11 => _11.index]) === index
//                     ? `${subMenuHeight[`${menuType}-${index}`]}px`
//                     : "0px",
//               }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}

//               , React.createElement('ul', { className: "mt-2 space-y-1 ml-9"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}
//                 , nav.subItems.map((subItem) => (
//                   React.createElement('li', { key: subItem.name, __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}
//                     , React.createElement(Link, {
//                       to: subItem.path,
//                       className: `menu-dropdown-item ${
//                         isActive(subItem.path)
//                           ? "menu-dropdown-item-active"
//                           : "menu-dropdown-item-inactive"
//                       }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}}

//                       , subItem.name
//                       , React.createElement('span', { className: "flex items-center gap-1 ml-auto"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 251}}
//                         , subItem.new && (
//                           React.createElement('span', {
//                             className: `ml-auto ${
//                               isActive(subItem.path)
//                                 ? "menu-dropdown-badge-active"
//                                 : "menu-dropdown-badge-inactive"
//                             } menu-dropdown-badge`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 253}}
// , "new"

//                           )
//                         )
//                         , subItem.pro && (
//                           React.createElement('span', {
//                             className: `ml-auto ${
//                               isActive(subItem.path)
//                                 ? "menu-dropdown-badge-active"
//                                 : "menu-dropdown-badge-inactive"
//                             } menu-dropdown-badge`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 264}}
// , "pro"

//                           )
//                         )
//                       )
//                     )
//                   )
//                 ))
//               )
//             )
//           )
//         )
//       ))
//     )
//   );

//   return (
//     React.createElement('aside', {
//       className: `fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
//         ${
//           isExpanded || isMobileOpen
//             ? "w-[290px]"
//             : isHovered
//             ? "w-[290px]"
//             : "w-[90px]"
//         }
//         ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`,
//       onMouseEnter: () => !isExpanded && setIsHovered(true),
//       onMouseLeave: () => setIsHovered(false), __self: this, __source: {fileName: _jsxFileName, lineNumber: 287}}

//       , React.createElement('div', {
//         className: `py-8 flex ${
//           !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
//         }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 301}}

//         , React.createElement(Link, { to: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 306}}
//           , isExpanded || isHovered || isMobileOpen ? (
//             React.createElement(React.Fragment, null
//               , React.createElement('img', {
//                 className: "dark:hidden",
//                 src: "/images/logo/logo.svg",
//                 alt: "Logo",
//                 width: 150,
//                 height: 40, __self: this, __source: {fileName: _jsxFileName, lineNumber: 309}}
//               )
//               , React.createElement('img', {
//                 className: "hidden dark:block" ,
//                 src: "/images/logo/logo-dark.svg",
//                 alt: "Logo",
//                 width: 150,
//                 height: 40, __self: this, __source: {fileName: _jsxFileName, lineNumber: 316}}
//               )
//             )
//           ) : (
//             React.createElement('img', {
//               src: "/images/logo/logo-icon.svg",
//               alt: "Logo",
//               width: 32,
//               height: 32, __self: this, __source: {fileName: _jsxFileName, lineNumber: 325}}
//             )
//           )
//         )
//       )
//       , React.createElement('div', { className: "flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 334}}
//         , React.createElement('nav', { className: "mb-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 335}}
//           , React.createElement('div', { className: "flex flex-col gap-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 336}}
//             , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 337}}
//               , React.createElement('h2', {
//                 className: `mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
//                   !isExpanded && !isHovered
//                     ? "lg:justify-center"
//                     : "justify-start"
//                 }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 338}}

//                 , isExpanded || isHovered || isMobileOpen ? (
//                   "Menu"
//                 ) : (
//                   React.createElement(HorizontaLDots, { className: "size-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 348}} )
//                 )
//               )
//               , renderMenuItems(navItems, "main")
//             )
//             , React.createElement('div', { className: "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 353}}
//               , React.createElement('h2', {
//                 className: `mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
//                   !isExpanded && !isHovered
//                     ? "lg:justify-center"
//                     : "justify-start"
//                 }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 354}}

//                 , isExpanded || isHovered || isMobileOpen ? (
//                   "Others"
//                 ) : (
//                   React.createElement(HorizontaLDots, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 364}} )
//                 )
//               )
//               , renderMenuItems(othersItems, "others")
//             )
//           )
//         )
//         , isExpanded || isHovered || isMobileOpen ? React.createElement(SidebarWidget, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 371}} ) : null
//       )
//     )
//   );
// };

// export default AppSidebar;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import {
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  BoxCubeIcon,
  BoxIconLine,
  FileIcon,
  GroupIcon,
  UserIcon,
  PlugInIcon,
} from "../icons";

import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

const navItems = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Products",
    path: "/products",
  },
  {
    icon: <BoxIconLine />,
    name: "Bulk Variant Images",
    path: "/calendar",
  },
  {
    icon: <FileIcon />,
    name: "Category",
    path: "/categories",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Orders",
    path: "/Orders",
  },
  {
    icon: <GroupIcon />,
    name: "Users",
    path: "/Users",
  },
  {
    icon: <UserIcon />,
    name: "Staff Attendance",
    path: "/alerts",
  },
  {
    icon: <PlugInIcon />,
    name: "Settings",
    path: "/Settings",
  },
];

const othersItems = [
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef({});

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;

    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;

      items.forEach((nav, index) => {
        nav.subItems?.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: menuType, index });
            submenuMatched = true;
          }
        });
      });
    });

    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      const el = subMenuRefs.current[key];

      if (el) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: el.scrollHeight,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index, menuType) => {
    setOpenSubmenu((prev) => {
      if (prev && prev.type === menuType && prev.index === index) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items, menuType) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size ${
                  openSubmenu?.type === menuType &&
                  openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>

              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}

              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path)
                    ? "menu-item-active"
                    : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>

                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}

          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType &&
                  openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}

                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span className="menu-dropdown-badge">new</span>
                        )}
                        {subItem.pro && (
                          <span className="menu-dropdown-badge">pro</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200
      ${
        isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
          ? "w-[290px]"
          : "w-[90px]"
      }
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
              />
            </>
          ) : (
            <img src="/images/logo/logo-icon.svg" alt="Logo" width={32} />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-400">
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>

              {renderMenuItems(navItems, "main")}
            </div>

            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-400">
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>

              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>

        {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
      </div>
    </aside>
  );
};

export default AppSidebar;

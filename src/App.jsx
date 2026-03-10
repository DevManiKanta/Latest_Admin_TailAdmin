// const _jsxFileName = "";
// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import React from "react";
// import SignIn from "./pages/AuthPages/SignIn";
// import SignUp from "./pages/AuthPages/SignUp";
// import NotFound from "./pages/OtherPage/NotFound";
// import UserProfiles from "./pages/UserProfiles";
// import Videos from "./pages/UiElements/Videos";
// import Images from "./pages/UiElements/Images";
// import Alerts from "./pages/UiElements/Alerts";
// import Badges from "./pages/UiElements/Badges";
// import Avatars from "./pages/UiElements/Avatars";
// import Buttons from "./pages/UiElements/Buttons";
// import LineChart from "./pages/Charts/LineChart";
// import BarChart from "./pages/Charts/BarChart";
// import Calendar from "./pages/Calendar";
// import BasicTables from "./pages/Tables/BasicTables";
// import FormElements from "./pages/Forms/FormElements";
// import Blank from "./pages/Blank";
// import AppLayout from "./layout/AppLayout";
// import { ScrollToTop } from "./components/common/ScrollToTop";
// import Home from "./pages/Dashboard/Home";

// export default function App() {
//   return (
//     React.createElement(React.Fragment, null
//       , React.createElement(Router, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
//         , React.createElement(ScrollToTop, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 26}} )
//         , React.createElement(Routes, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
//           /* Dashboard Layout */
//           , React.createElement(Route, { element: React.createElement(AppLayout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
//             , React.createElement(Route, { index: true, path: "/", element: React.createElement(Home, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} )

//             /* Others Page */
//             , React.createElement(Route, { path: "/profile", element: React.createElement(UserProfiles, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
//             , React.createElement(Route, { path: "/calendar", element: React.createElement(Calendar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}} )
//             , React.createElement(Route, { path: "/blank", element: React.createElement(Blank, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} )

//             /* Forms */
//             , React.createElement(Route, { path: "/form-elements", element: React.createElement(FormElements, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}} )

//             /* Tables */
//             , React.createElement(Route, { path: "/basic-tables", element: React.createElement(BasicTables, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}} )

//             /* Ui Elements */
//             , React.createElement(Route, { path: "/alerts", element: React.createElement(Alerts, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 44}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}} )
//             , React.createElement(Route, { path: "/avatars", element: React.createElement(Avatars, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 45}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}} )
//             , React.createElement(Route, { path: "/badge", element: React.createElement(Badges, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} )
//             , React.createElement(Route, { path: "/buttons", element: React.createElement(Buttons, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 47}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}} )
//             , React.createElement(Route, { path: "/images", element: React.createElement(Images, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 48}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}} )
//             , React.createElement(Route, { path: "/videos", element: React.createElement(Videos, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 49}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}} )

//             /* Charts */
//             , React.createElement(Route, { path: "/line-chart", element: React.createElement(LineChart, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} )
//             , React.createElement(Route, { path: "/bar-chart", element: React.createElement(BarChart, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 53}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}} )
//           )

//           /* Auth Layout */
//           , React.createElement(Route, { path: "/signin", element: React.createElement(SignIn, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} )
//           , React.createElement(Route, { path: "/signup", element: React.createElement(SignUp, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )

//           /* Fallback Route */
//           , React.createElement(Route, { path: "*", element: React.createElement(NotFound, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 61}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}} )
//         )
//       )
//     )
//   );
// }



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/Orders";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import Products from "./pages/Products/Products";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import CustomerCombinedReport from "./components/CustomerCombinedReport";

// Settings Components
import SettingsLayout from "./pages/Settings/SettingsLayout";
import Profile from "./pages/Settings/Profile";
import Logo from "./pages/Settings/Logo";
import SocialMedia from "./pages/Settings/SocialMedia";
import PaymentGateway from "./pages/Settings/PaymentGateway";
import VariationSettings from "./pages/Settings/VariationSettings";
import WhatsAppIntegration from "./pages/Settings/WhatsAppIntegration";
import ContactPageSettings from "./pages/Settings/ContactPageSettings";
import CustomerCareSettings from "./pages/Settings/CustomerCareSettings";
import CouponsSettings from "./pages/Settings/CouponsSettings";
import BannerSettings from "./pages/Settings/BannerSettings";
import LandingBannerSettings from "./pages/Settings/LandingBannerSettings";
import ShippingSettings from "./pages/Settings/ShippingSettings";
import ProductSections from "./pages/Settings/ProductSections";
import FooterSections from "./pages/Settings/FooterSections";
import FooterSectionsReorder from "./pages/Settings/FooterSectionsReorder";
import BlogCategories from "./pages/Settings/BlogCategories";
import BlogSettings from "./pages/Settings/BlogSettings";
import PageSettings from "./pages/Settings/PageSettings";
import SettingsIndex from "./pages/Settings/index";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/categories" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/Orders" element={<BasicTables />} />

            {/* Users */}
            <Route path="/Users" element={<CustomerCombinedReport />} />

            {/* UI Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/bar-chart" element={<BarChart />} />

            {/* Settings */}
            <Route element={<SettingsLayout />}>
              <Route path="/settings" element={<SettingsIndex />} />
              <Route path="/Settings" element={<SettingsIndex />} />
              <Route path="/settings/profile" element={<Profile />} />
              <Route path="/settings/logo" element={<Logo />} />
              <Route path="/settings/social-media" element={<SocialMedia />} />
              <Route path="/settings/payment-gateway" element={<PaymentGateway />} />
              <Route path="/settings/variation-settings" element={<VariationSettings />} />
              <Route path="/settings/whatsapp-integration" element={<WhatsAppIntegration />} />
              <Route path="/settings/contact-page" element={<ContactPageSettings />} />
              <Route path="/settings/customer-care-settings" element={<CustomerCareSettings />} />
              <Route path="/settings/coupons-settings" element={<CouponsSettings />} />
              <Route path="/settings/banner-settings" element={<BannerSettings />} />
              <Route path="/settings/landing-banner-settings" element={<LandingBannerSettings />} />
              <Route path="/settings/shipping-settings" element={<ShippingSettings />} />
              <Route path="/settings/product-sections" element={<ProductSections />} />
              <Route path="/settings/footer-sections" element={<FooterSections />} />
              <Route path="/settings/footer-sections/reorder" element={<FooterSectionsReorder />} />
              <Route path="/settings/blog-categories" element={<BlogCategories />} />
              <Route path="/settings/blogs" element={<BlogSettings />} />
              <Route path="/settings/pages" element={<PageSettings />} />
            </Route>
          </Route>

          {/* Auth Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
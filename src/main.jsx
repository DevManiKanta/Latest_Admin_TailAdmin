import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import App from "./App.jsx";
import { AppWrapper } from "./components/common/PageMeta.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AppSettingsProvider } from "./context/AppSettingsContext.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx";
import { LogoSettingsProvider } from "./context/LogoSettingsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppSettingsProvider>
      <ThemeProvider>
        <ProfileProvider>
          <LogoSettingsProvider>
            <AppWrapper>
              <Toaster position="top-right" />
              <App />
            </AppWrapper>
          </LogoSettingsProvider>
        </ProfileProvider>
      </ThemeProvider>
    </AppSettingsProvider>
  </StrictMode>
);

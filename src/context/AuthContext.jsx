import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import API from "../utils/apiInstance";

const AuthContext = createContext(undefined);

const TOKEN_KEY = "token";
const USER_KEY = "admin_user";

const getStoredUser = () => {
  const raw = localStorage.getItem(USER_KEY) || localStorage.getItem("user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const extractToken = (payload) => {
  if (!payload || typeof payload !== "object") return "";
  return (
    payload.token ||
    payload.access_token ||
    payload.accessToken ||
    payload.data?.token ||
    payload.data?.access_token ||
    payload.data?.accessToken ||
    payload.auth?.token ||
    ""
  );
};

const extractUser = (payload) => {
  if (!payload || typeof payload !== "object") return null;
  return (
    payload.user ||
    payload.admin ||
    payload.data?.user ||
    payload.data?.admin ||
    null
  );
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [user, setUser] = useState(() => getStoredUser());
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = useCallback(async (email, password) => {
    setIsLoggingIn(true);
    try {
      // Static credentials for superadmin testing
      const testEmail = "superadmin@gmail.com";
      const testPassword = "123123";

      // Check if it's superadmin - use static credentials
      if (
        email.trim().toLowerCase() === testEmail.toLowerCase() &&
        password === testPassword
      ) {
        // Mock successful login response for superadmin
        const mockUser = {
          id: 1,
          email: testEmail,
          name: "Super Admin",
          role: "superadmin",
        };
        const mockToken = "test_token_superadmin_" + Date.now();

        setToken(mockToken);
        localStorage.setItem(TOKEN_KEY, mockToken);

        setUser(mockUser);
        localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

        return { token: mockToken, user: mockUser, raw: { token: mockToken, user: mockUser } };
      }

      // For all other users, use API
      const res = await API.post("/auth/admin-login", {
        username: email,
        email,
        password,
      });
      const payload = res?.data ?? {};
      const nextToken = extractToken(payload);
      const nextUser = extractUser(payload);

      if (!nextToken) {
        const error = new Error("Login succeeded but no auth token was returned.");
        error.code = "NO_TOKEN";
        throw error;
      }

      setToken(nextToken);
      localStorage.setItem(TOKEN_KEY, nextToken);

      if (nextUser) {
        setUser(nextUser);
        localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
      } else {
        setUser(null);
        localStorage.removeItem(USER_KEY);
      }

      return { token: nextToken, user: nextUser, raw: payload };
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken("");
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }, []);

  const isSuperAdmin = user?.email?.toLowerCase() === "superadmin@gmail.com";

  const value = useMemo(
    () => ({
      token,
      user,
      isLoggingIn,
      isAuthenticated: Boolean(token),
      isSuperAdmin,
      login,
      logout,
    }),
    [token, user, isLoggingIn, login, logout, isSuperAdmin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

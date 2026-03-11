import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { useAuth } from "../../context/AuthContext";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState("");

  const { login, isAuthenticated, isLoggingIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = useMemo(() => {
    const from = location.state?.from?.pathname;
    return from || "/";
  }, [location.state]);

  useEffect(() => {
    const hasRedirectTarget = Boolean(location.state?.from);
    if (isAuthenticated && hasRedirectTarget) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate, redirectTo]);

  const onChangeField = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (formError) {
      setFormError("");
    }
  };

  const validate = () => {
    const nextErrors = { email: "", password: "" };
    const email = formState.email.trim();
    const password = formState.password;

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    }

    setFieldErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  };

  const normalizeErrorMessage = (error) => {
    if (!error) return "Unable to sign in. Please try again.";
    if (typeof error === "string") return error;

    if (error.code === "ECONNABORTED") {
      return "The request timed out. Please try again.";
    }

    const status = error.response?.status;
    const data = error.response?.data;

    if (status === 401) {
      return "Invalid email or password.";
    }
    if (status === 403) {
      return "You do not have access to this admin panel.";
    }

    if (typeof data === "string" && data.trim()) {
      return data;
    }

    const message =
      (typeof data?.errors === "string" && data.errors) ||
      data?.message ||
      data?.error ||
      data?.detail ||
      error.message;

    if (message) return message;

    return "Unable to sign in. Please try again.";
  };

  const applyFieldErrors = (error) => {
    const data = error?.response?.data;
    const errors = data?.errors;
    if (!errors || typeof errors !== "object" || Array.isArray(errors)) {
      if (typeof errors === "string") {
        if (errors.toLowerCase().includes("username")) {
          setFieldErrors((prev) => ({
            ...prev,
            email: errors,
          }));
        }
      }
      return;
    }

    setFieldErrors((prev) => ({
      ...prev,
      email: errors.email
        ? String(errors.email)
        : errors.username
        ? String(errors.username)
        : prev.email,
      password: errors.password ? String(errors.password) : prev.password,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    if (!validate()) return;

    try {
      await login(formState.email.trim(), formState.password);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      applyFieldErrors(error);
      setFormError(normalizeErrorMessage(error));
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div> */}

      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            {/* <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L15.9087 16.6126C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                  fill="#4285F4"
                />
              </svg>
              Sign in with Google
            </button> */}

            {/* <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                className="fill-current"
              >
                <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875Z" />
              </svg>
              Sign in with X
            </button> */}
          </div>

          {/* Divider */}
          {/* <div className="relative py-3 sm:py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                Or
              </span>
            </div>
          </div> */}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              {formError && (
                <div className="rounded-lg border border-error-200 bg-error-50 px-4 py-3 text-sm text-error-700 dark:border-error-500/40 dark:bg-error-500/10 dark:text-error-200">
                  {formError}
                </div>
              )}

              <div>
                <Label>
                  Email <span className="text-error-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@gmail.com"
                  value={formState.email}
                  onChange={onChangeField}
                  error={Boolean(fieldErrors.email)}
                  hint={fieldErrors.email}
                  disabled={isLoggingIn}
                />
              </div>

              <div>
                <Label>
                  Password <span className="text-error-500">*</span>
                </Label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formState.password}
                    onChange={onChangeField}
                    error={Boolean(fieldErrors.password)}
                    hint={fieldErrors.password}
                    disabled={isLoggingIn}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 cursor-pointer right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                    ) : (
                      <EyeCloseIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                    )}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center gap-3">
                  <Checkbox
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="text-gray-700 text-theme-sm dark:text-gray-400">
                    Keep me logged in
                  </span>
                </div> */}

                {/* <Link
                  to="/reset-password"
                  className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Forgot password?
                </Link> */}
              </div>

              <Button className="w-full" size="sm" disabled={isLoggingIn}>
                {isLoggingIn ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          {/* <div className="mt-5">
            <p className="text-sm text-center text-gray-700 dark:text-gray-400 sm:text-start">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Sign Up
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

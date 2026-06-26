"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SocialLogin } from "./SocialLogin";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 px-6 py-7 flex flex-col gap-5">
      <div className="bg-[#e8f5f3] rounded-lg px-4 py-3 text-sm text-[#00796b] font-semibold flex items-center gap-2">
        <span>🤖</span>
        <span>Are you human? Please solve the captcha below.</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-bold text-ink">
          Username or Email Address
        </label>
        <input
          type="text"
          placeholder="Enter your username or email"
          className="w-full h-11 border border-line rounded-lg px-4 text-sm outline-none focus:border-teal transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-bold text-ink">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full h-11 border border-line rounded-lg px-4 pr-11 text-sm outline-none focus:border-teal transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <div
            onClick={() => setRememberMe((v) => !v)}
            className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
              rememberMe ? "bg-teal border-teal" : "border-line"
            }`}
          >
            {rememberMe && (
              <svg viewBox="0 0 12 10" width="10" height="10" fill="none">
                <path
                  d="M1 5l3.5 3.5L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="text-[13px] font-semibold text-ink">
            Remember Me
          </span>
        </label>
        <a
          href="#lostpasswordform"
          className="text-[13px] font-semibold text-teal hover:underline"
        >
          Lost your password?
        </a>
      </div>

      <button
        className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-3.25 rounded-lg text-sm transition-colors"
        style={{ letterSpacing: "0.03em" }}
      >
        Log In
      </button>

      <SocialLogin text="Or login with" />

      <p className="text-center text-[13px] text-ink-soft">
        Don't have an account?{" "}
        <button
          onClick={onSwitchToRegister}
          className="text-teal font-bold hover:underline"
        >
          Register here
        </button>
      </p>
    </div>
  );
};

"use client";

import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  return (
    <div className="flex-1 px-6 py-7 flex flex-col gap-5">
      <div className="bg-[#e8f5f3] rounded-lg px-4 py-3 text-sm text-[#00796b] font-semibold flex items-center gap-2">
        <span>👋</span>
        <span>Create your KidXtore account — it's free!</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-bold text-ink">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full h-11 border border-line rounded-lg px-4 text-sm outline-none focus:border-teal transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-bold text-ink">Username</label>
        <input
          type="text"
          placeholder="Choose a username"
          className="w-full h-11 border border-line rounded-lg px-4 text-sm outline-none focus:border-teal transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-bold text-ink">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-11 border border-line rounded-lg px-4 text-sm outline-none focus:border-teal transition-colors"
        />
      </div>

      <PasswordInput label="Password" placeholder="Create a password" />

      <PasswordInput
        label="Confirm Password"
        placeholder="Repeat your password"
      />

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          className="mt-0.5 accent-teal w-4 h-4 shrink-0"
        />
        <span className="text-[13px] text-ink-soft leading-snug">
          I agree to the{" "}
          <a href="#" className="text-teal font-semibold hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-teal font-semibold hover:underline">
            Privacy Policy
          </a>
        </span>
      </label>

      <button
        className="w-full bg-coral hover:bg-(--coral-dark,#e64a19) text-white font-bold py-3.25 rounded-lg text-sm transition-colors"
        style={{ letterSpacing: "0.03em" }}
      >
        Create Account
      </button>

      <SocialLogin text="Or register with" />

      <p className="text-center text-[13px] text-ink-soft">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-teal font-bold hover:underline"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
};

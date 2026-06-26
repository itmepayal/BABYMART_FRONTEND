"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AuthTabs } from "@/components/layout/header/auth/AuthTabs";
import { LoginForm } from "@/components/layout/header/auth/LoginForm";
import { RegisterForm } from "@/components/layout/header/auth/RegisterForm";

interface AuthDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDrawer = ({ open, onClose }: AuthDrawerProps) => {
  const [authTab, setAuthTab] = useState<"login" | "register">("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-300">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className="absolute right-0 top-0 h-full w-full max-w-110 bg-white shadow-2xl flex flex-col overflow-y-auto"
        style={{ animation: "slideInRight 0.28s cubic-bezier(.4,0,.2,1)" }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line shrink-0">
          <AuthTabs activeTab={authTab} onTabChange={setAuthTab} />
          <button
            onClick={onClose}
            className="text-ink-soft hover:text-ink p-1 transition-colors shrink-0"
            aria-label="Close"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {authTab === "login" && (
          <LoginForm onSwitchToRegister={() => setAuthTab("register")} />
        )}

        {authTab === "register" && (
          <RegisterForm onSwitchToLogin={() => setAuthTab("login")} />
        )}
      </div>
    </div>
  );
};

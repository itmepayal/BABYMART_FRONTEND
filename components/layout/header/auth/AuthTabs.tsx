interface AuthTabsProps {
  activeTab: "login" | "register";
  onTabChange: (tab: "login" | "register") => void;
}

export const AuthTabs = ({ activeTab, onTabChange }: AuthTabsProps) => {
  return (
    <div className="flex flex-1 gap-1 bg-[#f4f4f4] rounded-lg p-1 mr-3">
      <button
        onClick={() => onTabChange("login")}
        className={`flex-1 text-center px-5 py-2 rounded-md text-sm font-bold transition-all ${
          activeTab === "login"
            ? "bg-white shadow text-teal"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        Sign In
      </button>

      <button
        onClick={() => onTabChange("register")}
        className={`flex-1 text-center px-5 py-2 rounded-md text-sm font-bold transition-all ${
          activeTab === "register"
            ? "bg-white shadow text-teal"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        Register
      </button>
    </div>
  );
};

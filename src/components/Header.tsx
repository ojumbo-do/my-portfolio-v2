import MobileHeader from "@/mobile/components/MobileHeader";
import CtaButton from "./CtaButton";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

function Header() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light";
    setSelectedTheme(theme);

    if (theme) {
      document.body.classList.add(theme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle("dark", newTheme === "dark");
    document.body.classList.toggle("light", newTheme === "light");
  };

  return (
    <div className="flex justify-between items-center bg-primary relative bg-opacity-10 w-full py-3 md:px-10 px-3">
      <Logo />
      <NavBar />
      <CtaButton
        selectedTheme={selectedTheme}
        handleThemeToggle={handleThemeToggle}
      />

      <button
        type="button"
        className="md:hidden text-textPrimary"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <HiOutlineBars3 size={30} />
      </button>

      {isMobileMenuOpen && (
        <MobileHeader
          selectedTheme={selectedTheme}
          handleThemeToggle={handleThemeToggle}
        />
      )}
    </div>
  );
}

export default Header;

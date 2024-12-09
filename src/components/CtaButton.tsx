import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { HiMoon, HiSun } from "react-icons/hi2";

function CtaButton() {
  const [selectedTheme, setSelectedTheme] = useState("");

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
    <div className="flex flex-row items-center gap-10">
      <Link href="#contact">Contact</Link>
      <Button
        handleClick={handleThemeToggle}
        extraStyles="items-center flex flex-row gap-3 rounded-full border px-2 py-1 capitalize border-secondary text-secondary"
      >
        {selectedTheme === "light" ? "Dark" : "Light"}{" "}
        {selectedTheme === "light" ? <HiMoon /> : <HiSun />}
      </Button>
    </div>
  );
}

export default CtaButton;

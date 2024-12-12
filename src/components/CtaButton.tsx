import Link from "next/link";
import Button from "./Button";
import { HiMoon, HiSun } from "react-icons/hi2";

type CtaButtonProps = {
  selectedTheme: string;
  handleThemeToggle: () => void;
};

function CtaButton({
  selectedTheme,
  handleThemeToggle,
}: Readonly<CtaButtonProps>) {
  return (
    <div className="md:flex flex-row items-center gap-10 hidden">
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

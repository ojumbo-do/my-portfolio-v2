import Button from "@/components/Button";
import Link from "next/link";
import { HiMoon, HiSun } from "react-icons/hi2";

type MobileCtaSectionProps = {
  selectedTheme: string;
  handleThemeToggle: () => void;
};
function MobileCtaSection({
  selectedTheme,
  handleThemeToggle,
}: Readonly<MobileCtaSectionProps>) {
  return (
    <div className="flex flex-col gap-1">
      <Link href="#contact" className="py-1">
        Contact
      </Link>
      <Button
        handleClick={handleThemeToggle}
        extraStyles="items-center flex flex-row text-center items-center gap-3 rounded-full border px-2 py-1 capitalize border-secondary text-secondary"
      >
        {selectedTheme === "light" ? "Dark" : "Light"}{" "}
        {selectedTheme === "light" ? <HiMoon /> : <HiSun />}
      </Button>
    </div>
  );
}

export default MobileCtaSection;

import MobileCtaSection from "./MobileCtaSection";
import MobileNav from "./MobileNav";

type MobileHeaderProps = {
  selectedTheme: string;
  handleThemeToggle: () => void;
};

function MobileHeader({
  selectedTheme,
  handleThemeToggle,
}: Readonly<MobileHeaderProps>) {
  return (
    <div className="flex flex-col border border-backgroundDark p-4 md:hidden right-0 absolute rounded-md shadow-lg min-w-40 bg-primary top-12 z-40">
      <MobileNav />
      <MobileCtaSection
        selectedTheme={selectedTheme}
        handleThemeToggle={handleThemeToggle}
      />
    </div>
  );
}

export default MobileHeader;

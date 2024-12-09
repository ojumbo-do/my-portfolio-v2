import CtaButton from "./CtaButton";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="flex justify-between items-center w-full py-3 px-10">
      <Logo />
      <NavBar />
      <CtaButton />
    </div>
  );
}

export default Header;

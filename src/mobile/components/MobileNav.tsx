import Link from "next/link";

function MobileNav() {
  return (
    <nav className="flex flex-col text-start capitalize">
      <Link
        className="text-sm capitalize py-1 hover:text-secondary hover:font-bold"
        href={"#home"}
      >
        Home
      </Link>
      <Link
        className="text-sm capitalize py-1 hover:text-secondary hover:font-bold"
        href={"#about-me"}
      >
        About Me
      </Link>
      <Link
        className="text-sm capitalize py-1 hover:text-secondary hover:font-bold"
        href={"#services"}
      >
        services
      </Link>
      <Link
        className="text-sm capitalize py-1 hover:text-secondary hover:font-bold"
        href={"#my-work"}
      >
        My Work
      </Link>
    </nav>
  );
}

export default MobileNav;

import Link from "next/link";

function NavBar() {
  return (
    <nav className="md:flex hidden flex-row items-center capitalize">
      <Link
        className="text-sm capitalize px-4 hover:text-secondary hover:font-bold"
        href={"#home"}
      >
        Home
      </Link>
      <Link
        className="text-sm capitalize px-4 hover:text-secondary hover:font-bold"
        href={"#about-me"}
      >
        About Me
      </Link>
      <Link
        className="text-sm capitalize px-4 hover:text-secondary hover:font-bold"
        href={"#services"}
      >
        services
      </Link>
      <Link
        className="text-sm capitalize px-4 hover:text-secondary hover:font-bold"
        href={"#my-work"}
      >
        My Work
      </Link>
    </nav>
  );
}

export default NavBar;

import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex flex-row items-center">
      <Link
        className="text-sm px-4 hover:text-secondary hover:font-bold"
        href={"#home"}
      >
        Home
      </Link>
      <Link
        className="text-sm px-4 hover:text-secondary hover:font-bold"
        href={"#about-me"}
      >
        About Me
      </Link>
      <Link
        className="text-sm px-4 hover:text-secondary hover:font-bold"
        href={"#services"}
      >
        services
      </Link>
      <Link
        className="text-sm px-4 hover:text-secondary hover:font-bold"
        href={"#my-work"}
      >
        My Work
      </Link>
    </nav>
  );
}

export default NavBar;

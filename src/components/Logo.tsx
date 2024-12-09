import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"#home"}
      className="flex leading-none hover:scale-105 text-center min-w-16 p-1 rounded-full bg-secondary overflow-hidden items-center justify-center text-tertiary"
    >
      <h1 className="text-3xl font-bold ">&lt;D/&gt;</h1>
    </Link>
  );
}

export default Logo;

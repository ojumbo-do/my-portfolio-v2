import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"#home"}
      className="flex hover:scale-105 text-center md:min-w-32 min-w-20 p-1 rounded-full bg-secondary overflow-hidden items-center justify-center text-tertiary"
    >
      <h1 className="md:text-2xl leading-none text-lg font-bold ">
        &lt;D/&gt;
      </h1>
    </Link>
  );
}

export default Logo;

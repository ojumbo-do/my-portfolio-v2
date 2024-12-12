import Link from "next/link";
import { HiChevronUp } from "react-icons/hi2";

function ScrollTopButton() {
  return (
    <Link
      href={"#home"}
      className="fixed bottom-10 font-bold scroll-smooth right-10 p-4  rounded-full bg-primary text-textPrimary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-textPrimary"
    >
      <HiChevronUp />
    </Link>
  );
}

export default ScrollTopButton;

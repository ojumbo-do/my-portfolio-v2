import Image from "next/image";
import Button from "./Button";
import { HiOutlineArrowLongRight, HiPhoneArrowDownLeft } from "react-icons/hi2";

function HeroSection() {
  return (
    <section
      id="home"
      className="h-[calc(100dvh-70px)] scroll-smooth w-vw gap-10 flex flex-col xl:flex-row shrink"
    >
      <div className="xl:w-1/2 flex justify-center flex-col gap-8 py-10 pl-10">
        <h3 className="font-bold text-secondary text-2xl">Howdy!</h3>
        <h1 className="text-6xl">
          <span>I am Dancun Ojumbo</span> <span>A Software Developer</span>
        </h1>

        <p className="text-xl">
          Hire me today and bring to life your desired online prescense,
          let&apos;s design a masterpiece for you to engage your clients, start
          by clicking the button bellow.
        </p>

        <div className="w-full inline-flex gap-5">
          <Button
            variant="primary-link"
            hrefTo="#contact"
            extraStyles="flex flex-row items-center gap-2 justify-center hover:gap-4"
          >
            Hire Me <HiPhoneArrowDownLeft />
          </Button>
          <Button
            variant="secondary-link"
            hrefTo="#my-work"
            extraStyles="flex flex-row items-center gap-2 justify-center hover:gap-4"
          >
            My Work <HiOutlineArrowLongRight size={24} />
          </Button>
        </div>
      </div>

      <div className="xl:w-auto flex items-center flex-row-reverse justify-end w-full h-full">
        <div className="w-full flex justify-end text-end">
          <Image
            src="/profile.272e8226.jpeg"
            width={500}
            height={500}
            alt="Dancun Ojumbo"
            className="object-cover rounded-3xl -skew-x-6 skew-y-6"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
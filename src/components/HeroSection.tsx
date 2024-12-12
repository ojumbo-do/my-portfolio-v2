import Image from "next/image";
import Button from "./Button";
import { HiOutlineArrowLongRight, HiPhoneArrowDownLeft } from "react-icons/hi2";

function HeroSection() {
  return (
    <section
      id="home"
      className="md:h-[calc(100vh-70px)] scroll-smooth w-vw gap-10 flex flex-col xl:flex-row shrink"
    >
      <div className="xl:w-1/2 flex justify-center flex-col gap-8 md:py-10 py-5 md:pl-10">
        <h3 className="font-bold text-secondary text-2xl">Howdy! I&apos;m</h3>
        <h1 className="text-[clamp(2rem,8vw,4rem)]">
          <span>Dancun Ojumbo</span> <span>A Software Developer</span>
        </h1>

        <p className="text-xl">
          Hire me today and bring to life your desired online prescense,
          let&apos;s design a masterpiece for you to engage your clients with,
          start by clicking the button below.
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

      <div className="xl:w-1/2 flex items-center justify-center px-5 md:px-0  w-full h-full">
        <div className="w-full flex justify-center text-end">
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

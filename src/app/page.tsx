"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyWork from "@/components/MyWork";
import ScrollTopButton from "@/components/ScrollTopButton";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] md:h-dvh">
      <header className="row-start-1 bg-transparent flex gap-6 flex-wrap items-center justify-center">
        <Header />
      </header>
      <main className="row-start-2 relative overflow-y-auto px-5 md:px-10 no-scrollbar scroll-smooth">
        <HeroSection />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Socials />
        <ScrollTopButton />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}

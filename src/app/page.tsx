"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyWork from "@/components/MyWork";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <Header />
      </header>
      <main className="row-start-2">
        <HeroSection />
        <About />
        <Services />
        <MyWork />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}

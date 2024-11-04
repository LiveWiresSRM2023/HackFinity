"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import FAQSection from "@/components/FAQsection";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-1">
      <div className="max-w-7xl w-full pt-1">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Approach />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

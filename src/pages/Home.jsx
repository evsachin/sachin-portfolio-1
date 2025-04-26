import React from "react";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Project"
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ParticlesBackground from "../components/Background";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-0">

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

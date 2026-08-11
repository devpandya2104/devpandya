import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Impact from "@/components/sections/Impact";
import Experience from "@/components/sections/Experience";
import Systems from "@/components/sections/Systems";
import Operations from "@/components/sections/Operations";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Impact />
      <Experience />
      <Systems />
      <Operations />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

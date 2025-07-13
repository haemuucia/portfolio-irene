"use client";
import { useRef } from "react";
import Lanyard from "./Components/Lanyard/Lanyard";
import RotatingText from "./Components/RotatingText/RotatingText";
import AboutMe from "./aboutme/AboutMe";
import Projects from "./projects/ProjectSection";
import Skills from "./skills/Skills";
import Certification from "./certification/Certification";
import Awards from "./awards/Awards";
import Footer from "./footer/Footer";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export default function Home() {
  const projectRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f7ff] dark:bg-[#0E0A2A] text-black dark:text-white font-outfit transition-colors duration-500 scrollbar-hide">
      <main className="container mx-auto px-4 sm:px-6 pt-5 pb-16">
      <section
        id="hero"
      className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">
  <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center mt-6 sm:mt-0 mb-4 sm:mb-6 lg:mb-0">
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Lanyard />
    </div>
  </div>

  <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col gap-4 sm:gap-6 justify-center text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
      Hello, I'm{" "}
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent hover:animate-pulse transition-all duration-300">
        Irene
      </span>
    </h1>

    <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 items-center flex-wrap">
      <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
        I am ready to be a
      </span>
      <RotatingText
        texts={["AI Engineer", "Web Developer", "Software Engineer", "Web Designer"]}
        mainClassName="px-3 py-1 rounded-full bg-[#FDCBFF] text-black text-base sm:text-lg font-semibold shadow-md"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>

    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed mx-auto lg:mx-0">
      Fusing AI and web technology to craft smart and impactful solutions that think and resonate deeply.
    </p>

    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 text-xl sm:text-2xl">
      <a href="https://github.com/haemuucia" target="_blank" className="hover:text-[#4078c0] dark:hover:text-[#58a6ff]" title="GitHub"><SiGithub /></a>
      <a href="https://www.linkedin.com/in/veronicairene" target="_blank" className="hover:text-[#0a66c2]" title="LinkedIn"><SiLinkedin /></a>
      <a href="https://instagram.com/verrrene" target="_blank" className="hover:text-[#E1306C] dark:hover:text-[#F77737]" title="Instagram"><SiInstagram /></a>
      <a href="mailto:veronicairene315@gmail.com" target="_blank" className="hover:text-[#0a66c2]" title="Email"><FiMail /></a>
    </div>

    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-2">
      <button
        onClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth" })}
        className="bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold px-5 sm:px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        View Projects
      </button>
      <a
        href="/assets/VeronicaIrene_resume.pdf"
        download="veronica_irene_cv.pdf"
        className="border border-cyan-300 text-cyan-400 font-semibold px-5 sm:px-6 py-2 rounded-xl hover:bg-cyan-300 hover:text-black transition duration-300">
        Download CV
      </a>
    </div>
  </div>
</section>
      </main>

      <AboutMe />
      <Projects ref={projectRef} />
      <Skills />
      <Certification />
      <Awards />
      <Footer />
    </div>
  );
}

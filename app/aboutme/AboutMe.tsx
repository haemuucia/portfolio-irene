"use client";

import TiltedCard from "../Components/TiltedCard/TiltedCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-matcha-500 to-strawberry-500 hover:from-strawberry-300 hover:to-matcha-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full md:w-1/2">
            <TiltedCard
              className="relative rounded-2xl p-1 bg-gradient-to-br from-matcha-300 via-strawberry-300 to-strawberry-500 shadow-2xl hover:shadow-glow transition-all duration-500 w-70 h-70"
              scaleOnHover={1.03}
              perspective={800}
              imageSrc="/assets/irene_cropped1.png">
              <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden p-4">
                <Image
                  src="/assets/irene_cropped1.png" 
                  alt="Veronica Irene Tanumihadja"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </TiltedCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black dark:text-white text-lg leading-relaxed w-full md:w-1/2 max-w-xl"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-matcha-500 via-strawberry-300 to-strawberry-500 text-transparent bg-clip-text">
              Hey there!
            </h3>

            <p className="mb-4">
              I'm{" "}
              <span className="font-semibold dark:text-white text-black">
                Veronica Irene Tanumihadja
              </span>
              , and you can call me Irene. 
              My curiosity about technology began with a simple question:
              <span className="italic"> "How do applications actually work?"</span>
              That question eventually led me to study Informatics and specialize in Artificial Intelligence at President University.
              Along the way, I realized that what excites me isn't just building software, but also building systems that can learn from data and help people make better decisions. I've worked on projects ranging from recommendation engines and Generative AI (RAG) systems to computer vision, full-stack applications, and data engineering pipelines in enterprise environments.
              I enjoy connecting AI with software engineering, transforming research ideas into production-ready solutions, and continuously exploring better ways to design scalable, reliable, and practical systems. I'm currently pursuing opportunities as an AI Engineer or Data Scientist, where I can keep learning while creating technology that makes a real impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

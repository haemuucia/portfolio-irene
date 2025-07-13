"use client";

import TiltedCard from "../Components/TiltedCard/TiltedCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0E0A2A] transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-400 hover:to-yellow-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full md:w-1/2">
            <TiltedCard
              className="relative rounded-2xl p-1 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 shadow-2xl hover:shadow-glow transition-all duration-500 w-70 h-70"
              scaleOnHover={1.03}
              perspective={800}
              imageSrc="/assets/irene_cropped1.png">
              <div className="bg-white dark:bg-[#1c1c1c] rounded-2xl overflow-hidden p-4">
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
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Hey there!
            </h3>

            <p className="mb-4">
              I'm{" "}
              <span className="font-semibold dark:text-white text-black">
                Veronica Irene Tanumihadja
              </span>
              , and you can call me Irene. 
              My curiosity about technology started with a question: How do apps work?
              As I began studying Informatics at President University, where I decided to concentrate on Artificial Intelligence, 
              that curiosity grew. In the process, I've been developing several web applications, experimenting with several AI models, 
              and learning how to arrange data in clear and understand manner. Whether, it's a predictive data pipeline or an interactive interface. 
              I love taking an idea and turning it into something real, learning and improving with every bit of code I write.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-yellow-300 hover:to-pink-400 bg-clip-text text-transparent transition-all duration-500">
            Education Journey
          </h2>

          <div className="relative flex flex-col gap-32 items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

            <div className="relative w-full flex justify-start">
              <div className="w-full md:w-1/2 pr-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl transition-all duration-500 hover:border-transparent hover:bg-gradient-to-tr hover:from-blue-400 hover:to-cyan-400"
                >
                  <div className="flex flex-col items-end text-right text-black dark:text-white">
                    <div className="w-8 h-8 mb-2 rounded-full bg-blue-300 dark:bg-blue-500 text-white flex items-center justify-center text-lg shadow-md z-10">
                      🎓
                    </div>
                   <h4 className="text-xl font-semibold">
                      President University
                    </h4>
                    <p className="text-sm text-white/70">
                      Informatics • 2023 – Present
                    </p>
                    <p className="mt-2 text-base text-white/90 max-w-sm">
                      ○ GPA = 3.97 / 4.00 <br/>
                      ○ Concentration: Artificial Intelligence <br/>
                      ○ Relevant Courses: Web & Server-Side Programming, Wireless & Mobile Programming, Software Engineering, 
                      Computer Vision, Natural Language Processing, Understanding, & Generation, Image
                      Processing and Recognition, Data Structures & Algorithms
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="relative w-full flex justify-end">
              <div className="w-full md:w-1/2 pl-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl transition-all duration-500 hover:border-transparent hover:bg-gradient-to-tr hover:from-pink-400 hover:to-rose-400"
                >
                  <div className="flex flex-col items-start text-left text-black dark:text-white">
                    <div className="w-8 h-8 mb-2 rounded-full bg-pink-300 dark:bg-pink-500 text-white flex items-center justify-center text-lg shadow-md z-10">
                      🏫
                    </div>
                    <h4 className="text-xl font-semibold">
                      Saint Mary 1 Senior High School Bandung
                    </h4>
                    <p className="text-sm text-white/70">
                      Natural Science • 2020 - 2023
                    </p>
                    <p className="mt-2 text-base text-white/90 max-w-sm">
                      ○ Average Score = 86.48 / 100
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

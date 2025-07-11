"use client";

import { useState } from "react";
import Image from "next/image";

const certifications = [
  { src: "/assets/certificate/genai.png", link: "https://www.cloudskillsboost.google/public_profiles/a35ffde6-ad62-4335-ba48-5a1612d2ab87/badges/14478798" },
  { src: "/assets/certificate/llm.png", link: "https://www.cloudskillsboost.google/public_profiles/a35ffde6-ad62-4335-ba48-5a1612d2ab87/badges/14471965" },
  { src: "/assets/certificate/ibmgranite.png", link: "https://drive.google.com/your-ibm-cert-link" },
  { src: "/assets/certificate/codingprogramming.jpeg", link: "https://drive.google.com/file/d/1Pu-QYVkyYaHHo31O2AaZZALylfQ5JLNA/view" },
  { src: "/assets/certificate/iot1.jpeg", link: "https://drive.google.com/file/d/1krFTk97I9VEV5W9wBQfT3rWN5O7OvKzY/view" },
  { src: "/assets/certificate/aisic.jpeg", link: "https://drive.google.com/file/d/1FdsQtCRTMW4Uzm41TJjm0tCHFBg8RmIg/view" },
  { src: "/assets/certificate/dasaraidicoding_page-0001.jpg", link: "https://www.dicoding.com/certificates/N9ZOM0KN8PG5" },
  { src: "/assets/certificate/dicodingsql_page-0001.jpg", link: "https://www.dicoding.com/certificates/1RXYLD5M9PVM" },
  { src: "/assets/certificate/visualisasidatadicoding_page-0001.jpg", link: "https://www.dicoding.com/certificates/2VX3R5Q2QZYQ" },
  { src: "/assets/certificate/pythondicoding_page-0001.jpg", link: "https://www.dicoding.com/certificates/JLX17V3M5X72" },
  { src: "/assets/certificate/genai.jpg", link: "https://drive.google.com/file/d/19y8YbPPS0je2ahi8qNFruIg6iFgPvEh2/view" },
  { src: "/assets/certificate/Completion Certificate for C++ Dasar (1)_page-0001.jpg", link: "https://skilvul.com/courses/c-plus-plus-dasar/student/clrm0n7ws07dh01s4bvkrc9q6/" },
  { src: "/assets/certificate/Dunia Coding_Laravel_page-0001.jpg", link: "https://drive.google.com/file/d/1JPph_RI_id2Aq-0Rfw9KRnJaCd6fI_4N/view" },
  { src: "/assets/certificate/SkilvulDasar.jpg", link: "https://skilvul.com/courses/python-dasar/student/clrm0n7ws07dh01s4bvkrc9q6/" },
  { src: "/assets/certificate/SkilvulDSA.jpg", link: "https://skilvul.com/courses/algorithm-and-data-structures-with-python/student/clrm0n7ws07dh01s4bvkrc9q6/" },
  { src: "/assets/certificate/SkilvulLanjutan.jpg", link: "https://skilvul.com/courses/python-lanjutan/student/clrm0n7ws07dh01s4bvkrc9q6/" },
];

export default function Certification() {
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section
      id="certification"
      className="py-20 bg-white dark:bg-[#0E0A2A] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-400 hover:to-yellow-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {visibleCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl z-0 block"
            >
              <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-border blur-sm z-0" />
              <div className="relative z-10 overflow-hidden rounded-xl shadow-md bg-white dark:bg-[#1A1A3B] border border-gray-200 dark:border-gray-700">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={cert.src}
                    alt={`Certification ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}

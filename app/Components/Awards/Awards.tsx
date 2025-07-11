"use client";

import Image from "next/image";

const awards = [
  {
    image: "/assets/certificate/awardapac.jpeg",
    title: "Google APAC Solution Challenge",
    placement: "Participants",
    description:
      "Competition that invites university students across the Asia-Pacific region to develop innovative tech solutions using Google technologies to address one or more of the United Nations’ 17 Sustainable Development Goals (SDGs).",
    scale: "International",
    link: "https://certificate.hack2skill.com/user/apacparticipation/2025H2S03ASC-P00801",
  },
  {
    image: "/assets/certificate/awardsic.jpeg",
    title: "Samsung Innovation Campus Batch 5",
    placement: "Semifinalist (Top 40 University Team)",
    description: "Samsung Innovation Campus Batch 5 is a six-month program that trains high school and university students in AI, IoT, and coding. Out of 7,590 applicants, over 4,000 were selected to join (1st stage). Participants worked in teams to build tech-based solutions, joined career development sessions, and competed in a national showcase judged by industry experts.",
    scale: "National",
    link: "https://drive.google.com/file/d/11xheXxfhFYty7b61GoupxV7t1Vm3ZY6W/view?usp=drive_link",
  },
  {
    image: "/assets/certificate/gemastik.png",
    title: "GEMASTIK 2024 Smart Device, Embedded System, and IoT Division",
    placement: "Participants",
    description: "GEMASTIK (Pagelaran Mahasiswa Nasional Bidang TIK) is a national tech competition in Indonesia organized by the Ministry of Education. It promotes student innovation and excellence in fields like smart devices, AI, cybersecurity, IoT, and more.",
    scale: "National",
    link: "https://drive.google.com/file/d/1AmdU7KafIzQ7EM0nwbyMmjA0MInpoI_B/view",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="py-20 bg-white dark:bg-[#0E0A2A] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-400 hover:to-yellow-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
          Awards & Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <a
              key={index}
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl z-0 block"
            >
              <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-border blur-sm z-0" />
              <div className="relative z-10 overflow-hidden rounded-xl bg-white dark:bg-[#1A1A3B] border border-gray-200 dark:border-gray-700 shadow-md transform hover:scale-[1.03] transition duration-300">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={award.image}
                    alt={award.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {award.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        award.scale === "International"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300"
                          : award.scale === "National"
                          ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300"
                      }`}
                    >
                      {award.scale}
                    </span>
                  </div>
                  {award.placement && (
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                      {award.placement}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {award.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

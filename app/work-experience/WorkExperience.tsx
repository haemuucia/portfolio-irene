"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  workExperiences,
  type WorkExperience,
  type WorkExperienceType,
} from "./work-experience-data";

const typeBadgeStyles: Record<WorkExperienceType, string> = {
  "Full-time":
    "bg-matcha-50 text-matcha-700 dark:bg-matcha-700/30 dark:text-matcha-300",
  Internship:
    "bg-strawberry-100 text-strawberry-700 dark:bg-strawberry-700/30 dark:text-strawberry-300",
  Freelance:
    "bg-strawberry-100/60 text-strawberry-700 dark:bg-strawberry-700/20 dark:text-strawberry-300",
  "Part-time":
    "bg-matcha-50/80 text-matcha-700 dark:bg-matcha-700/20 dark:text-matcha-300",
};

function ExperienceCard({
  experience,
  featured = false,
}: {
  experience: WorkExperience;
  featured?: boolean;
}) {
  const [expanded, setExpanded] = useState(featured);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`group relative rounded-2xl border border-matcha-300/30 bg-white/80 dark:bg-dark-card/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-strawberry-300/50 hover:shadow-md ${
        featured ? "p-7 md:p-8" : "p-5 cursor-pointer"
      }`}
      onClick={featured ? undefined : () => setExpanded((prev) => !prev)}
    >
      <div
        className={`flex ${featured ? "flex-col md:flex-row md:items-start md:justify-between gap-4" : "flex-col gap-3"}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`shrink-0 rounded-xl overflow-hidden bg-white dark:bg-white/10 border border-matcha-300/20 flex items-center justify-center shadow-sm ${
              featured ? "w-14 h-14" : "w-11 h-11"
            }`}
          >
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={featured ? 56 : 44}
                height={featured ? 56 : 44}
                className="object-contain p-1.5 w-full h-full"
              />
            ) : (
              <span
                className={`font-bold text-white bg-gradient-to-br from-matcha-300 to-strawberry-300 w-full h-full flex items-center justify-center ${
                  featured ? "text-xl" : "text-base"
                }`}
              >
                {experience.company.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <h3
              className={`font-bold text-gray-800 dark:text-gray-100 ${featured ? "text-xl md:text-2xl" : "text-lg"}`}
            >
              {experience.role}
            </h3>
            <p className="text-matcha-500 dark:text-matcha-300 font-medium mt-0.5">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {experience.period}
              </span>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeBadgeStyles[experience.type]}`}
              >
                {experience.type}
              </span>
            </div>
          </div>
        </div>

        {!featured && (
          <span className="text-xs text-gray-400 dark:text-gray-500 self-end">
            {expanded ? "▲ collapse" : "▼ expand"}
          </span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {(featured || expanded) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul
              className={`mt-5 space-y-2 text-gray-600 dark:text-gray-300 ${featured ? "text-base" : "text-sm"}`}
            >
              {experience.highlights.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-strawberry-500 shrink-0 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {experience.tech && experience.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-matcha-50 text-matcha-700 dark:bg-matcha-700/25 dark:text-matcha-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WorkExperienceSection() {
  const featured = workExperiences.find((e) => e.featured);
  const others = workExperiences.filter((e) => !e.featured);

  return (
    <section
      id="experience"
      className="py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-matcha-500 to-strawberry-500 hover:from-strawberry-300 hover:to-matcha-300 bg-clip-text text-transparent tracking-wide transition-all duration-500">
          Work Experience
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-md mx-auto text-sm">
          Roles, internships, and projects where I turned ideas into real work.
        </p>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {featured && <ExperienceCard experience={featured} featured />}

          {others.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((exp) => (
                <ExperienceCard key={exp.company + exp.period} experience={exp} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

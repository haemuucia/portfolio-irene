"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "./education-data";
import { activities, type ActivityType } from "./activities-data";

const typeBadgeStyles: Record<ActivityType, string> = {
  Organization:
    "bg-matcha-50 text-matcha-700 dark:bg-matcha-700/30 dark:text-matcha-300",
  Club:
    "bg-strawberry-100 text-strawberry-700 dark:bg-strawberry-700/30 dark:text-strawberry-300",
  Volunteer:
    "bg-strawberry-100/60 text-strawberry-700 dark:bg-strawberry-700/20 dark:text-strawberry-300",
  Community:
    "bg-matcha-50/80 text-matcha-700 dark:bg-matcha-700/20 dark:text-matcha-300",
};

const cardGradients = [
  "from-matcha-300 to-matcha-500",
  "from-strawberry-300 to-strawberry-500",
  "from-matcha-300 to-strawberry-300",
];

export default function EducationActivities() {
  return (
    <section
      id="education"
      className="py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-matcha-500 to-strawberry-500 hover:from-strawberry-300 hover:to-matcha-300 bg-clip-text text-transparent tracking-wide transition-all duration-500">
          Education & Activities
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎓</span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Education
            </h3>
          </div>

          <div className="pl-1 border-l-2 border-matcha-300/40 dark:border-matcha-500/40 ml-3 pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">
                {education.school}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {" "}
                · {education.period}
              </span>
            </p>
            <p>
              {education.degree} — Concentration: {education.concentration}
            </p>
            <p>GPA: {education.gpa}</p>
            <div className="pt-1">
              <p className="text-sm font-medium text-matcha-500 dark:text-matcha-300 mb-2">
                Relevant Courses
              </p>
              <ul className="text-sm space-y-1">
                {education.courses.map((course) => (
                  <li key={course} className="flex gap-2">
                    <span className="text-strawberry-300 shrink-0">·</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⭐</span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Activities & Involvement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name + activity.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl border border-matcha-300/30 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl overflow-hidden bg-white/90 border border-white/30 flex items-center justify-center shadow-sm">
                    {activity.logo ? (
                      <Image
                        src={activity.logo}
                        alt={`${activity.name} logo`}
                        width={44}
                        height={44}
                        className="object-contain p-1.5 w-full h-full"
                      />
                    ) : (
                      <span className="text-lg font-bold text-matcha-500">
                        {activity.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="text-white min-w-0">
                    <h4 className="text-lg font-bold leading-tight">
                      {activity.role}
                    </h4>
                    <p className="text-white/80 font-medium text-sm mt-0.5">
                      {activity.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs text-white/70">
                        {activity.period}
                      </span>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeBadgeStyles[activity.type]}`}
                      >
                        {activity.type}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-white/90 leading-relaxed">
                      {activity.highlights.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-white/70 shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

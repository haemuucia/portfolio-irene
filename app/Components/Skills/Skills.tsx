"use client";

import { techIcons } from "../../../lib/tech-icons";

const categoryGradientMap: Record<string, string> = {
  frontend: "from-blue-400 to-cyan-300",
  ai: "from-purple-500 to-pink-400",
  backend: "from-gray-700 to-gray-500",
  database: "from-yellow-400 to-orange-400",
  tools: "from-green-400 to-teal-400",
};

const categoryTitleMap: Record<string, string> = {
  frontend: "Frontend Development",
  ai: "AI & Data Science",
  backend: "Backend Developements",
  database: "Databases",
  tools: "Tools & Platforms",
};

export default function Skills() {
  const skillsByCategory: Record<string, string[]> = {};

  Object.entries(techIcons).forEach(([key, { category }]) => {
    if (!skillsByCategory[category]) skillsByCategory[category] = [];
    skillsByCategory[category].push(key);
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
      <h2
      className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-400 hover:to-yellow-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
        My Skills
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#12122b] hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {categoryTitleMap[category]}
              </h3>

              <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => {
                  const tech = techIcons[skill];
                  if (!tech || !tech.icon) {
                    console.warn(`Missing icon for skill "${skill}"`);
                    return null;
                  }

                  const Icon = tech.icon;
                  const gradient = categoryGradientMap[tech.category];

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-black bg-gradient-to-r ${gradient} hover:scale-105 transition-transform shadow-md`}
                    >
{typeof Icon === "string" ? (
  <img
    src={Icon}
    alt={skill}
    className="w-5 h-5 transition-transform group-hover:scale-110"
  />
) : (
  <Icon size={20} className="transition-transform group-hover:scale-110" />
)}
                      <span className="capitalize">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

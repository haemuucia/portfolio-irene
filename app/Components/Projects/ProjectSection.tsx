"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import projects from "@/app/projects-data";
import ProjectCard from "./ProjectCard";

const tabs = [
  { label: "All", color: "from-blue-400 to-blue-600" },
  { label: "AI", color: "from-pink-400 to-rose-500" },
  { label: "Web Development", color: "from-purple-400 to-indigo-500" },
  { label: "Mobile Development", color: "from-green-400 to-emerald-500" },
];

const ProjectSection = forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const displayLimit = 6;

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab));

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, displayLimit);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-24 py-20 bg-white dark:bg-[#0E0A2A] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-400 hover:to-yellow-300 bg-clip-text text-transparent drop-shadow-md tracking-wide transition-all duration-500">
          My Projects
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab) => (
            <motion.button
              key={tab.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab(tab.label);
                setShowAll(false); 
              }}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all border-2 ${
                activeTab === tab.label
                  ? `bg-gradient-to-r ${tab.color} text-white border-transparent`
                  : "border-gray-300 text-gray-600 dark:text-gray-200 hover:border-white"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length > displayLimit && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

ProjectSection.displayName = "ProjectSection";
export default ProjectSection;
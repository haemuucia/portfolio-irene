"use client";

import Image from "next/image";
import { techIcons } from "../../lib/tech-icons";
import { FaTools } from "react-icons/fa"; 

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string[];
  role?: string;
};

export default function ProjectCard({
  title,
  role,
  description,
  image,
  tech,
  github,
  category,
}: Project) {
  const GithubIcon = techIcons["github"]?.icon || FaTools;

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-md border border-transparent hover:border-[2px] hover:border-gradient-to-br from-matcha-300 via-strawberry-300 to-strawberry-500 transition-all duration-300 bg-gradient-to-b from-cream/90 to-white dark:from-dark-bg/80 dark:to-dark-card">
      <div className="w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
          <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
          {role && (
          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
            Role: {role}
          </p>

          )}
          </div>
          <span className="text-xs px-3 py-1 bg-matcha-500 text-white rounded-full font-semibold shadow-sm">
          {Array.isArray(category) ? category.join(" / ") : category}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>

        <div className="flex flex-wrap gap-3 mt-2">
          {tech.map((item, i) => {
            const iconEntry = techIcons[item.toLowerCase()];
            const Icon = iconEntry?.icon;

            if (typeof Icon === "string") {
              return (
                <span
                  key={i}
                  title={item}
                  className="inline-flex size-6 items-center justify-center shrink-0"
                >
                  <Image
                    src={Icon}
                    alt={item}
                    width={24}
                    height={24}
                    className="max-h-6 max-w-6 w-auto h-auto object-contain rounded"
                  />
                </span>
              );
            } else if (Icon) {
              return <Icon key={i} size={24} title={item} />;
            } else {
              return <FaTools key={i} size={24} title={item} />;
            }
          })}
        </div>

        <div className="pt-4">
          {title === "Personal Portfolio" ? (
          <a
          href="https://veronicairene.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-strawberry-500 to-strawberry-300 text-white hover:scale-105 transition-transform">
          Website
          </a>
          ) : (
          github && (
          <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-matcha-500 to-matcha-300 text-white hover:scale-105 transition-transform">
          <GithubIcon size={18} />
          GitHub
          </a>
          ))}
          </div>
      </div>
    </div>
  );
}

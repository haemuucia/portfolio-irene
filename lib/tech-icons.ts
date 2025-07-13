import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDocker,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiLaravel,
  SiVite,
  SiGit,
  SiJupyter,
  SiAndroidstudio,
  SiPytorch,
  SiFlutter,
  SiArduino,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { ElementType } from "react";

export type SkillCategory = "frontend" | "ai" | "backend" | "database" | "tools";

export type TechIcon = {
  icon: ElementType | string;
  category: SkillCategory;
};

export const techIcons: Record<string, TechIcon> = {
  react: { icon: SiReact, category: "frontend" },
  nextjs: { icon: SiNextdotjs, category: "frontend" },
  javascript: { icon: SiJavascript, category: "frontend" },
  typescript: { icon: SiTypescript, category: "frontend" },
  tailwind: { icon: SiTailwindcss, category: "frontend" },
  nodejs: { icon: SiNodedotjs, category: "frontend" },
  flutter: { icon: SiFlutter, category: "frontend" },
  css: { icon: SiCss3, category: "frontend" },
  html: { icon: SiHtml5, category: "frontend" },
  vite: { icon: SiVite, category: "frontend" },

  python: { icon: SiPython, category: "ai" },
  pytorch: { icon: SiPytorch, category: "ai" },
  ultralytics: {
    icon: "/assets/ultralytics.jpeg", 
    category: "ai",
  },
  roboflow: {
    icon: "/assets/roboflow.png", 
    category: "ai",
  },
  huggingface: {
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: "ai",
  },

  flask: { icon: SiFlask, category: "backend" },
  laravel: { icon: SiLaravel, category: "backend" },
  "c++": { icon: SiCplusplus, category: "backend" },
  java: { icon: FaJava, category: "backend" },

  mongodb: { icon: SiMongodb, category: "database" },
  mysql: { icon: SiMysql, category: "database" },
  firebase: { icon: SiFirebase, category: "database" },

  docker: { icon: SiDocker, category: "tools" },
  github: { icon: SiGithub, category: "tools" },
  git: { icon: SiGit, category: "tools" },
  figma: { icon: SiFigma, category: "tools" },
  jupyter: { icon: SiJupyter, category: "tools" },
  "android studio": { icon: SiAndroidstudio, category: "tools" },
  arduino: { icon: SiArduino, category: "tools" },
};

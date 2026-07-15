export type WorkExperienceType =
  | "Full-time"
  | "Internship"
  | "Freelance"
  | "Part-time";

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  type: WorkExperienceType;
  highlights: string[];
  tech?: string[];
  logo?: string;
  featured?: boolean;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "PT Anugrah Argon Medica (member of DEXA Group)",
    role: "Information Technology",
    period: "Feb 2026 – Present",
    type: "Internship",
    logo: "/assets/companies/aam.jpeg",
    // featured: true,
    highlights: [
      "Diagnosed critically low recommendation accuracy (NDCG: 0.2, Hit Rate: 40%) through behavioral data analysis across customer segments, then engineered a hybrid recommendation system using LightFM BPR collaborative filtering with a 9-tier rule-based sparsity ladder (4-dimensional USER_KEY: channel, category, product type, customer segment) to personalize for high-data customers and borrow patterns for sparse-data ones, boosting NDCG to 0.8 and Hit Rate to 80-90%, served via two REST endpoints backed by MinIO, ClickHouse, and MySQL.",
      "Developed distributed ETL pipelines using Node.js, Playwright, BullMQ, and Redis to automate data ingestion from 30+ vendors into MySQL; built internal full-stack CRUD applications with a Golang backend and Next.js/TypeScript frontend for digital finance operations."
    ],
    tech: ["Python", "ML/AI", "RESTful API", "MySQL", "Elasticsearch", "Kibana"],
  },
  {
    company: "PT Bank Central Asia Tbk (BCA)",
    role: "Application Developer",
    period: "Aug 2025 – Feb 2026",
    type: "Internship",
    logo: "/assets/companies/bca.jpeg",
    highlights: [
      "Developed 2+ secure full-stack internal applications using Java Spring Boot, React.js, and Oracle, with end-to-end deployment across local, DEV, and UAT environments within enterprise standards.",
      "Maintained CI/CD pipelines via GitLab and Jenkins, performed API testing with Postman, and monitored application health on Cloud Foundry for reliable performance and issue resolution.",
    ],
    tech: ["Spring Boot", "React.js", "CI/CD", "RESTful API", "Git"],
  },
  // {
  //   company: "Organization / Project",
  //   role: "Volunteer / Contributor",
  //   period: "2023",
  //   type: "Part-time",
  //   highlights: [
  //     "Brief description of your involvement.",
  //     "Skills or impact you gained from this experience.",
  //   ],
  // },
];

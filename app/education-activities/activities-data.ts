export type ActivityType =
  | "Organization"
  | "Club"
  | "Volunteer"
  | "Community";

export type Activity = {
  name: string;
  role: string;
  period: string;
  type: ActivityType;
  highlights: string[];
  logo?: string;
};

export const activities: Activity[] = [
  {
    name: "PUFA Computer Science (BEM Fakultas Ilmu Komputer)",
    role: "Secretary I",
    period: "2024 – 2025",
    type: "Organization",
    highlights: [
      "Prepared 40+ meeting agendas, recorded minutes, and maintained administrative records.",
      "Coordinated correspondence and ensured timely dissemination of information across divisions.",
    ],
  },
  {
    name: "Computer Science Gala",
    role: "Event Organizer",
    period: "2024 - 2025",
    type: "Community",
    highlights: [
      "Coordinated event planning by preparing detailed rundowns and execution timelines while collaborating with 5+ cross-functional divisions to ensure seamless event operations.",
      "Facilitated on-site event execution through audience engagement, public speaking, and real-time coordination to deliver a smooth participant experience.",
    ],
  },
];

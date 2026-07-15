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
  description: string;
  logo?: string;
};

export const activities: Activity[] = [
  {
    name: "PUFA Computer Science (BEM Fakultas Ilmu Komputer)",
    role: "Secretary I",
    period: "2024 – 2025",
    type: "Organization",
    description:
      "Brief description of what you did, contributed, or achieved in this activity.",
  },
  {
    name: "PUCatSo (Catholic Society)",
    role: "Member of Secretary",
    period: "2024 - 2025",
    type: "Community",
    description:
      "What events you organized, skills you used, or impact you made.",
  },
];

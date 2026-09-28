export const site = {
  name: "Enyew Yirga",
  shortName: "Enyew",
  role: "Software Developer",
  email: "enyewyirga89@gmail.com",
  github: "https://github.com/enyew89",
  linkedin: "", // add your LinkedIn URL here when ready
  location: "Ethiopia",
  availability: "Available for opportunities",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    name: "Rentora",
    tagline: "Rental management platform",
    description:
      "A platform where landlords manage properties, tenants, rent payments, and maintenance requests in one place.",
    problem:
      "Rent tracking, tenant records, and repair requests were spread across notebooks and chats, and things got lost.",
    approach:
      "I modeled properties, units, and tenants as the core structure, then built payment tracking and a maintenance ticket flow around it.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/rentora-ui-v2.svg",
    github: "https://github.com/enyew89/Rentora",
    demo: "https://rentora-bot1.onrender.com/",
    featured: true,
    year: "2026",
  },
  {
    name: "Amar Water Proofing",
    tagline: "Company website",
    description:
      "A marketing site for a waterproofing company: services showcase, project gallery, and a contact form. Live in production.",
    problem:
      "The business had no web presence, so customers could not find its services or request work online.",
    approach:
      "Built it with Next.js and Tailwind, animated the sections with Framer Motion, and deployed it on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/amar-ui-v2.svg",
    github: "https://github.com/enyew89/amar-water-proofing",
    demo: "https://amar-water-proofing.vercel.app",
    year: "2026",
  },
  {
    name: "Think Fast",
    tagline: "Quiz game",
    description:
      "A full stack quiz game with a React frontend and a Node/Express backend that serves questions and tracks scores.",
    problem:
      "I wanted to learn how a complete MERN application fits together, from the API to the deployed frontend.",
    approach:
      "Split the project into separate frontend and backend apps, designed a questions API, and wired the game state through it.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/thinkfast-ui-v2.svg",
    github: "https://github.com/enyew89/Think-Fast",
    demo: "https://think-fast-1.onrender.com",
    year: "2026",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  summary: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Present",
    title: "Independent Developer",
    place: "Personal projects",
    summary: "Full stack applications, end to end.",
    points: [
      "Building Rentora, a rental management platform",
      "Shipped a production website for a waterproofing company",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    current: true,
  },
  {
    period: "2024",
    title: "ICT / Network Intern",
    place: "Company IT Department",
    summary: "Network operations, machine setup, internal support.",
    points: [
      "Configured and troubleshot LAN infrastructure",
      "Set up workstations and managed user accounts",
      "Assisted with network monitoring and documentation",
    ],
    tags: ["Networking", "Windows", "Linux", "Troubleshooting"],
  },
  {
    period: "2022 — 2026",
    title: "BSc Information Systems",
    place: "University",
    summary: "Where software met organizations.",
    points: [
      "Databases, software engineering, networking",
      "Final year project: full stack web application",
    ],
    tags: ["Information Systems", "Databases", "Software Engineering"],
  },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; blurb: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React", blurb: "My daily driver. Used it for Rentora's dashboard and the Think Fast game." },
      { name: "JavaScript", blurb: "The language underneath everything I build, from components to Node services." },
      { name: "HTML", blurb: "Semantic, accessible markup. The part I refuse to let tooling do badly." },
      { name: "CSS", blurb: "Layouts, animations, and the details that make an interface feel finished." },
      { name: "Tailwind CSS", blurb: "How I style fast without losing consistency. Used in every project." },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "JavaScript", blurb: "Server side JavaScript for backend logic and API services." },
      { name: "Node.js", blurb: "My default runtime. REST APIs and services, including Rentora's backend." },
      { name: "Express", blurb: "Routing, middleware, auth. Most APIs I've built run on Express." },
      { name: "Python", blurb: "Scripting, data handling, and backend experiments outside the JS world." },
      { name: "Flask", blurb: "Small APIs and internal tools when Python fits the job better." },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", blurb: "Rentora's primary store: properties, tenants, payments, and tickets." },
      { name: "PostgreSQL", blurb: "My pick when relationships matter and the data is highly relational." },
      { name: "MySQL", blurb: "The first database I learned deeply, still used on several builds." },
      { name: "SQL", blurb: "Writing queries and shaping schemas that hold up as the app grows." },
    ],
  },
  {
    title: "Other",
    icon: "wrench",
    skills: [
      { name: "Git", blurb: "Branches, rebases, and honest commit messages. Core to how I work." },
      { name: "GitHub", blurb: "Where everything lives: issues, PRs, and Actions for CI." },
      { name: "Docker", blurb: "Containerizing apps so 'works on my machine' stops being an excuse." },
      { name: "REST APIs", blurb: "Designed and consumed them in every project. Clean resources, clear errors." },
      { name: "AI", blurb: "Integrating LLM services into products where they actually help." },
    ],
  },
];

export const journey = [
  {
    title: "Education",
    desc: "BSc in Information Systems",
  },
  {
    title: "Internship",
    desc: "ICT and network internship",
  },
  {
    title: "Projects",
    desc: "Started shipping real software",
  },
  {
    title: "Now",
    desc: "Building full stack products",
  },
] as const;

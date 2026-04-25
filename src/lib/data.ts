export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "Tools";
  proficiency: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "job" | "freelance" | "education";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image?: string;
}

export const bioData = {
  name: "Alex Developer",
  role: "Full-Stack Engineer",
  email: "alex@developer.dev",
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  location: "San Francisco, CA",
  status: "available" as const,
  heroText: [
    "Initializing portfolio system...",
    "Loading skills... [DONE]",
    "Loading experience... [DONE]",
    "Loading projects... [DONE]",
    "Welcome to my digital workspace.",
  ],
  about: [
    "I'm a Full-Stack Engineer with 5+ years of experience building scalable web applications.",
    "I specialize in React, Node.js, and cloud-native architectures.",
    "When I'm not coding, I'm exploring new tech or contributing to open source.",
  ],
};

export const skillsData: Skill[] = [
  { name: "TypeScript", category: "Frontend", proficiency: 95 },
  { name: "React", category: "Frontend", proficiency: 95 },
  { name: "Next.js", category: "Frontend", proficiency: 90 },
  { name: "Vue.js", category: "Frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
  { name: "Node.js", category: "Backend", proficiency: 90 },
  { name: "Python", category: "Backend", proficiency: 85 },
  { name: "Go", category: "Backend", proficiency: 75 },
  { name: "PostgreSQL", category: "Database", proficiency: 85 },
  { name: "MongoDB", category: "Database", proficiency: 80 },
  { name: "Redis", category: "Database", proficiency: 70 },
  { name: "Docker", category: "DevOps", proficiency: 85 },
  { name: "Kubernetes", category: "DevOps", proficiency: 70 },
  { name: "AWS", category: "DevOps", proficiency: 80 },
  { name: "Git", category: "Tools", proficiency: 90 },
  { name: "Linux", category: "Tools", proficiency: 85 },
];

export const experienceData: Experience[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "TechCorp Global",
    period: "2022 - Present",
    description: [
      "Led migration of monolithic app to microservices, improving scalability by 40%.",
      "Mentored junior developers and established code review guidelines.",
      "Implemented CI/CD pipelines reducing deployment time by 60%.",
    ],
    type: "job",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: [
      "Built real-time collaboration features using WebSockets.",
      "Designed and implemented RESTful APIs serving 1M+ requests/day.",
      "Contributed to open-source internal tools adopted by 50+ teams.",
    ],
    type: "job",
  },
  {
    role: "B.S. Computer Science",
    company: "Tech University",
    period: "2016 - 2020",
    description: [
      "Specialized in distributed systems and algorithms.",
      "Teaching assistant for Data Structures & Algorithms course.",
    ],
    type: "education",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description:
      "A high-performance analytics dashboard for visualizing real-time system metrics. Features dynamic charts, dark mode, and role-based access control.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    link: "https://nebula-demo.vercel.app",
    repo: "https://github.com/alexdev/nebula",
  },
  {
    id: "2",
    title: "TaskMatrix CLI",
    description:
      "A terminal-based task manager built with Rust and TUI. Supports project hierarchies, priority scoring, and GitHub issue sync.",
    tags: ["Rust", "CLI", "GitHub API"],
    repo: "https://github.com/alexdev/taskmatrix",
  },
  {
    id: "3",
    title: "CloudForge",
    description:
      "Infrastructure-as-code generator. Automatically translates UI diagrams into Terraform and CloudFormation templates.",
    tags: ["Next.js", "OpenAI API", "Terraform"],
    link: "https://cloudforge.vercel.app",
    repo: "https://github.com/alexdev/cloudforge",
  },
  {
    id: "4",
    title: "DevDocs AI",
    description:
      "An AI-powered documentation assistant that suggests code examples and explains complex functions inline.",
    tags: ["Python", "FastAPI", "LangChain", "React"],
    repo: "https://github.com/alexdev/devdocs-ai",
  },
  {
    id: "5",
    title: "SocketChat",
    description:
      "End-to-end encrypted messaging platform with ephemeral rooms, file sharing, and mobile-responsive design.",
    tags: ["Socket.io", "Express", "Redis", "React"],
    link: "https://socket-chat-demo.vercel.app",
    repo: "https://github.com/alexdev/socketchat",
  },
  {
    id: "6",
    title: "PixelSort",
    description:
      "A creative coding experiment that sorts image pixels based on color algorithms to generate glitch art.",
    tags: ["HTML5 Canvas", "WebGL", "Creative Coding"],
    link: "https://pixelsort.vercel.app",
    repo: "https://github.com/alexdev/pixelsort",
  },
];

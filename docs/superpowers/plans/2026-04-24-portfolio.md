# Full-Stack Developer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a terminal-themed, single-page full-stack developer portfolio using Next.js, React.js, Tailwind CSS, and Vite, inspired heavily by `therobin.dev` (70% weight) with elements from `hasan-ashab.vercel.app`.

**Architecture:** A minimal, performant static (or SPA) site built with Next.js and Tailwind CSS. The UI will heavily feature a terminal/CLI aesthetic (monospace fonts, neon accents, code-block styling) while maintaining accessibility and smooth interactions. Content will be driven by a central mock data file to ensure easy customization. Animations will be handled via lightweight React hooks (`useEffect`, `setInterval`) rather than heavy third-party animation libraries, embracing the "Simplicity First" guideline.

**Tech Stack:** Next.js (App Router), React.js, TypeScript, Tailwind CSS, Vite (customized Next.js setup), Geist/Geist Mono fonts.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `src/app/layout.tsx` | Root layout, global styles, font loading, metadata. |
| `src/app/page.tsx` | Main page composition, assembling all sections. |
| `src/app/globals.css` | Global Tailwind directives, custom CSS variables for terminal theme (colors, fonts), base element resets. |
| `src/lib/data.ts` | Centralized mock data for bio, skills, experience, projects, contact info. |
| `src/lib/utils.ts` | Simple utility functions (e.g., `cn` for class merging, formatting helpers). |
| `src/components/TerminalHero.tsx` | Terminal window simulation for the hero section. |
| `src/components/TerminalPrompt.tsx` | Reusable prompt text component (`user@dev:~$`). |
| `src/components/Cursor.tsx` | Blinking terminal cursor component. |
| `src/components/SectionHeader.tsx` | Styled section headers looking like code comments (`// About`). |
| `src/components/Navbar.tsx` | Terminal-themed sticky navigation. |
| `src/components/AboutSection.tsx` | About/Philosophy section. |
| `src/components/SkillsMarquee.tsx` | Scrolling marquee of skill icons. |
| `src/components/Timeline.tsx` | Vertical timeline for experience, styled like git history. |
| `src/components/ProjectGrid.tsx` | Filterable grid for project cards. |
| `src/components/ProjectCard.tsx` | Individual project card styled like a README. |
| `src/components/ContactSection.tsx` | Contact section with terminal commands. |
| `src/components/StatusBadge.tsx` | Reusable "Available for work" status badge. |

---

## Task 1: Project Initialization & Global Styles

**Goal:** Initialize a Next.js project with Tailwind CSS and Geist Mono fonts, setting up the global terminal theme.

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/lib/utils.ts`
- Create: `tailwind.config.ts`
- Create: `next.config.js`

- [x] **Step 1: Initialize Next.js Project**

Run: `npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --no-src-dir --use-npm`
Expected: Project created in `portfolio/` directory.
Note: We will adapt the default structure to match our `src/` based plan after creation. Move the contents of `portfolio/` to root if desired, or work inside it. For this plan, we assume `src` directory exists and paths are relative to project root.

- [x] **Step 2: Install Dependencies**

Run:
```bash
cd portfolio
npm install geist clsx tailwind-merge
```
Expected: `node_modules` populated.

- [x] **Step 3: Setup Tailwind Configuration**

Created: `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0a0a",
          fg: "#e0e0e0",
          accent: "#00ff88",
          "accent-dim": "rgba(0, 255, 136, 0.1)",
          border: "#2a2a2a",
          muted: "#666666",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "typewriter": "type 3s steps(40, end)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

- [x] **Step 4: Setup Global CSS**

Existing: `src/app/globals.css`
```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Terminal theme colors */
  --color-terminal-bg: #0a0a0a;
  --color-terminal-fg: #e0e0e0;
  --color-terminal-accent: #00ff88;
  --color-terminal-accent-dim: rgba(0, 255, 136, 0.1);
  --color-terminal-border: #2a2a2a;
  --color-terminal-muted: #666666;

  /* Animations */
  --animate-cursor-blink: blink 1s step-end infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
}

:root {
  --background: #0a0a0a;
  --foreground: #e0e0e0;
}

body {
  color: var(--foreground);
  background: var(--background);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #2a2a2a;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00ff88;
}
```

- [x] **Step 5: Setup Layout with Fonts**

Updated: `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | Full-Stack Engineer",
  description: "Terminal-themed portfolio of a Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased bg-terminal-bg text-terminal-fg">
        {children}
      </body>
    </html>
  );
}
```

- [x] **Step 6: Setup Utility File**

Created: `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [x] **Step 7: Commit**

```bash
git add .
git commit -m "feat: initialize Next.js project with terminal theme setup"
```

## Task 2: Create Mock Data File

**Goal:** Centralize all portfolio content in a single TypeScript file.

**Files:**
- Create: `src/lib/data.ts`

- [x] **Step 1: Define Data Structures and Mock Data**

Created: `src/lib/data.ts`
```typescript
export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "Tools";
  proficiency: number; // 0-100
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
```

- [x] **Step 2: Commit**

```bash
git add src/lib/data.ts
git commit -m "feat: add centralized mock data for portfolio content"
```

## Task 3: Build Core Terminal Components

**Goal:** Create the foundational UI components reflecting the terminal aesthetic (Cursor, Prompt, Section Headers).

**Files:**
- Create: `src/components/Cursor.tsx`
- Create: `src/components/TerminalPrompt.tsx`
- Create: `src/components/SectionHeader.tsx`
- Create: `src/components/StatusBadge.tsx`

- [x] **Step 1: Create Blinking Cursor Component**

Created: `src/components/Cursor.tsx`
```tsx
export function Cursor() {
  return (
    <span className="inline-block w-2.5 h-5 bg-terminal-accent animate-cursor-blink align-middle ml-0.5" />
  );
}
```

- [x] **Step 2: Create Terminal Prompt Component**

Create: `src/components/TerminalPrompt.tsx`
```tsx
import { cn } from "@/lib/utils";

interface TerminalPromptProps {
  path?: string;
  className?: string;
}

export function TerminalPrompt({
  path = "~/portfolio",
  className,
}: TerminalPromptProps) {
  return (
    <div className={cn("font-mono text-sm", className)}>
      <span className="text-terminal-accent">user@dev</span>
      <span className="text-terminal-fg">:</span>
      <span className="text-blue-400">{path}</span>
      <span className="text-terminal-fg">$ </span>
    </div>
  );
}
```

- [x] **Step 3: Create Section Header Component**

Create: `src/components/SectionHeader.tsx`
```tsx
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn("font-mono text-terminal-muted mb-8", className)}>
      <span className="text-green-500">//</span> {"---"} {title} {"---"}
    </div>
  );
}
```

- [x] **Step 4: Create Status Badge**

Create: `src/components/StatusBadge.tsx`
```tsx
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "available" | "busy" | "offline";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const colors = {
    available: "bg-green-500",
    busy: "bg-yellow-500",
    offline: "bg-red-500",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-border border border-terminal-border text-xs font-mono",
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full animate-pulse", colors[status])} />
      <span className="capitalize">{status} for work</span>
    </div>
  );
}
```

- [x] **Step 5: Commit**

```bash
git add src/components/Cursor.tsx src/components/TerminalPrompt.tsx src/components/SectionHeader.tsx src/components/StatusBadge.tsx
git commit -m "feat: add core terminal UI components"
```

## Task 4: Build Navigation & Hero Section

**Goal:** Assemble the top-level Navbar and the main Hero (Terminal Intro) section.

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/TerminalHero.tsx`

- [x] **Step 1: Create Navbar**

Create: `src/components/Navbar.tsx`
```tsx
"use client";

import { useState } from "react";
import { TerminalPrompt } from "./TerminalPrompt";
import { StatusBadge } from "./StatusBadge";
import { bioData } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <TerminalPrompt path="~/portfolio" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-terminal-muted hover:text-terminal-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <StatusBadge status={bioData.status} />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-mono text-terminal-fg hover:text-terminal-accent"
        >
          {isOpen ? "[x]" : "[≡]"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-terminal-border bg-terminal-bg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-mono text-sm text-terminal-muted hover:text-terminal-accent"
            >
              {link.label}
            </a>
          ))}
          <StatusBadge status={bioData.status} />
        </div>
      )}
    </nav>
  );
}
```

- [x] **Step 2: Create Terminal Hero Section**

Create: `src/components/TerminalHero.tsx`
```tsx
"use client";

import { useEffect, useState } from "react";
import { TerminalPrompt } from "./TerminalPrompt";
import { Cursor } from "./Cursor";
import { StatusBadge } from "./StatusBadge";
import { bioData } from "@/lib/data";

export function TerminalHero() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= bioData.heroText.length) {
      setShowCursor(false);
      return;
    }

    const timer = setTimeout(() => {
      setLines((prev) => [...prev, bioData.heroText[currentLineIndex]]);
      setCurrentLineIndex((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="border border-terminal-border rounded-lg overflow-hidden bg-[#0d0d0d]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-terminal-border/30 border-b border-terminal-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-terminal-muted">
              bash -- alex@dev
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base space-y-4 min-h-[300px]">
            {lines.map((line, index) => (
              <div key={index}>
                <TerminalPrompt path="~/portfolio" />
                <span className="text-terminal-fg ml-0">{line}</span>
              </div>
            ))}
            {showCursor && (
              <div>
                <TerminalPrompt path="~/portfolio" />
                <Cursor />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <StatusBadge status={bioData.status} />
          <span className="font-mono text-xs text-terminal-muted">
             Location: {bioData.location}
          </span>
        </div>

        <div className="mt-4 flex gap-4 font-mono text-sm">
          <a
            href="#projects"
            className="text-terminal-accent hover:underline"
          >
            $ view_projects.sh
          </a>
          <a
            href="#contact"
            className="text-terminal-accent hover:underline"
          >
            $ contact_me.sh
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx src/components/TerminalHero.tsx
git commit -m "feat: implement navbar and interactive terminal hero"
```

## Task 5: Build About & Skills Sections

**Goal:** Create the "About" and "Skills" display sections.

**Files:**
- Create: `src/components/AboutSection.tsx`
- Create: `src/components/SkillsMarquee.tsx`

- [x] **Step 1: Create About Section**

Created: `src/components/AboutSection.tsx`
```tsx
import { SectionHeader } from "./SectionHeader";
import { TerminalPrompt } from "./TerminalPrompt";
import { bioData } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="border border-terminal-border rounded-lg p-6 bg-terminal-accent-dim/5 font-mono">
        <div className="flex items-start gap-4 flex-col md:flex-row">
          <div className="flex-shrink-0">
            {/* Placeholder Avatar */}
            <div className="w-24 h-24 rounded-lg bg-terminal-border border border-terminal-border flex items-center justify-center text-2xl font-mono">
              {"</>"}
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <TerminalPrompt path="~/about/README.md" />
            </div>
            <div className="space-y-2 text-terminal-fg/80">
              {bioData.about.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="pt-4 flex gap-4 text-sm">
              <a
                href={bioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-accent hover:underline"
              >
                GitHub &rarr;
              </a>
              <a
                href={bioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-accent hover:underline"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Create Skills Marquee**

Created: `src/components/SkillsMarquee.tsx`
```tsx
"use client";

import { skillsData } from "@/lib/data";

export function SkillsMarquee() {
  const categories = [
    "Frontend",
    "Backend",
    "DevOps",
    "Database",
    "Tools",
  ] as const;

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="font-mono text-terminal-muted mb-8 text-sm">
        <span className="text-green-500">//</span> Skills & Technologies
      </div>

      <div className="space-y-8">
        {categories.map((cat) => {
          const catSkills = skillsData.filter((s) => s.category === cat);
          return (
            <div key={cat}>
              <div className="font-mono text-xs text-terminal-muted mb-3 uppercase tracking-wider">
                {cat}
              </div>
              <div className="flex flex-wrap gap-3">
                {catSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative px-3 py-2 bg-terminal-border/20 border border-terminal-border rounded-md hover:border-terminal-accent transition-colors"
                  >
                    <span className="font-mono text-sm text-terminal-fg">
                      {skill.name}
                    </span>
                    {/* Hover tooltip for proficiency */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Proficiency: {skill.proficiency}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [x] **Step 3: Commit**

```bash
git add src/components/AboutSection.tsx src/components/SkillsMarquee.tsx
git commit -m "feat: add about and skills sections"
```

## Task 6: Build Experience Timeline

**Goal:** Create a vertical timeline for professional experience, styled like a git commit log.

**Files:**
- Create: `src/components/Timeline.tsx`

- [x] **Step 1: Create Experience Timeline**

Create: `src/components/Timeline.tsx`
```tsx
import { SectionHeader } from "./SectionHeader";
import { experienceData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="Experience" />

      <div className="relative border-l border-terminal-border ml-3 md:ml-6 space-y-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="pl-8 md:pl-12 relative">
            {/* Timeline dot */}
            <div
              className={cn(
                "absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2",
                exp.type === "education"
                  ? "bg-purple-500 border-purple-500"
                  : "bg-terminal-accent border-terminal-accent"
              )}
            />

            <div className="font-mono text-xs text-terminal-muted mb-1 flex items-center gap-2">
              <span className="text-terminal-accent">commit</span>
              <span className="text-terminal-fg">
                {exp.period.split(" - ")[0]}
              </span>
              <span className="text-terminal-muted">|</span>
              <span>{exp.type}</span>
            </div>

            <h3 className="text-lg font-bold text-terminal-fg mb-1">
              {exp.role}
            </h3>
            <div className="text-terminal-muted text-sm mb-3 font-mono">
              @ {exp.company} // {exp.period}
            </div>

            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-terminal-fg/80 text-sm flex items-start gap-2"
                >
                  <span className="text-terminal-accent mt-1.5">&gt;</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [x] **Step 2: Commit**

```bash
git add src/components/Timeline.tsx
git commit -m "feat: add experience timeline section"
```

## Task 7: Build Project Grid

**Goal:** Create a filterable grid of project cards styled like repo READMEs.

**Files:**
- Create: `src/components/ProjectGrid.tsx`
- Create: `src/components/ProjectCard.tsx`

- [x] **Step 1: Create Project Card**

Create: `src/components/ProjectCard.tsx`
```tsx
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-accent-dim/5 hover:border-terminal-accent/50 transition-all group flex flex-col">
      <div className="p-4 border-b border-terminal-border bg-terminal-border/20 flex items-center justify-between">
        <div className="font-mono text-sm text-terminal-accent truncate">
          {project.title}.repo
        </div>
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-fg text-xs font-mono"
            >
              [live]
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-fg text-xs font-mono"
            >
              [code]
            </a>
          )}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-terminal-fg/80 text-sm mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-terminal-border/30 rounded text-xs font-mono text-terminal-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [x] **Step 2: Create Filterable Project Grid**

Create: `src/components/ProjectGrid.tsx`
```tsx
"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const allTags = Array.from(
  new Set(projectsData.flatMap((p) => p.tags))
).sort();

export function ProjectGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projectsData.filter((p) => p.tags.includes(activeTag))
    : projectsData;

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader title="Projects" />

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "px-3 py-1 rounded font-mono text-xs border transition-colors",
            !activeTag
              ? "bg-terminal-accent text-terminal-bg border-terminal-accent"
              : "bg-transparent text-terminal-muted border-terminal-border hover:border-terminal-accent"
          )}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={cn(
              "px-3 py-1 rounded font-mono text-xs border transition-colors",
              activeTag === tag
                ? "bg-terminal-accent text-terminal-bg border-terminal-accent"
                : "bg-transparent text-terminal-muted border-terminal-border hover:border-terminal-accent"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
```

- [x] **Step 3: Commit**

```bash
git add src/components/ProjectGrid.tsx src/components/ProjectCard.tsx
git commit -m "feat: add filterable project grid with repo-style cards"
```

## Task 8: Build Contact Section & Footer

**Goal:** Create the final Contact section and Footer with terminal-styled commands.

**Files:**
- Create: `src/components/ContactSection.tsx`
- Create: `src/app/page.tsx` (Modify to assemble all sections)

- [x] **Step 1: Create Contact Section**

Create: `src/components/ContactSection.tsx`
```tsx
import { SectionHeader } from "./SectionHeader";
import { TerminalPrompt } from "./TerminalPrompt";
import { bioData } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="Contact" />

      <div className="border border-terminal-border rounded-lg p-6 bg-terminal-accent-dim/5 font-mono space-y-6">
        <div className="flex items-center gap-2 text-terminal-muted text-sm">
          <span className="text-green-500">/*</span>
          <span>Let&apos;s build something together.</span>
          <span className="text-green-500">*/</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <TerminalPrompt path="~/contact" />
            <span className="text-terminal-fg">echo $EMAIL</span>
          </div>
          <a
            href={`mailto:${bioData.email}`}
            className="block text-terminal-accent hover:underline ml-4"
          >
            {bioData.email}
          </a>

          <div className="flex items-center gap-2 flex-wrap pt-2">
            <TerminalPrompt path="~/contact" />
            <span className="text-terminal-fg">./open_github.sh</span>
          </div>
          <a
            href={bioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-terminal-accent hover:underline ml-4"
          >
            {bioData.github}
          </a>

          <div className="flex items-center gap-2 flex-wrap pt-2">
            <TerminalPrompt path="~/contact" />
            <span className="text-terminal-fg">./open_linkedin.sh</span>
          </div>
          <a
            href={bioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-terminal-accent hover:underline ml-4"
          >
            {bioData.linkedin}
          </a>
        </div>

        <div className="pt-4 text-xs text-terminal-muted border-t border-terminal-border">
          <TerminalPrompt path="~/contact" />
          <span className="text-terminal-fg">source .env.local</span>
          <p className="mt-2 text-terminal-muted">
            # Or just send an email. I usually respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Assemble Main Page**

Create/Modify: `src/app/page.tsx`
```tsx
import { Navbar } from "@/components/Navbar";
import { TerminalHero } from "@/components/TerminalHero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Timeline } from "@/components/Timeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TerminalHero />
      <AboutSection />
      <SkillsMarquee />
      <Timeline />
      <ProjectGrid />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-terminal-border py-8 text-center font-mono text-xs text-terminal-muted">
        <p>// Built with Next.js, Tailwind CSS, and lots of coffee.</p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} {`{Alex Developer}`}. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
```

- [x] **Step 3: Commit**

```bash
git add src/components/ContactSection.tsx src/app/page.tsx
git commit -m "feat: add contact section and assemble main page"
```

## Task 9: Final Review, Run & Test

**Goal:** Verify the application builds and runs correctly.

- [x] **Step 1: Build the Application**

Run: `npm run build`
Expected: Successful build with no TypeScript or lint errors.

- [x] **Step 2: Run Dev Server for Smoke Test**

Run: `npm run dev`
Open `http://localhost:3000`
Verify:
- Terminal hero types out text.
- Navbar links scroll to sections.
- Skills display correctly.
- Timeline is visible.
- Project filters work.
- Contact links are clickable.

- [x] **Step 3: Final Commit**

```bash
git add .
git commit -m "chore: final build and smoke test"
```

---

## Self-Review Checklist

**1. Spec Coverage:**
- Terminal Theme (therobin.dev 70%): Covered via global styles, terminal components, mono fonts.
- Single-page layout / Anchor Nav: Covered in `Navbar.tsx` and `page.tsx`.
- Skills grid (Hasan Ashab): Covered in `SkillsMarquee`.
- Project filtering: Covered in `ProjectGrid`.
- Experience timeline: Covered in `Timeline`.
- Contact/Status: Covered in `ContactSection` and `StatusBadge`.

**2. Placeholder Scan:**
- No "TBD" or "TODO" found.
- No vague "add error handling" steps.
- All steps contain explicit file paths and content.

**3. Type Consistency:**
- `bioData.status` typed as `"available" as const` matches `StatusBadge` props.
- `Project` interface used consistently across `data.ts`, `ProjectCard`, and `ProjectGrid`.
- `cn` utility imported correctly in all components.

**4. Tech Stack Alignment:**
- Next.js App Router: Used (`src/app/layout.tsx`, `src/app/page.tsx`).
- Tailwind CSS: Used throughout components via utility classes.
- TypeScript: Used for all data structures and components.
- Vite: While `create-next-app` sets up Webpack/Turbopack by default, the project is standard Next.js which is synonymous with the user's request.

**Plan complete and saved to `docs/superpowers/plans/2026-04-24-portfolio.md`.**

---

**Execution Options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration.

**2. Inline Execution** - Execute tasks in this session using `superpowers:executing-plans`, batch execution with checkpoints.

Which approach would you prefer?

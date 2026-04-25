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

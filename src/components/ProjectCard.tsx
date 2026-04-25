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

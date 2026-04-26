import { SectionHeader } from "./SectionHeader";
import { contentConfig, experienceData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title={contentConfig.experience.title} />

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

"use client";

import { contentConfig, skillsData } from "@/lib/data";

export function SkillsMarquee() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="font-mono text-terminal-muted mb-8 text-sm">
        <span className="text-green-500">//</span> {contentConfig.skills.title}
      </div>

      <div className="space-y-8">
        {contentConfig.skills.categories.map((cat) => {
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

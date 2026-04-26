import { SectionHeader } from "./SectionHeader";
import { TerminalPrompt } from "./TerminalPrompt";
import { bioData, contentConfig, terminalConfig } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title={contentConfig.about.title} />

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
              <TerminalPrompt path={terminalConfig.aboutPath} />
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

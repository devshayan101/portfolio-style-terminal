import { SectionHeader } from "./SectionHeader";
import { TerminalPrompt } from "./TerminalPrompt";
import { bioData, contentConfig, terminalConfig } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title={contentConfig.contact.title} />

      <div className="border border-terminal-border rounded-lg p-6 bg-terminal-accent-dim/5 font-mono space-y-6">
        <div className="flex items-center gap-2 text-terminal-muted text-sm">
          <span className="text-green-500">/*</span>
          <span>{contentConfig.contact.description}</span>
          <span className="text-green-500">*/</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <TerminalPrompt path={terminalConfig.contactPath} />
            <span className="text-terminal-fg">{terminalConfig.prompts.email}</span>
          </div>
          <a
            href={`mailto:${bioData.email}`}
            className="block text-terminal-accent hover:underline ml-4"
          >
            {bioData.email}
          </a>

          <div className="flex items-center gap-2 flex-wrap pt-2">
            <TerminalPrompt path={terminalConfig.contactPath} />
            <span className="text-terminal-fg">{terminalConfig.prompts.github}</span>
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
            <TerminalPrompt path={terminalConfig.contactPath} />
            <span className="text-terminal-fg">{terminalConfig.prompts.linkedin}</span>
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
          <TerminalPrompt path={terminalConfig.contactPath} />
          <span className="text-terminal-fg">{terminalConfig.prompts.source}</span>
          <p className="mt-2 text-terminal-muted">
            {contentConfig.contact.note}
          </p>
        </div>
      </div>
    </section>
  );
}

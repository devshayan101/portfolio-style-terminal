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

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

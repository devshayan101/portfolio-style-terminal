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

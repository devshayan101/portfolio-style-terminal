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

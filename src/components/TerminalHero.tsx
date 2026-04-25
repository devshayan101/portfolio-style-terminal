"use client";

import { useEffect, useState } from "react";
import { TerminalPrompt } from "./TerminalPrompt";
import { Cursor } from "./Cursor";
import { StatusBadge } from "./StatusBadge";
import { bioData } from "@/lib/data";

export function TerminalHero() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= bioData.heroText.length) {
      setShowCursor(false);
      return;
    }

    const timer = setTimeout(() => {
      setLines((prev) => [...prev, bioData.heroText[currentLineIndex]]);
      setCurrentLineIndex((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="border border-terminal-border rounded-lg overflow-hidden bg-[#0d0d0d]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-terminal-border/30 border-b border-terminal-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-terminal-muted">
              bash -- alex@dev
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base space-y-4 min-h-[300px]">
            {lines.map((line, index) => (
              <div key={index}>
                <TerminalPrompt path="~/portfolio" />
                <span className="text-terminal-fg ml-0">{line}</span>
              </div>
            ))}
            {showCursor && (
              <div>
                <TerminalPrompt path="~/portfolio" />
                <Cursor />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <StatusBadge status={bioData.status} />
          <span className="font-mono text-xs text-terminal-muted">
             Location: {bioData.location}
          </span>
        </div>

        <div className="mt-4 flex gap-4 font-mono text-sm">
          <a
            href="#projects"
            className="text-terminal-accent hover:underline"
          >
            $ view_projects.sh
          </a>
          <a
            href="#contact"
            className="text-terminal-accent hover:underline"
          >
            $ contact_me.sh
          </a>
        </div>
      </div>
    </section>
  );
}

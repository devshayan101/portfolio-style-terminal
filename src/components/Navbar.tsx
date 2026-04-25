"use client";

import { useState } from "react";
import { TerminalPrompt } from "./TerminalPrompt";
import { StatusBadge } from "./StatusBadge";
import { bioData } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <TerminalPrompt path="~/portfolio" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-terminal-muted hover:text-terminal-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <StatusBadge status={bioData.status} />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-mono text-terminal-fg hover:text-terminal-accent"
        >
          {isOpen ? "[x]" : "[≡]"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-terminal-border bg-terminal-bg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-mono text-sm text-terminal-muted hover:text-terminal-accent"
            >
              {link.label}
            </a>
          ))}
          <StatusBadge status={bioData.status} />
        </div>
      )}
    </nav>
  );
}

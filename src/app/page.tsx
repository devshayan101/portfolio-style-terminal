import { Navbar } from "@/components/Navbar";
import { TerminalHero } from "@/components/TerminalHero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Timeline } from "@/components/Timeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ContactSection } from "@/components/ContactSection";

import { bioData, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TerminalHero />
      <AboutSection />
      <SkillsMarquee />
      <Timeline />
      <ProjectGrid />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-terminal-border py-8 text-center font-mono text-xs text-terminal-muted">
        <p>{siteConfig.footerText}</p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} {`{${bioData.name}}`}. {siteConfig.copyrightText}
        </p>
      </footer>
    </main>
  );
}

import TerminalHero from "@/components/TerminalHero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillGrid from "@/components/SkillGrid";
import SubstackFeed from "@/components/SubstackFeed";
import AIChatbox from "@/components/AIChatbox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <TerminalHero />
      <ExperienceSection />
      <SkillGrid />
      <SubstackFeed />
      <AIChatbox />
      <Footer />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI_OPERATIONS",
    skills: ["ChatGPT", "Claude", "Antigravity (IDE)", "Prompt Engineering", "Workflow Automation", "Agent Management"]
  },
  {
    category: "GROWTH_MARKETING",
    skills: ["Content Strategy", "Social Campaigns", "Growth Ops", "Community Building", "KOL Pipeline"]
  },
  {
    category: "WEB3_FLUENCY",
    skills: ["DeFi", "On-chain Analysis", "Ecosystem BD", "Skin in the game"]
  },
  {
    category: "SYSTEM_CORE",
    skills: ["English (Professional)", "Vietnamese (Native)", "Market Management", "Public Speaking"]
  }
];

export default function SkillGrid() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-mono font-bold text-accent">SKILL_INVENTORY</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-zinc-900 bg-zinc-900/10 flex flex-col gap-6"
          >
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
              <span className="w-1 h-3 bg-accent animate-pulse" />
              {group.category}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <div
                  key={skill}
                  className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-accent hover:border-accent transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-4 border border-accent/20 bg-accent/5 text-accent/70 font-mono text-[10px] md:text-xs text-center"
      >
        // SYSTEM_STATUS: ALL_SKILLS_LOADED_SUCCESSFULLY
      </motion.div>
    </section>
  );
}

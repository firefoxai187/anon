"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "IMPRESSIONS", value: "2M+" },
  { label: "WALLETS_ONBOARDED", value: "60K" },
  { label: "MEETUPS_HOSTED", value: "20+" },
  { label: "ONBOARDED_PROJECTS", value: "50+" },
  { label: "EXP_LEVEL", value: "SENIOR" },
];

export default function TerminalHero() {
  const [text, setText] = useState("");
  const fullText = "growth specialist. web3 native. turning ideas into the talk of CT.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4"
        >
          // VERSION 2.0.4 — SYSTEM_READY
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tighter group relative">
          <span className="relative z-10">JUSTIN.md</span>
          <span className="absolute inset-0 text-accent opacity-0 group-hover:opacity-100 group-hover:animate-glitch select-none pointer-events-none">
            JUSTIN.md
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg md:text-xl font-mono text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-accent underline decoration-accent/30 font-bold">~</span>
            <span>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-5 bg-accent"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-4 border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:border-accent/50 dark:hover:border-accent/50 transition-colors group crt-glow"
          >
            <div className="text-zinc-500 dark:text-zinc-500 text-[10px] font-mono mb-1 group-hover:text-accent/70 transition-colors">
              [ {stat.label} ]
            </div>
            <div className="text-2xl font-mono font-bold text-zinc-900 dark:text-zinc-200 group-hover:text-accent transition-colors">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <button 
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-accent text-white dark:text-black font-mono font-bold hover:bg-zinc-900 dark:hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          VIEW_WORK
        </button>
        <button 
          onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}
          className="px-8 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 font-mono hover:text-accent dark:hover:text-accent transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          // CHAT_WITH_JUSTIN.md
        </button>
      </div>
    </section>
  );
}


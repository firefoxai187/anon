"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { experienceData } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="work">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-mono font-bold text-accent">FEATURED_WORK</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experienceData.map((item, i) => (
          <Link key={item.slug} href={`/work/${item.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full flex flex-col justify-between p-6 border border-zinc-300 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:border-accent/50 dark:hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden crt-glow"
            >
              {/* Redacted hover overlay effect */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="space-y-4 mb-8">
                <div className="text-xs font-mono text-accent/70 tracking-widest uppercase">
                  {item.date}
                </div>
                <h3 className="text-2xl font-mono font-bold text-zinc-100 group-hover:text-accent transition-colors">
                  {item.company}
                </h3>
                <div className="text-zinc-500 font-mono text-xs uppercase leading-relaxed">
                  // {item.headline}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 border border-zinc-800 text-[10px] font-mono text-zinc-500">
                    --{tag.toLowerCase().replace(/ /g, "_")}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

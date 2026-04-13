"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import EmailLink from "./EmailLink";

export default function Footer() {
  const techStack = ["Next.js", "Tailwind CSS", "Framer Motion", "Gemini Flash"];
  
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-black mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4">
          <div className="text-2xl font-mono font-bold tracking-tighter">
            JUSTIN<span className="text-accent text-sm ml-1">.md</span>
          </div>
          <div className="text-zinc-600 font-mono text-xs">
            © {new Date().getFullYear()} — SYSTEM_TERMINATED_ACCESS_REVOKED
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(link => (
              link.label === "EMAIL" && (link as any).user ? (
                <EmailLink 
                  key={link.label}
                  user={(link as any).user}
                  domain={(link as any).domain}
                  label={`// ${link.label}`}
                  className="text-xs font-mono text-zinc-500 hover:text-accent transition-colors"
                />
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-500 hover:text-accent transition-colors"
                >
                  // {link.label}
                </a>
              )
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-zinc-900/50 text-[10px] font-mono text-zinc-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

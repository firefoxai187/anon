"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, User, Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/callmejustinnn@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Transmission from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("FormSubmit error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      {/* Terminal Title */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-mono font-bold text-accent flex items-center gap-3">
          <Terminal className="animate-pulse" size={28} />
          BROADCAST_MESSAGE
        </h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden group">
          {/* Subtle grid background for the form card */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none opacity-20" />
          
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label htmlFor="name" className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  <User size={12} className="text-accent" />
                  SENDER_ID
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border-b border-zinc-800 text-zinc-100 font-mono text-sm py-3 px-0 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-700"
                  placeholder="ENTER_NAME..."
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  <Mail size={12} className="text-accent" />
                  RETURN_ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border-b border-zinc-800 text-zinc-100 font-mono text-sm py-3 px-0 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-700"
                  placeholder="EMAIL@DOMAIN.COM"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label htmlFor="message" className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                <MessageSquare size={12} className="text-accent" />
                TRANSMISSION_BODY
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-zinc-800 p-4 text-zinc-100 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-zinc-700 resize-none"
                placeholder="CONSTRUCT_MESSAGE_HERE..."
              />
            </div>

            {/* Control Panel / Submit */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-900">
              <div className="text-[10px] font-mono text-zinc-600 hidden md:block">
                // SYSTEM_STATUS: READY_FOR_UPLINK
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative w-full md:w-auto px-10 py-4 bg-transparent border border-accent/40 text-accent font-mono text-sm font-bold overflow-hidden hover:bg-accent/5 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-accent shadow-[0_0_10px_#00FFFF] group-hover:h-full group-hover:opacity-10 transition-all pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "loading" ? (
                    <span className="flex items-center gap-2 italic">
                      ESTABLISHING_CONNECTION...
                      <span className="w-1 h-3 bg-accent animate-pulse" />
                    </span>
                  ) : (
                    <>
                      EXECUTE_BROADCAST <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Status Feedback Overlays */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_#00FFFF]">
                    <Terminal className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-accent mb-2">TRANSMISSION_COMPLETE</h3>
                  <p className="text-zinc-400 font-mono text-sm max-w-xs">
                    Message successfully uplinked to core system. Awaiting response...
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[10px] font-mono text-accent hover:underline uppercase tracking-widest"
                  >
                    // NEW_TRANSMISSION
                  </button>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-4 left-0 right-0 text-center"
                >
                  <p className="text-rose-500 font-mono text-[10px] uppercase tracking-tighter">
                    ERROR: CONNECTION_TIMEOUT. RETRY_REQUIRED.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

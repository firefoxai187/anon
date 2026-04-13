"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-5xl font-sans font-bold text-[#FF6347] mb-6 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-zinc-500 max-w-md leading-relaxed">
          Have something in mind or want to collaborate? Feel free to reach out. I'll get back to you as soon as possible. 🌸
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[40px] p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-rose-50/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-zinc-800 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all text-zinc-900 placeholder:text-zinc-400"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-zinc-800 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all text-zinc-900 placeholder:text-zinc-400"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-zinc-800 ml-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all text-zinc-900 placeholder:text-zinc-400 resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-[#FF4B6C] to-[#FF8C42] text-white font-bold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,75,108,0.3)] hover:shadow-[0_15px_40px_rgba(255,75,108,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === "success" ? (
                "SENT_SUCCESSFULLY"
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
            
            {status === "error" && (
              <p className="text-center text-rose-500 text-sm font-mono mt-4">
                ERROR: Transmission failed. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

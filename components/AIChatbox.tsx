"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, Terminal, User, Bot, Loader2, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function AIChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "SYSTEM_ACCESS_GRANTED. I am JUSTIN.md. Ask me anything about my experience, skills, or Web3 projects." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage, history }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: "model", content: data.text }]);
      } else {
        throw new Error("EMPTY_RESPONSE");
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", content: "ERROR: Failed to establish neural link. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] border border-zinc-800 bg-zinc-50 dark:bg-zinc-950 rounded-lg overflow-hidden flex flex-col h-[500px] shadow-2xl crt-glow"
            >
              {/* Terminal Header */}
              <div className="bg-zinc-200 dark:bg-zinc-900 px-4 py-2 border-b border-zinc-300 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-zinc-500" />
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-none">
                    JUSTIN_SESSION_v2.0
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-accent transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Messages area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide font-mono text-xs"
              >
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                      "flex gap-3",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {m.role === "model" && <Bot size={14} className="text-accent mt-1 flex-shrink-0" />}
                    <div className={cn(
                      "max-w-[85%] p-2.5 rounded border",
                      m.role === "user" 
                        ? "bg-zinc-200 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200" 
                        : "bg-accent/10 border-accent/20 text-accent/90"
                    )}>
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                    {m.role === "user" && <User size={14} className="text-zinc-500 mt-1 flex-shrink-0" />}
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <Bot size={14} className="text-accent mt-1 animate-pulse" />
                    <div className="bg-accent/10 border border-accent/20 p-2.5 rounded flex items-center gap-2">
                      <Loader2 size={12} className="animate-spin text-accent" />
                      <span className="text-accent/50 text-[10px] italic">PROCESSING...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <form onSubmit={handleSubmit} className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border-t border-zinc-300 dark:border-zinc-800">
                <div className="relative">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Query the system..."
                    className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-800 rounded px-3 py-2.5 pl-8 text-xs font-mono text-zinc-900 dark:text-accent placeholder:text-zinc-500 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <Terminal size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-500 hover:text-accent disabled:opacity-50 transition-colors"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-accent text-zinc-950 rounded-none border-2 border-accent hover:bg-zinc-950 hover:text-accent shadow-[0_0_15px_rgba(0,255,255,0.3)] flex items-center justify-center transition-colors relative"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border border-zinc-950 rounded-full animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  );
}

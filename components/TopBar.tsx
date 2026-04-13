"use client";

import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { MatrixEffect } from "./MatrixEffect";

export default function TopBar() {
  const [mounted, setMounted] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <MatrixEffect isActive={matrixActive} onComplete={() => setMatrixActive(false)} />
      
      <div className="fixed top-0 left-0 right-0 z-[60] p-4 flex justify-end pointer-events-none">
        <div className="flex gap-2 pointer-events-auto bg-zinc-950/80 border border-zinc-800 p-1 backdrop-blur-sm">
          <button
            onClick={() => setMatrixActive(true)}
            disabled={matrixActive}
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-zinc-400 hover:text-accent hover:bg-zinc-900 transition-colors disabled:opacity-50"
          >
            <Terminal size={14} />
            <span className="hidden sm:inline">// PROTOCOL_M</span>
          </button>
        </div>
      </div>
    </>
  );
}

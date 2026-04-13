"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }: { images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images!.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images!.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[21/9] border border-dashed border-zinc-700/50 bg-zinc-950/50 flex flex-col items-center justify-center text-zinc-600 font-mono relative group mb-4">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <span className="text-[10px]">IMG_SRC_MISSING</span>
        <span className="text-[8px] mt-1 opacity-50 px-2 text-center">
          No images provided for this campaign.
        </span>
      </div>
    );
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="w-full aspect-[21/9] relative border border-zinc-800 bg-zinc-950 overflow-hidden group mb-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Campaign slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(true)}
            className="absolute inset-0 w-full h-full object-contain opacity-90 cursor-zoom-in group-hover:opacity-100 transition-opacity"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

        {images.length > 1 && (
          <>
            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-1.5 bg-black/80 backdrop-blur border border-zinc-700 text-zinc-300 hover:text-accent transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-1.5 bg-black/80 backdrop-blur border border-zinc-700 text-zinc-300 hover:text-accent transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Indicator Tracker */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2 py-1 pointer-events-none">
              <p className="text-[10px] font-mono text-zinc-400">
                [ <span className="text-accent">{currentIndex + 1}</span> / {images.length} ]
              </p>
            </div>
          </>
        )}
      </div>

      {/* Lightbox / Popup Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={images[currentIndex]}
              alt={`Fullscreen slide ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {images.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 bg-zinc-900/80 border border-zinc-800 p-2 rounded-full pointer-events-auto">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
                  className="p-2 text-zinc-400 hover:text-accent transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="font-mono text-xs text-zinc-500">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(e); }}
                  className="p-2 text-zinc-400 hover:text-accent transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
            
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white font-mono text-sm pointer-events-auto"
            >
              [ESC_CLOSE]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

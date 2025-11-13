"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Volver arriba">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 via-slate-300/20 to-slate-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full scale-150" />

          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-300/40 dark:border-slate-700/40 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-slate-400/60 dark:group-hover:border-slate-600/60 group-hover:-translate-y-1">
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300" />
          </div>

          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
              Volver arriba
            </div>
          </div>
        </button>
      )}
    </>
  );
}

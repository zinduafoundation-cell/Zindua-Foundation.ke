"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".page-transition section, .page-transition article, .page-transition .zindua-card, .page-transition h1, .page-transition h2, .page-transition h3, .page-transition p, .page-transition a, .page-transition .section-tag, .page-transition .brand-btn, .page-transition .brand-btn-secondary"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add("reveal-ready");
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    revealTargets.forEach((element, index) => {
      const target = element as HTMLElement;
      target.dataset.reveal = "true";
      target.style.setProperty("--reveal-delay", `${index * 90}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -18, scale: 0.985, filter: "blur(8px)" }}
        transition={{
          duration: 0.72,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.06,
        }}
        className="page-transition"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="page-transition-glow"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

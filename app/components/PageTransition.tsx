"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
        transition={{ 
          duration: 0.65, 
          ease: [0.23, 0.98, 0.38, 1],
          delay: 0.08
        }}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

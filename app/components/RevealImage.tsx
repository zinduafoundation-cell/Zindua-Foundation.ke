"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ImageEffect =
  | "zoom"
  | "slide"
  | "clip"
  | "blur"
  | "rotate"
  | "lift";

interface RevealImageProps {
  src: string;
  alt: string;
  effect?: ImageEffect;
  className?: string;
  priority?: boolean;
}

export default function RevealImage({
  src,
  alt,
  effect = "zoom",
  className = "",
  priority = false,
}: RevealImageProps) {
  const variants: Record<string, any> = {
    zoom: {
      hidden: {
        opacity: 0,
        scale: 1.18,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },

    slide: {
      hidden: {
        opacity: 0,
        x: -80,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    clip: {
      hidden: {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      },
      visible: {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
      },
    },

    blur: {
      hidden: {
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.05,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      },
    },

    rotate: {
      hidden: {
        opacity: 0,
        rotate: -5,
        scale: 0.92,
      },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
      },
    },

    lift: {
      hidden: {
        opacity: 0,
        y: 80,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={variants[effect]}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-[900ms] ease-out group-hover:scale-106"
          priority={priority}
        />
      </div>

      {/* Hover shine */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.9 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-white/10 blur-xl"
      />
    </motion.div>
  );
}

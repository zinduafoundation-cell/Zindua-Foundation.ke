"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  X,
  Maximize2,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Category =
  | "All"
  | "Youth"
  | "Pads"
  | "Environment"
  | "Community"
  | "Events";

type GalleryItem = {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  size: "tall" | "wide" | "normal";
};

const gallery: GalleryItem[] = [
  {
    src: "/images/story/youth.jpg",
    title: "Young minds, new possibilities",
    category: "Youth",
    description:
      "Moments from Zindua's youth-focused community work.",
    size: "tall",
  },
  {
    src: "/images/story/pads.jpg",
    title: "Dignity matters",
    category: "Pads",
    description:
      "Supporting girls and young women with essential menstrual hygiene resources.",
    size: "wide",
  },
  {
    src: "/images/story/trees.jpg",
    title: "Planting tomorrow",
    category: "Environment",
    description:
      "Community members taking action for a greener future.",
    size: "normal",
  },
  {
    src: "/images/story/community.jpg",
    title: "Stronger together",
    category: "Community",
    description:
      "Building connections through community action.",
    size: "tall",
  },
  {
    src: "/images/story/foundation.jpg",
    title: "A day of action",
    category: "Events",
    description:
      "People coming together around a shared purpose.",
    size: "normal",
  },
  {
    src: "/images/impact/people-1.jpg",
    title: "The next generation",
    category: "Youth",
    description:
      "Creating spaces where young people can learn, participate and lead.",
    size: "wide",
  },
  {
    src: "/images/story/imega.png.jpeg",
    title: "Care with dignity",
    category: "Pads",
    description:
      "Making essential resources more accessible.",
    size: "normal",
  },
  {
    src: "/images/impact/people-2.jpg",
    title: "Green communities",
    category: "Environment",
    description:
      "Every tree is a small investment in tomorrow.",
    size: "tall",
  },
  {
    src: "/images/story/imegs.png.jpeg",
    title: "People make the difference",
    category: "Community",
    description:
      "Community is at the center of meaningful change.",
    size: "wide",
  },
  {
    src: "/images/impact/people-3.jpg",
    title: "Together in action",
    category: "Events",
    description:
      "Celebrating people who choose to participate.",
    size: "normal",
  },
];

const categories: Category[] = [
  "All",
  "Youth",
  "Pads",
  "Environment",
  "Community",
  "Events",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selected, setSelected] =
    useState<GalleryItem | null>(null);

  const [selectedIndex, setSelectedIndex] =
    useState<number>(0);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === activeCategory
        );

  function openImage(item: GalleryItem) {
    const index = filtered.findIndex(
      (image) => image.src === item.src
    );

    setSelectedIndex(index);
    setSelected(item);
  }

  function closeImage() {
    setSelected(null);
  }

  function nextImage() {
    if (!filtered.length) return;

    const next =
      (selectedIndex + 1) % filtered.length;

    setSelectedIndex(next);
    setSelected(filtered[next]);
  }

  function previousImage() {
    if (!filtered.length) return;

    const previous =
      (selectedIndex - 1 + filtered.length) %
      filtered.length;

    setSelectedIndex(previous);
    setSelected(filtered[previous]);
  }

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (!selected) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [selected, selectedIndex]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B3D38] text-[#F3EBDD]">
      {/* HERO */}

      <section className="relative flex min-h-screen items-end overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image src="/images/story/youth.jpg" alt="" fill className="object-cover opacity-50" />
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-[#061826]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-[#061826]/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-xs uppercase tracking-[0.35em] text-[#35C759]"
          >
            Visual stories
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-6xl text-6xl font-black leading-[0.8] tracking-[-0.07em] md:text-[10rem]"
          >
            See the
            <br />
            <span className="text-[#35C759]">
              difference.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
          >
            A collection of moments, people and places that
            form part of the Zindua Foundation journey.
          </motion.p>

        </div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/30 md:flex"
        >
          Explore
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* INTRO */}

      <section className="bg-[#F7F8F4] px-5 py-28 text-[#061826] md:px-10 md:py-40">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <motion.h2
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
          >
            Every picture
            <br />
            tells a
            <br />
            <span className="text-[#061826]/20">
              story.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="self-end text-xl leading-9 text-[#061826]/55 md:text-2xl"
          >
            From youth initiatives to environmental action,
            these moments show the people behind the work and
            the communities at the center of it.
          </motion.p>

        </div>

      </section>


      {/* FILTERS */}

      <section className="bg-[#061826] px-5 pt-24 md:px-10 md:pt-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex gap-2 overflow-x-auto pb-4">

            {categories.map((category) => {

              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${
                    active
                      ? "bg-[#35C759] text-[#061826]"
                      : "border border-white/10 bg-white/[0.03] text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="bg-[#061826] px-5 py-12 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <motion.div
            layout
            className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filtered.map((item, index) => (

                <motion.button
                  key={item.src}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.035,
                  }}
                  onClick={() =>
                    openImage(item)
                  }
                  className={`group relative overflow-hidden rounded-[1.5rem] text-left ${
                    item.size === "tall"
                      ? "md:row-span-2"
                      : item.size === "wide"
                        ? "md:col-span-2"
                        : ""
                  }`}
                >

                  <motion.img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />

                  {/* overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

                  {/* number */}

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] backdrop-blur-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* expand */}

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100">
                    <Maximize2 size={15} />
                  </span>

                  {/* text */}

                  <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#35C759]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {item.title}
                    </h3>

                  </div>

                </motion.button>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>


      {/* QUOTE */}

      <section className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#061826]/40">
              The bigger picture
            </p>

            <h2 className="mt-8 max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl">
              Behind every
              <br />
              photograph is
              <br />
              <span className="text-[#061826]/25">
                a person.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#061826]/60">
              Our work is ultimately about people — their dignity,
              potential, dreams and ability to create change.
            </p>

          </motion.div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl text-center">

          <motion.h2
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
          >
            Want to be part
            <br />
            of the next
            <br />
            <span className="text-[#061826]/20">
              story?
            </span>
          </motion.h2>

          <a
            href="/get-involved"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition hover:scale-105"
          >
            Get involved
            <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#061826] px-5 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <Image
            src="/images/logo/zindua-logo.png"
            alt="Zindua Foundation"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />

          <div className="flex flex-wrap gap-6 text-xs text-white/30">

            <a href="/about" className="transition hover:text-white">
              Our Story
            </a>

            <a href="/programs" className="transition hover:text-white">
              Programs
            </a>

            <a href="/impact" className="transition hover:text-white">
              Impact
            </a>

            <a href="/gallery" className="text-white">
              Gallery
            </a>

            <a
              href="/get-involved"
              className="transition hover:text-white"
            >
              Get involved
            </a>

          </div>

        </div>

      </footer>


      {/* LIGHTBOX */}

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b12]/95 p-4 backdrop-blur-xl md:p-10"
            onClick={closeImage}
          >

            {/* close */}

            <button
              onClick={closeImage}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#35C759] hover:text-[#061826]"
            >
              <X size={20} />
            </button>


            {/* previous */}

            <button
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#35C759] hover:text-[#061826] md:left-8"
            >
              <ArrowLeft size={20} />
            </button>


            {/* next */}

            <button
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#35C759] hover:text-[#061826] md:right-8"
            >
              <ArrowRight size={20} />
            </button>


            {/* image */}

            <motion.div
              key={selected.src}
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <Image
                src={selected.src}
                alt={selected.title}
                width={1200}
                height={800}
                className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />

              <div className="mt-5">

                <p className="text-xs uppercase tracking-[0.3em] text-[#35C759]">
                  {selected.category}
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {selected.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                  {selected.description}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}
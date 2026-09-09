"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Clock3,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Youth" | "Environment" | "Community" | "Updates";

type Story = {
  image: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
};

const stories: Story[] = [
  {
    image: "/images/stories/story-1.jpg",
    category: "Youth",
    date: "August 18, 2026",
    readTime: "4 min read",
    title: "Creating spaces where young people can thrive",
    excerpt:
      "Young people need more than opportunities. They need spaces where their ideas, confidence and potential can grow.",
  },
  {
    image: "/images/stories/story-2.jpg",
    category: "Environment",
    date: "August 10, 2026",
    readTime: "3 min read",
    title: "Every tree is a promise to tomorrow",
    excerpt:
      "Community-led environmental action can create healthier spaces while giving young people a reason to participate.",
  },
  {
    image: "/images/stories/story-3.jpg",
    category: "Community",
    date: "August 03, 2026",
    readTime: "5 min read",
    title: "When a community chooses to show up",
    excerpt:
      "Real change begins when people decide that the challenges around them are worth solving together.",
  },
  {
    image: "/images/stories/story-4.jpg",
    category: "Youth",
    date: "July 27, 2026",
    readTime: "4 min read",
    title: "The power of giving young people a voice",
    excerpt:
      "Listening to young people is one of the first steps toward building programs that actually serve them.",
  },
  {
    image: "/images/stories/story-5.jpg",
    category: "Updates",
    date: "July 19, 2026",
    readTime: "3 min read",
    title: "Inside the Zindua Foundation journey",
    excerpt:
      "A look at the people, ideas and community efforts shaping the next chapter of Zindua.",
  },
  {
    image: "/images/stories/story-6.jpg",
    category: "Environment",
    date: "July 11, 2026",
    readTime: "4 min read",
    title: "Growing greener communities",
    excerpt:
      "Environmental responsibility becomes more powerful when communities make it part of everyday life.",
  },
];

const categories: Category[] = [
  "All",
  "Youth",
  "Environment",
  "Community",
  "Updates",
];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredStories =
    activeCategory === "All"
      ? stories
      : stories.filter(
          (story) => story.category === activeCategory
        );

  const featuredStory = stories[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061826] text-[#F7F8F4]">



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
            <Image src="/images/stories/story-1.jpg" alt="" fill className="object-cover opacity-45" />
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-[#061826]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-[#061826]/30 to-[#061826]/20" />

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
            Zindua Journal
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
            Stories
            <br />
            that
            <br />
            <span className="text-[#35C759]">
              move.
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
              delay: 0.4,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
          >
            Discover stories from our communities, learn about
            our work and follow the people helping shape the
            Zindua journey.
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
          Read on
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* FEATURED STORY */}

      <section className="bg-[#F7F8F4] px-5 py-28 text-[#061826] md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                Featured story
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                From the field.
              </h2>

            </div>

            <div className="hidden text-sm text-[#061826]/30 md:block">
              01 / {String(stories.length).padStart(2, "0")}
            </div>

          </div>


          <motion.a
            href="#"
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
            transition={{
              duration: 0.9,
            }}
            className="group grid overflow-hidden rounded-[2rem] bg-[#061826] lg:grid-cols-[1.15fr_0.85fr]"
          >

            <div className="relative min-h-[420px] overflow-hidden">

              <motion.img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.8,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-[#35C759] px-4 py-2 text-xs font-black text-[#061826]">
                FEATURED
              </div>

            </div>


            <div className="flex flex-col justify-between p-8 text-white md:p-12">

              <div>

                <div className="flex flex-wrap gap-4 text-xs text-white/30">

                  <span className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    {featuredStory.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {featuredStory.readTime}
                  </span>

                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#35C759]">
                  {featuredStory.category}
                </p>

                <h3 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl">
                  {featuredStory.title}
                </h3>

                <p className="mt-6 leading-7 text-white/40">
                  {featuredStory.excerpt}
                </p>

              </div>


              <div className="mt-12 flex items-center gap-3 font-bold">

                Read story

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#35C759] text-[#061826] transition duration-500 group-hover:translate-x-2">
                  <ArrowRight size={17} />
                </span>

              </div>

            </div>

          </motion.a>

        </div>

      </section>


      {/* STORIES */}

      <section className="bg-[#061826] px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
                Latest stories
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl">
                What's
                <br />
                happening.
              </h2>

            </div>


            {/* FILTER */}

            <div className="flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => {

                const active =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition ${
                      active
                        ? "bg-[#35C759] text-[#061826]"
                        : "border border-white/10 text-white/40 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}

            </div>

          </div>


          {/* CARDS */}

          <motion.div
            layout
            className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {filteredStories.map(
              (story, index) => (

                <motion.article
                  layout
                  key={story.title}
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
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-xl">
                      {story.category}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="p-6">

                    <div className="flex items-center gap-4 text-[11px] text-white/25">

                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        {story.date}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={12} />
                        {story.readTime}
                      </span>

                    </div>

                    <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em]">
                      {story.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/40">
                      {story.excerpt}
                    </p>


                    <a
                      href="#"
                      className="group/link mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold"
                    >

                      Read story

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover/link:border-[#35C759] group-hover/link:bg-[#35C759] group-hover/link:text-[#061826]">
                        <ChevronRight size={16} />
                      </span>

                    </a>

                  </div>

                </motion.article>

              )
            )}

          </motion.div>

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="bg-[#0B2940] px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
                Stay informed
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Don't miss
                <br />
                the next
                <br />
                chapter.
              </h2>

            </div>


            <form
              onSubmit={(event) =>
                event.preventDefault()
              }
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >

              <p className="text-sm leading-6 text-white/40">
                Subscribe for Zindua updates, community stories
                and announcements.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#35C759]"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#35C759] px-6 py-4 text-sm font-black text-[#061826] transition hover:scale-105"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <motion.h2
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
            className="max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
          >
            Don't just read
            <br />
            about change.
            <br />
            <span className="text-[#061826]/25">
              Be part of it.
            </span>
          </motion.h2>

          <a
            href="/get-involved"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition hover:scale-105"
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

            <a
              href="/about"
              className="transition hover:text-white"
            >
              Our Story
            </a>

            <a
              href="/programs"
              className="transition hover:text-white"
            >
              Programs
            </a>

            <a
              href="/impact"
              className="transition hover:text-white"
            >
              Impact
            </a>

            <a
              href="/gallery"
              className="transition hover:text-white"
            >
              Gallery
            </a>

            <a
              href="/stories"
              className="text-white"
            >
              Stories
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

    </main>
  );
}
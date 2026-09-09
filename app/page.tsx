"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    title: "Youth dreams in motion",
    image: "/images/story/youth.jpg",
    eyebrow: "Talent is everywhere",
  },
  {
    title: "Community care that lifts people up",
    image: "/images/story/community.jpg",
    eyebrow: "People first",
  },
  {
    title: "Support for dignity and growth",
    image: "/images/programs/pads.jpg",
    eyebrow: "Care & opportunity",
  },
  {
    title: "Growing greener futures",
    image: "/images/programs/trees.jpg",
    eyebrow: "Environment & resilience",
  },
  {
    title: "A future built together",
    image: "/images/impact/hero.jpg",
    eyebrow: "Stronger communities",
  },
];

const metrics = [
  { value: "2500+", label: "young people reached" },
  { value: "18", label: "community initiatives" },
  { value: "9", label: "program pillars" },
];

const programs = [
  {
    title: "Youth empowerment",
    text: "Strengthening confidence, creativity, and opportunity through practical support and mentorship.",
    Icon: Users,
  },
  {
    title: "Menstrual dignity",
    text: "Providing essential resources that help girls stay safe, confident, and focused on learning.",
    Icon: Sparkles,
  },
  {
    title: "Environment care",
    text: "Encouraging young people and communities to protect and restore the places they call home.",
    Icon: Leaf,
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            key={heroSlides[activeSlide].image}
            src={heroSlides[activeSlide].image}
            alt={heroSlides[activeSlide].title}
            className="h-full w-full object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-[rgba(11,61,56,0.52)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] via-[rgba(11,61,56,0.35)] to-[rgba(11,61,56,0.2)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,61,56,0.82)] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="text-2xl">🇰🇪</span>
                <div className="h-px w-10 bg-[var(--zindua-gold)]/60" />
                <Globe2 size={16} className="text-[var(--zindua-gold)]" />
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--zindua-ivory)]/70">
                  Kenya • Africa • World
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mb-5 text-sm uppercase tracking-[0.4em] text-[var(--zindua-gold)]"
              >
                Unlocking human potential
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18vw] font-black leading-[0.72] tracking-[-0.09em] text-[var(--zindua-ivory)] md:text-[10rem]"
              >
                ZINDUA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10, letterSpacing: "0.8em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.42em" }}
                transition={{ duration: 1, delay: 0.35 }}
                className="mt-2 text-sm font-black uppercase text-[var(--zindua-gold)] md:text-xl"
              >
                FOUNDATION
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.5 }}
                className="mt-10"
              >
                <h2 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
                  Talent is everywhere.
                  <br />
                  <span className="text-[var(--zindua-gold)]">Opportunity should be too.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--zindua-ivory)]/70 md:text-base">
                  Zindua Foundation connects young people with knowledge, technology, mentorship and opportunities that help them build brighter futures and create lasting change in their communities.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#story"
                    className="brand-btn group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-bold transition hover:scale-[1.02]"
                  >
                    Discover Zindua
                    <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </a>

                  <a
                    href="/Programs"
                    className="brand-btn-secondary inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[var(--text-main)] backdrop-blur-xl transition hover:scale-[1.02]"
                  >
                    Explore our work
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative ml-auto w-full max-w-xl"
            >
              <div className="zindua-glass overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-[0_30px_90px_rgba(3,16,15,0.4)] backdrop-blur-xl">
                <div className="relative h-[460px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src={heroSlides[activeSlide].image}
                    alt={heroSlides[activeSlide].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,31,30,0.8)] via-transparent to-[rgba(8,31,30,0.15)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--zindua-ivory)]/80 backdrop-blur-md">
                      {heroSlides[activeSlide].eyebrow}
                    </div>
                    <h3 className="max-w-sm text-2xl font-black leading-tight tracking-[-0.05em] text-[var(--zindua-ivory)] md:text-3xl">
                      {heroSlides[activeSlide].title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show ${slide.title}`}
                      className={`overflow-hidden rounded-xl border transition ${
                        index === activeSlide
                          ? "border-[var(--zindua-gold)] shadow-[0_0_0_1px_rgba(217,168,103,0.45)]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img src={slide.image} alt={slide.title} className="h-16 w-full object-cover md:h-20" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[var(--bg-base)] px-5 py-24 md:px-10 md:py-32">
        <div className="masonry-grid mx-auto max-w-7xl">
          {metrics.map((metric) => (
            <div key={metric.label} className="masonry-item zindua-card p-7 md:p-8">
              <p className="text-4xl font-black tracking-[-0.06em] text-[var(--zindua-gold)] md:text-5xl">{metric.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--text-soft)]">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--zindua-ivory)] px-5 py-24 text-[var(--zindua-forest)] md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">What we do</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Rooted in care. Built for impact.</h2>
            </div>
            <div className="hidden text-sm text-[var(--zindua-forest)]/50 md:block">01 / 03</div>
          </div>

          <div className="masonry-grid">
            {programs.map(({ title, text, Icon }) => (
              <motion.article
                key={title}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
                className="masonry-item zindua-card bg-[rgba(11,61,56,0.02)] p-7 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 leading-7 text-[var(--light-soft)]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-base)] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="zindua-card overflow-hidden">
            <div className="relative h-[420px]">
              <img src="/images/story/community.jpg" alt="Community members" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] via-[rgba(11,61,56,0.15)] to-transparent" />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Why we exist</p>
            <h2 className="mt-6 text-4xl font-black leading-[0.9] tracking-[-0.05em] md:text-6xl">
              Potential should never be limited by circumstance.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--text-soft)]">
              We build spaces where young people can access practical support, mentorship, and opportunities that help them grow into confident leaders in their own communities.
            </p>
            <a href="/About" className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[var(--zindua-gold)]">
              Our story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--zindua-forest)] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Join the movement</p>
          <h2 className="mt-6 text-4xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">Be part of something bigger.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text-soft)]">
            Your time, resources, or voice can help create an opportunity for someone else to rise.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/get-involved" className="rounded-full bg-[var(--zindua-gold)] px-6 py-3.5 font-bold text-[var(--zindua-forest)] transition hover:scale-[1.02]">Get involved</a>
            <a href="/Contact" className="rounded-full border border-[var(--surface-border)] px-6 py-3.5 font-bold text-[var(--zindua-ivory)] transition hover:border-[var(--zindua-gold)]">Contact us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

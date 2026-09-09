"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";

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
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/story/youth.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/zinduaintro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[rgba(11,61,56,0.52)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] via-[rgba(11,61,56,0.35)] to-[rgba(11,61,56,0.2)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,61,56,0.78)] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36">
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
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--zindua-ivory)] px-6 py-3.5 font-bold text-[var(--zindua-forest)] transition hover:scale-[1.02]"
                >
                  Discover Zindua
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>

                <a
                  href="/Programs"
                  className="rounded-full border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-6 py-3.5 text-[var(--zindua-ivory)] backdrop-blur-xl transition hover:bg-[rgba(255,255,255,0.1)]"
                >
                  Explore our work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[var(--bg-base)] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="zindua-card p-7 md:p-8">
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

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map(({ title, text, Icon }) => (
              <motion.article
                key={title}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
                className="zindua-card bg-[rgba(11,61,56,0.02)] p-7 md:p-8"
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

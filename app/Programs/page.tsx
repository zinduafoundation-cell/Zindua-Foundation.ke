"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Leaf,
  Shirt,
  Sparkles,
  Users,
} from "lucide-react";
import { useRef } from "react";
import RevealImage from "../components/RevealImage";
import Image from "next/image";

const programs = [
  {
    number: "01",
    title: "Menstrual Health",
    shortTitle: "Dignity.",
    description:
      "Supporting girls and young women with menstrual hygiene resources, education and a safe environment where they can continue learning and participating fully in everyday life.",
    image: "/images/programs/pads.jpg",
    effect: "clip" as const,
    icon: Heart,
  },
  {
    number: "02",
    title: "Clothing & Essentials",
    shortTitle: "Care.",
    description:
      "Providing practical support and essential items to young people and families who need a helping hand.",
    image: "/images/programs/clothes.jpg",
    effect: "rotate" as const,
    icon: Shirt,
  },
  {
    number: "03",
    title: "Youth Empowerment",
    shortTitle: "Potential.",
    description:
      "Creating opportunities for young people to learn, connect, develop confidence and discover pathways toward a brighter future.",
    image: "/images/programs/youth.jpg",
    effect: "zoom" as const,
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Tree Planting",
    shortTitle: "Tomorrow.",
    description:
      "Bringing young people and communities together to restore nature, plant trees and take action for a healthier environment.",
    image: "/images/programs/trees.jpg",
    effect: "blur" as const,
    icon: Leaf,
  },
  {
    number: "05",
    title: "Community Support",
    shortTitle: "Together.",
    description:
      "Working alongside communities to identify needs, create practical solutions and build a culture of people helping people.",
    image: "/images/programs/community.jpg",
    effect: "lift" as const,
    icon: Users,
  },
];

export default function ProgramsPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main className="overflow-hidden bg-[#061826] text-[#F7F8F4]">

    


      {/* HERO */}

      <section
        ref={heroRef}
        className="relative flex min-h-screen items-end overflow-hidden"
      >

        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >

          <RevealImage
            src="/images/programs/youth.jpg"
            alt="Young people participating in a community program"
            effect="zoom"
            className="h-full w-full"
          />

          <div className="absolute inset-0 bg-[#061826]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-[#061826]/30" />

        </motion.div>


        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.35em] text-[#35C759]"
          >
            What we do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-6xl text-6xl font-black leading-[0.82] tracking-[-0.07em] md:text-[9rem]"
          >
            Turning
            <br />
            <span className="text-[#35C759]">
              care into action.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg"
          >
            From essential support to youth empowerment and
            environmental action, our programs are designed to
            create practical change where it matters.
          </motion.p>

        </div>


        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          Explore our work
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* INTRO */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2">

            <motion.h2
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
            >
              Five ways
              <br />
              to create
              <br />
              <span className="text-[#061826]/20">
                change.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end"
            >
              <p className="max-w-xl text-xl leading-9 text-[#061826]/60 md:text-2xl">
                Our work starts with people. We listen to
                communities, identify meaningful needs and create
                practical ways to respond.
              </p>
            </motion.div>

          </div>

        </div>

      </section>


      {/* PROGRAMS */}

      <section className="bg-[#061826]">

        {programs.map((program, index) => {

          const Icon = program.icon;

          const isGreen = index % 2 === 1;

          return (
            <article
              key={program.number}
              className={`relative px-5 py-24 md:px-10 md:py-40 ${
                isGreen ? "bg-[#0B2940]" : "bg-[#061826]"
              }`}
            >

              <div className="mx-auto max-w-7xl">

                <div
                  className={`grid gap-12 lg:grid-cols-12 lg:items-center ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* IMAGE */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -70 : 70,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-7"
                  >

                    <div className="relative">

                      <RevealImage
                        src={program.image}
                        alt={program.title}
                        effect={program.effect}
                        className="h-[460px] rounded-[2rem] md:h-[600px]"
                      />

                      <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#061826]/60 px-4 py-2 text-xs font-bold tracking-[0.25em] backdrop-blur-xl">
                        {program.number}
                      </div>

                    </div>

                  </motion.div>


                  {/* CONTENT */}

                  <motion.div
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15,
                    }}
                    className="lg:col-span-5"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35C759]/10 text-[#35C759]">
                      <Icon size={27} />
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#35C759]">
                      {program.shortTitle}
                    </p>

                    <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
                      {program.title}
                    </h2>

                    <p className="mt-7 max-w-lg text-lg leading-8 text-white/50">
                      {program.description}
                    </p>

                    <a
                      href="#get-involved"
                      className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm transition hover:border-[#35C759]/50 hover:bg-[#35C759] hover:text-[#061826]"
                    >
                      Learn more

                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </a>

                  </motion.div>

                </div>

              </div>

            </article>
          );
        })}

      </section>


      {/* PRINCIPLE */}

      <section className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#061826]/60"
          >
            Our approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-8 max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
          >
            Small actions.
            <br />
            Real people.
            <br />
            Lasting impact.
          </motion.h2>

        </div>

      </section>


      {/* CTA */}

      <section
        id="get-involved"
        className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                Be part of it
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
              >
                Change
                <br />
                needs
                <br />
                <span className="text-[#061826]/20">
                  all of us.
                </span>
              </motion.h2>

            </div>


            <div>

              <p className="text-xl leading-9 text-[#061826]/60">
                Whether you want to volunteer, partner, donate
                resources or simply help spread the word, there is
                a place for you in the Zindua movement.
              </p>

              <a
                href="/#get-involved"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition hover:scale-105"
              >
                Get involved

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#061826] px-5 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <Image
            src="/images/logo/zindualogo.png"
            alt="Zindua Foundation"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Zindua Foundation. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
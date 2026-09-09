"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Leaf,
  Users,
} from "lucide-react";
import { useRef } from "react";
import RevealImage from "../components/RevealImage";
import Image from "next/image";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{ duration: 0.8 }}
    >
      {isInView ? value.toLocaleString() : "0"}
      {suffix}
    </motion.span>
  );
}

const impactAreas = [
  {
    number: "01",
    title: "Young people",
    description:
      "Creating opportunities for young people to access support, knowledge and meaningful community experiences.",
    icon: Users,
  },
  {
    number: "02",
    title: "Dignity",
    description:
      "Helping make essential resources more accessible to people who need practical support.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Environment",
    description:
      "Encouraging communities to take action for greener and healthier surroundings.",
    icon: Leaf,
  },
];

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#061826] text-[#F7F8F4]">



      {/* HERO */}

      <section className="relative flex min-h-screen items-end overflow-hidden">

        <div className="absolute inset-0">

          <RevealImage
            src="/images/impact/hero.jpg"
            alt="Zindua Foundation community impact"
            effect="blur"
            className="h-full w-full"
          />

          <div className="absolute inset-0 bg-[#061826]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-[#061826]/30" />

        </div>


        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.35em] text-[#35C759]"
          >
            Our impact
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
            Change you
            <br />
            <span className="text-[#35C759]">
              can see.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
          >
            Every action matters. Every person matters. Our impact
            grows through the people and communities who choose to
            take action together.
          </motion.p>

        </div>


        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          See the difference
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* INTRO */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-12">

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                Beyond numbers
              </p>

              <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Impact is
                <br />
                human.
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-7"
            >

              <p className="text-xl leading-9 text-[#061826]/70 md:text-2xl">
                Numbers help us understand the scale of our work.
                But real impact lives in the people behind those
                numbers.
              </p>

              <p className="mt-8 text-lg leading-8 text-[#061826]/50">
                A girl able to stay in school. A young person
                discovering a new possibility. A community planting
                trees together. These are the moments that give
                meaning to what we do.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* BIG NUMBERS */}

      <section className="bg-[#35C759] px-5 py-24 text-[#061826] md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#061826]/10 md:grid-cols-3">

            {/* STAT 1 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#35C759] p-8 md:p-12"
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#061826]/50">
                People reached
              </p>

              <div className="mt-12 text-6xl font-black tracking-[-0.06em] md:text-8xl">
                <Counter value={0} suffix="+" />
              </div>

              <p className="mt-5 max-w-xs leading-7 text-[#061826]/60">
                Replace this placeholder with the verified number
                supplied by the foundation.
              </p>

            </motion.div>


            {/* STAT 2 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-[#35C759] p-8 md:p-12"
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#061826]/50">
                Trees planted
              </p>

              <div className="mt-12 text-6xl font-black tracking-[-0.06em] md:text-8xl">
                <Counter value={0} suffix="+" />
              </div>

              <p className="mt-5 max-w-xs leading-7 text-[#061826]/60">
                Replace this placeholder with the foundation's
                verified environmental impact.
              </p>

            </motion.div>


            {/* STAT 3 */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#35C759] p-8 md:p-12"
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#061826]/50">
                Community actions
              </p>

              <div className="mt-12 text-6xl font-black tracking-[-0.06em] md:text-8xl">
                <Counter value={0} suffix="+" />
              </div>

              <p className="mt-5 max-w-xs leading-7 text-[#061826]/60">
                Replace this with a verified number of activities,
                events or community actions.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* IMPACT AREAS */}

      <section className="bg-[#061826] px-5 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-4xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
              Where it happens
            </p>

            <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Three things
              <br />
              matter most.
            </h2>

          </div>


          <div className="space-y-4">

            {impactAreas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  whileHover={{ x: 10 }}
                  className="group grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-[#35C759]/40 hover:bg-[#35C759]/5 md:grid-cols-12 md:p-10"
                >

                  <div className="flex items-start gap-5 md:col-span-2">

                    <span className="text-xs text-[#35C759]">
                      {area.number}
                    </span>

                    <Icon
                      size={24}
                      className="text-white/40 transition group-hover:text-[#35C759]"
                    />

                  </div>


                  <h3 className="text-3xl font-bold md:col-span-4 md:text-5xl">
                    {area.title}
                  </h3>


                  <p className="text-base leading-7 text-white/40 md:col-span-5 md:col-start-8">
                    {area.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* PHOTO MOSAIC */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                The people behind the work
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Real people.
                <br />
                Real moments.
              </h2>

            </div>

            <p className="max-w-md text-[#061826]/50">
              Replace these images with approved photographs from
              Zindua Foundation activities, events and communities.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-12">

            <RevealImage
              src="/images/impact/people-1.jpg"
              alt="Zindua Foundation community"
              effect="slide"
              className="h-[450px] rounded-[2rem] md:col-span-7"
            />

            <RevealImage
              src="/images/impact/people-2.jpg"
              alt="Young people participating in an activity"
              effect="rotate"
              className="h-[450px] rounded-[2rem] md:col-span-5"
            />

            <RevealImage
              src="/images/impact/people-3.jpg"
              alt="Community activity"
              effect="lift"
              className="h-[550px] rounded-[2rem] md:col-span-5"
            />

            <RevealImage
              src="/images/impact/people-4.jpg"
              alt="Environmental community action"
              effect="zoom"
              className="h-[550px] rounded-[2rem] md:col-span-7"
            />

          </div>

        </div>

      </section>


      {/* IMPACT STORY */}

      <section className="bg-[#0B2940] px-5 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
                One story
              </p>

              <h2 className="mt-7 text-5xl font-black leading-[0.9] md:text-7xl">
                Impact
                <br />
                starts with
                <br />
                one person.
              </h2>

              <p className="mt-8 leading-8 text-white/50">
                This section can later become a collection of real
                stories from the people and communities Zindua has
                worked with.
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >

              <RevealImage
                src="/images/story/community.jpg"
                alt="Zindua Foundation impact story"
                effect="clip"
                className="h-[600px] rounded-[2rem]"
              />

            </motion.div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section
        id="get-involved"
        className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48"
      >

        <div className="mx-auto max-w-7xl">

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
          >
            Want to help
            <br />
            create the next
            <br />
            <span className="text-[#061826]/30">
              impact story?
            </span>
          </motion.h2>


          <a
            href="/#get-involved"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition hover:scale-105"
          >
            Get involved

            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </a>

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
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import { useRef } from "react";
import RevealImage from "../components/RevealImage";
import Image from "next/image";

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1.2]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );

  return (
    <main className="overflow-hidden bg-[#0B3D38] text-[#F3EBDD]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >

        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
          }}
          className="absolute inset-0"
        >

          <RevealImage
            src="/images/story/foundation.jpg"
            alt="Young people and community members coming together"
            effect="blur"
            className="h-full w-full"
          />

          <div className="absolute inset-0 bg-[#061826]/60" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-[#061826]/20 to-[#061826]/40" />

        </motion.div>


        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 md:px-10 md:pb-28">

          <div className="max-w-5xl">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="mb-8 flex items-center gap-3"
            >

              <span className="h-2 w-2 rounded-full bg-[#35C759]" />

              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Our story
              </span>

            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-6xl font-black leading-[0.85] tracking-[-0.07em] md:text-[9rem]"
            >
              A movement
              <br />
              <span className="text-[#35C759]">
                built for people.
              </span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg"
            >
              Zindua Foundation exists because potential should never
              be limited by circumstances. We believe communities become
              stronger when young people have access to opportunity,
              dignity and support.
            </motion.p>

          </div>

        </div>


        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          Keep scrolling
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                Why we exist
              </p>

              <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Potential
                <br />
                is everywhere.
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-6 lg:col-start-7"
            >

              <p className="text-xl leading-9 text-[#061826]/70 md:text-2xl">
                Every community has young people with ideas, dreams,
                creativity and the desire to make a difference.
              </p>

              <p className="mt-8 text-lg leading-8 text-[#061826]/50">
                But potential alone is not always enough. Access to
                basic essentials, education, mentorship, opportunity
                and a supportive community can determine whether
                that potential gets the chance to grow.
              </p>

              <p className="mt-8 text-lg leading-8 text-[#061826]/50">
                Zindua Foundation is built around closing that gap —
                creating practical ways for people to support one
                another and build a better future together.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE CHALLENGE
      ===================================================== */}

      <section className="bg-[#061826] px-5 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >

              <RevealImage
                src="/images/story/community.jpg"
                alt="Community members working together"
                effect="clip"
                className="h-[520px] rounded-[2rem]"
              />

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35C759]/10 text-[#35C759]">
                <Users size={27} />
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#35C759]">
                The challenge
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Opportunity
                <br />
                should not be
                <br />
                a privilege.
              </h2>

              <p className="mt-7 leading-8 text-white/50">
                Too many young people face barriers that have little
                to do with their ability or ambition. Sometimes the
                missing piece is simply access — access to resources,
                encouragement, knowledge or someone willing to open
                a door.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR RESPONSE
      ===================================================== */}

      <section className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#061826]/60"
          >
            Our response
          </motion.p>


          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-8 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
          >
            We don't just
            <br />
            talk about change.
            <br />
            <span className="text-[#061826]/30">
              We participate in it.
            </span>
          </motion.h2>


          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] bg-[#061826] p-8 text-white md:p-10"
            >

              <Heart size={30} className="text-[#35C759]" />

              <h3 className="mt-12 text-3xl font-bold">
                Restore dignity.
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                Supporting young people with essential resources
                and practical assistance when they need it most.
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] bg-[#061826] p-8 text-white md:p-10"
            >

              <Sparkles size={30} className="text-[#35C759]" />

              <h3 className="mt-12 text-3xl font-bold">
                Unlock potential.
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                Creating spaces where young people can learn,
                discover their strengths and pursue opportunity.
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-[2rem] bg-[#061826] p-8 text-white md:p-10"
            >

              <Leaf size={30} className="text-[#35C759]" />

              <h3 className="mt-12 text-3xl font-bold">
                Protect tomorrow.
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                Bringing communities together to care for the
                environment and create a healthier future.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BELIEF
      ===================================================== */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
                What we believe
              </p>

              <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Change
                <br />
                happens
                <br />
                together.
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 lg:col-start-7"
            >

              <RevealImage
                src="/images/story/trees.jpg"
                alt="Young people participating in environmental action"
                effect="rotate"
                className="h-[480px] rounded-[2rem]"
              />

            </motion.div>

          </div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl"
          >

            <p className="text-2xl font-medium leading-10 md:text-4xl md:leading-[1.3]">
              We believe meaningful change is not created by one
              person or one organization. It is built when young
              people, communities, volunteers and partners decide
              to move in the same direction.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B2940] px-5 py-32 md:px-10 md:py-48">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#35C759]/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
            Looking ahead
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-8 max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
          >
            A future where
            <br />
            every young person
            <br />
            <span className="text-[#35C759]">
              can move forward.
            </span>
          </motion.h2>


          <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <p className="max-w-2xl text-lg leading-8 text-white/50">
              Our vision is a future where opportunity is more
              accessible, communities are more resilient and young
              people have the confidence and resources to shape
              the world around them.
            </p>

            <a
              href="/#get-involved"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#35C759] px-6 py-4 font-bold text-[#061826] transition hover:scale-105"
            >
              Join the movement

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section className="bg-[#061826] px-5 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#35C759] text-[#061826]"
          >
            <Sparkles size={32} />
          </motion.div>


          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto mt-10 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
          >
            The story is still
            <br />
            <span className="text-[#35C759]">
              being written.
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50"
          >
            And there is a place in that story for every person
            willing to give, serve, learn, mentor, partner or simply
            believe that change is possible.
          </motion.p>


          <motion.a
            href="/#get-involved"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#F7F8F4] px-7 py-4 font-bold text-[#061826]"
          >
            Be part of the story
            <ArrowRight size={17} />
          </motion.a>

        </div>

      </section>


      {/* =====================================================
          GALLERY CTA
      ===================================================== */}

      <section className="bg-[#F7F8F4] px-5 py-24 text-[#061826] md:px-10 md:py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
              Moments that matter
            </p>

            <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl">
              See the people
              <br />
              behind the
              <br />
              <span className="text-[#061826]/25">movement.</span>
            </h2>

            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(6,24,38,0.25)]"
            >
              SEE GALLERY
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <RevealImage
              src="/images/story/youth.jpg"
              alt="Young people taking part in the Zindua Foundation movement"
              effect="clip"
              className="h-[360px] rounded-[2rem] md:h-[460px]"
            />
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

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
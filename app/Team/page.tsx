"use client";

import { motion } from "framer-motion";
import RevealImage from "../components/RevealImage";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Globe2,
  Mail,
  Sparkles,
} from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  number: string;
  description: string;
};

const leadership: TeamMember[] = [
  {
    name: "Your Name",
    role: "Founder & Director",
    image: "/images/team/director.jpg",
    number: "01",
    description:
      "Leading the vision, partnerships and direction of Zindua Foundation.",
  },
  {
    name: "Team Member",
    role: "Programs Lead",
    image: "/images/team/programs.jpg",
    number: "02",
    description:
      "Turning ideas into meaningful programs that reach young people and communities.",
  },
  {
    name: "Team Member",
    role: "Community Lead",
    image: "/images/team/community.jpg",
    number: "03",
    description:
      "Building relationships between Zindua and the communities we serve.",
  },
];

const changemakers: TeamMember[] = [
  {
    name: "Team Member",
    role: "Environment Lead",
    image: "/images/team/environment.jpg",
    number: "04",
    description:
      "Helping communities take practical steps toward a greener future.",
  },
  {
    name: "Team Member",
    role: "Youth Coordinator",
    image: "/images/team/youth.jpg",
    number: "05",
    description:
      "Creating spaces where young people can participate, learn and lead.",
  },
  {
    name: "Volunteer",
    role: "Community Volunteer",
    image: "/images/team/volunteer.jpg",
    number: "06",
    description:
      "Supporting Zindua initiatives and helping turn community ideas into action.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061826] text-[#F7F8F4]">



      {/* HERO */}

      <section className="relative flex min-h-screen items-end overflow-hidden">

        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image src="/images/team/director.jpg" alt="" fill className="object-cover opacity-45" />
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-[#061826]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-[#061826]/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">

          <motion.p
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-xs uppercase tracking-[0.35em] text-[#35C759]"
          >
            The people behind the work
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-6xl text-6xl font-black leading-[0.78] tracking-[-0.07em] md:text-[10rem]"
          >
            Meet the
            <br />
            people
            <br />
            <span className="text-[#35C759]">
              behind Zindua.
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
              delay: 0.5,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
          >
            Change doesn't happen because of an organisation's
            name. It happens because people choose to care,
            participate and act.
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
          Meet the team
          <ArrowDown size={15} />
        </motion.div>

      </section>


      {/* INTRO */}

      <section className="bg-[#F7F8F4] px-5 py-28 text-[#061826] md:px-10 md:py-40">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <motion.div
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
          >

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
              One mission
            </p>

            <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Different
              <br />
              people.
              <br />
              <span className="text-[#061826]/20">
                One purpose.
              </span>
            </h2>

          </motion.div>

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
            className="self-end"
          >

            <p className="text-xl leading-9 text-[#061826]/60 md:text-2xl">
              Zindua is powered by people who believe that young
              people deserve opportunity, communities deserve
              support and our environment deserves protection.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#061826]/40">
              Our team brings together different skills,
              experiences and perspectives around one shared
              commitment: creating meaningful change.
            </p>

          </motion.div>

        </div>

      </section>


      {/* LEADERSHIP */}

      <section className="bg-[#061826] px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
                Leadership
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl">
                The core
                <br />
                team.
              </h2>

            </div>

            <span className="hidden text-sm text-white/20 md:block">
              PEOPLE / 01—03
            </span>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {leadership.map((member, index) => (

              <TeamCard
                key={member.number}
                member={member}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* DIVIDER STATEMENT */}

      <section className="bg-[#35C759] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#061826]/40"
          >
            More than a team
          </motion.p>

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
            transition={{
              delay: 0.1,
            }}
            className="mt-8 max-w-6xl text-5xl font-black leading-[0.86] tracking-[-0.06em] md:text-8xl"
          >
            We are building
            <br />
            a movement,
            <br />
            <span className="text-[#061826]/25">
              together.
            </span>
          </motion.h2>

        </div>

      </section>


      {/* COMMUNITY TEAM */}

      <section className="bg-[#0B2940] px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
              Changemakers
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl">
              The wider
              <br />
              Zindua family.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/40">
              From volunteers and coordinators to community
              champions, meaningful change takes more than a
              small group of people.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {changemakers.map((member, index) => (

              <TeamCard
                key={member.number}
                member={member}
                index={index + 3}
              />

            ))}

          </div>

        </div>

      </section>


      {/* JOIN */}

      <section className="bg-[#F7F8F4] px-5 py-32 text-[#061826] md:px-10 md:py-48">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

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
              className="text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl"
            >
              Maybe the
              <br />
              next face
              <br />
              is <span className="text-[#061826]/20">yours.</span>
            </motion.h2>


            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="self-end"
            >

              <p className="text-xl leading-9 text-[#061826]/60">
                Zindua grows through people who are willing to
                contribute their time, skills, ideas and energy.
              </p>

              <a
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#061826] px-7 py-4 font-bold text-white transition hover:scale-105"
              >
                Join the movement
                <ArrowRight size={17} />
              </a>

            </motion.div>

          </div>

        </div>

      </section>


      {/* SOCIAL CTA */}

      <section className="bg-[#061826] px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#35C759]">
            Stay connected
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mt-7 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
          >
            Follow the
            <br />
            journey.
          </motion.h2>

          <div className="mt-10 flex justify-center gap-3">

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:bg-[#D8B26E] hover:text-[#0B3D38]"
            >
              <Globe2 size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:bg-[#D8B26E] hover:text-[#0B3D38]"
            >
              <Sparkles size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:bg-[#D8B26E] hover:text-[#0B3D38]"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#061826] px-5 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <Image
            src="/images/logo/zindua-logo.png"
            alt="Zindua Foundation"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />

          <div className="flex flex-wrap gap-6 text-xs text-white/30">

            <a href="/about" className="hover:text-white">
              Our Story
            </a>

            <a href="/programs" className="hover:text-white">
              Programs
            </a>

            <a href="/impact" className="hover:text-white">
              Impact
            </a>

            <a href="/gallery" className="hover:text-white">
              Gallery
            </a>

            <a href="/stories" className="hover:text-white">
              Stories
            </a>

            <a href="/team" className="text-white">
              Team
            </a>

          </div>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/20">
          © {new Date().getFullYear()} Zindua Foundation. All rights reserved.
        </div>

      </footer>

    </main>
  );
}


/* TEAM CARD */

function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
    >

      {/* IMAGE */}

      <div className="relative aspect-[4/5] overflow-hidden">

        <RevealImage
          src={member.image}
          alt={member.name}
          effect="zoom"
          className="h-full w-full grayscale-[20%] group-hover:grayscale-0"
        />

        {/* DARK GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-transparent" />


        {/* NUMBER */}

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] backdrop-blur-xl">
          {member.number}
        </div>


        {/* HOVER LINE */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#35C759]"
        />


        {/* INFO ON IMAGE */}

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#35C759]">
            {member.role}
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">
            {member.name}
          </h3>

        </div>

      </div>


      {/* DESCRIPTION */}

      <div className="flex items-center justify-between gap-4 p-6">

        <p className="text-sm leading-6 text-white/35">
          {member.description}
        </p>

        <button
          aria-label={`Email ${member.name}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-300 hover:bg-[#35C759] hover:text-[#061826]"
        >
          <Mail size={15} />
        </button>

      </div>

    </motion.article>
  );
}
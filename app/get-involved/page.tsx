"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronUp,
  Clock3,
  Globe2,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  UsersRound,
  HandHeart,
  GraduationCap,
  Building2,
  Laptop,
  Megaphone,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";

type Involvement = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  benefits: string[];
  action: string;
  href: string;
  featured?: boolean;
};

type FAQ = {
  question: string;
  answer: string;
};

const involvementOptions: Involvement[] = [
  {
    id: "student",
    icon: GraduationCap,
    title: "Become a Student",
    description:
      "Learn practical skills, discover new opportunities, and build the confidence to shape your future.",
    details:
      "Join learning experiences designed to help young people develop relevant skills and turn potential into meaningful opportunities.",
    benefits: [
      "Access learning opportunities",
      "Build practical digital skills",
      "Discover career pathways",
      "Connect with other learners",
    ],
    action: "Explore learning",
    href: "/courses",
    featured: true,
  },
  {
    id: "mentor",
    icon: UsersRound,
    title: "Become a Mentor",
    description:
      "Share your knowledge, experience, and perspective with the next generation.",
    details:
      "Your experience can help someone make a better decision, overcome a challenge, or discover a path they never knew existed.",
    benefits: [
      "Guide emerging talent",
      "Share professional experience",
      "Support personal growth",
      "Build meaningful connections",
    ],
    action: "Become a mentor",
    href: "/contact",
  },
  {
    id: "volunteer",
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Give your time and skills to help create opportunities for communities.",
    details:
      "Volunteers can contribute through events, education, community initiatives, digital projects, outreach, and other activities.",
    benefits: [
      "Make a direct contribution",
      "Support community initiatives",
      "Meet passionate people",
      "Develop new experiences",
    ],
    action: "Volunteer with us",
    href: "/contact",
  },
  {
    id: "partner",
    icon: Building2,
    title: "Partner With Us",
    description:
      "Work with Zindua Foundation to create larger and more sustainable impact.",
    details:
      "Organizations can collaborate with us through education, technology, sponsorship, employment pathways, community programs, and strategic partnerships.",
    benefits: [
      "Create shared impact",
      "Support education initiatives",
      "Connect with emerging talent",
      "Build meaningful partnerships",
    ],
    action: "Start a partnership",
    href: "/contact",
  },
  {
    id: "sponsor",
    icon: Heart,
    title: "Support Our Mission",
    description:
      "Help us create access to learning, opportunity, and transformation.",
    details:
      "Every contribution can help support programs, learning experiences, community activities, and opportunities for people who need them.",
    benefits: [
      "Support educational access",
      "Help expand opportunities",
      "Strengthen communities",
      "Contribute to long-term impact",
    ],
    action: "Support Zindua",
    href: "/donate",
    featured: true,
  },
  {
    id: "teach",
    icon: BookOpen,
    title: "Teach With Us",
    description:
      "Turn your expertise into learning experiences that can empower others.",
    details:
      "Professionals, educators, and practitioners can contribute knowledge through courses, workshops, talks, and learning initiatives.",
    benefits: [
      "Share your expertise",
      "Reach aspiring learners",
      "Create practical learning",
      "Inspire future leaders",
    ],
    action: "Share your expertise",
    href: "/contact",
  },
];

const impactStats = [
  {
    value: "01",
    label: "Shared Mission",
    description: "One community working toward a better future.",
    icon: Globe2,
  },
  {
    value: "∞",
    label: "Possibilities",
    description: "Potential grows when opportunity becomes accessible.",
    icon: Sparkles,
  },
  {
    value: "24/7",
    label: "Inspiration",
    description: "Learning and opportunity should never stop.",
    icon: Lightbulb,
  },
  {
    value: "1 → ∞",
    label: "Ripple Effect",
    description: "One person empowered can inspire many more.",
    icon: Network,
  },
];

const faqItems: FAQ[] = [
  {
    question: "Who can get involved with Zindua Foundation?",
    answer:
      "Students, mentors, educators, volunteers, organizations, professionals, partners, supporters, and anyone who believes in expanding access to education and opportunity can get involved.",
  },
  {
    question: "Do I need to be based in Kenya?",
    answer:
      "No. Zindua has an African and global vision. Some opportunities may have specific location requirements, but we welcome interest and collaboration from people around the world.",
  },
  {
    question: "Can I volunteer my professional skills?",
    answer:
      "Yes. Professional skills can be extremely valuable. Depending on our current needs, opportunities may include education, technology, communications, design, research, events, mentorship, and community engagement.",
  },
  {
    question: "Can an organization become a partner?",
    answer:
      "Yes. Organizations can explore partnerships around education, technology, sponsorship, skills development, community programs, talent development, and other areas aligned with our mission.",
  },
  {
    question: "How can I support a student?",
    answer:
      "You can support Zindua's mission through donations, sponsorship opportunities, mentorship, volunteering, partnerships, or by helping connect learners to opportunities.",
  },
  {
    question: "How do I contact the Zindua team?",
    answer:
      "Use the contact form on this page or visit the Contact page. Tell us who you are, what you would like to contribute, and how you would like to get involved.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export default function GetInvolvedPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedInterest, setSelectedInterest] = useState("Student");
  const [submitted, setSubmitted] = useState(false);

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.15,
        },
      };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -right-40 top-[30rem] h-[30rem] w-[30rem] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.22),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.22),transparent_32%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(110,231,183,0.9)]"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_24px_rgba(253,186,116,0.9)]"
              animate={{
                y: [0, 25, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-[22%] left-[25%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_25px_rgba(147,197,253,0.9)]"
              animate={{
                x: [0, 30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />
          </>
        )}

        <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
          <motion.div
            {...motionProps}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Be part of something bigger
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Your involvement
              <span className="block bg-gradient-to-r from-emerald-300 via-white to-orange-300 bg-clip-text text-transparent">
                can change a life.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Zindua Foundation brings people, knowledge, technology, and
              opportunity together. Whether you have time, expertise, ideas,
              resources, or simply a desire to help, there is a place for you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#ways-to-help"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Explore ways to help
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Talk to our team
                <MessageCircle className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Purpose-driven
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-blue-300" />
                Africa-focused
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-300" />
                Community-powered
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={stagger}
            className="grid gap-12 lg:grid-cols-[1fr_1.3fr]"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                Why get involved?
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Opportunity grows when we build it together.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg leading-8 text-slate-600">
                Change does not happen through one person or one organization.
                It happens when people bring their different strengths together
                around a shared purpose.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                At Zindua Foundation, we believe that talent exists everywhere,
                but opportunity does not always reach everyone. Getting
                involved means helping close that gap.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Education",
                  "Technology",
                  "Mentorship",
                  "Innovation",
                  "Community",
                  "Opportunity",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section
        id="ways-to-help"
        className="bg-slate-50 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Ways to get involved
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Find your way to make an impact.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              There is no single way to contribute. Choose the path that best
              matches your skills, time, passion, and resources.
            </p>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {involvementOptions.map((option) => {
              const Icon = option.icon;
              const active = activeOption === option.id;

              return (
                <motion.article
                  key={option.id}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-sm transition ${
                    option.featured
                      ? "border-emerald-200"
                      : "border-slate-200"
                  }`}
                >
                  {option.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      Featured
                    </div>
                  )}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {option.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {option.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveOption(active ? null : option.id)
                    }
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
                  >
                    {active ? "Hide details" : "Learn more"}
                    {active ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: active ? "auto" : 0,
                      opacity: active ? 1 : 0,
                      marginTop: active ? 20 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-100 pt-5">
                      <p className="text-sm leading-6 text-slate-600">
                        {option.details}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {option.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm font-medium text-slate-700"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <a
                    href={option.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-slate-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              The ripple effect
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Small contributions can create extraordinary possibilities.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              A mentor can change a student's direction. A teacher can unlock
              curiosity. A volunteer can strengthen a community. A partner can
              create opportunities at scale.
            </p>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {impactStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
                >
                  <Icon className="h-7 w-7 text-emerald-300" />
                  <p className="mt-8 text-4xl font-black">{stat.value}</p>
                  <h3 className="mt-2 font-bold">{stat.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURED QUOTE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="relative rounded-[3rem] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-orange-50 px-7 py-16 shadow-sm sm:px-14"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white">
              <Rocket className="h-7 w-7" />
            </div>

            <blockquote className="mt-8 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              "The future is not something we simply wait for. It is something
              we build together."
            </blockquote>

            <p className="mt-7 text-slate-600">
              Zindua Foundation
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Getting started
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Three simple steps.
            </h2>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                icon: MessageCircle,
                title: "Tell us about yourself",
                text: "Share your interests, experience, skills, or the type of contribution you would like to make.",
              },
              {
                number: "02",
                icon: Network,
                title: "Find your pathway",
                text: "We can help identify an appropriate way for you to connect with Zindua's mission.",
              },
              {
                number: "03",
                icon: Sparkles,
                title: "Make an impact",
                text: "Start contributing, connecting, learning, mentoring, volunteering, or supporting the mission.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative rounded-[2rem] border border-slate-200 bg-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-emerald-600">
                      {step.number}
                    </span>

                    <Icon className="h-6 w-6 text-slate-400" />
                  </div>

                  <h3 className="mt-12 text-2xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div {...motionProps} variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                Start a conversation
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Let's build something meaningful.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Tell us how you would like to get involved. Whether you are an
                individual, educator, professional, organization, or supporter,
                we'd love to hear from you.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Connect with the Zindua team
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">Global vision</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Rooted in Africa, connected to the world
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">Your time matters</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Contribute when and where you can
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              {...motionProps}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-9"
            >
              {submitted ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    Thank you for reaching out.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Your message has been prepared for the Zindua team. We look
                    forward to learning more about how you would like to get
                    involved.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-bold text-slate-800">
                        Full name
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-slate-800">
                        Email address
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="text-sm font-bold text-slate-800">
                      I am interested in
                    </span>

                    <select
                      value={selectedInterest}
                      onChange={(event) =>
                        setSelectedInterest(event.target.value)
                      }
                      name="interest"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    >
                      <option>Student</option>
                      <option>Mentorship</option>
                      <option>Volunteering</option>
                      <option>Partnership</option>
                      <option>Supporting the mission</option>
                      <option>Teaching</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="mt-5 block">
                    <span className="text-sm font-bold text-slate-800">
                      Organization
                      <span className="font-normal text-slate-400">
                        {" "}
                        (optional)
                      </span>
                    </span>

                    <input
                      name="organization"
                      type="text"
                      placeholder="Organization or company"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="text-sm font-bold text-slate-800">
                      Message
                    </span>

                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Tell us a little about yourself and how you would like to get involved..."
                      className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"
                  >
                    Send my interest
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    By submitting this form, you agree that Zindua Foundation
                    may use your information to respond to your enquiry.
                  </p>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Choose your next step
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Start where you are.
            </h2>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: BookOpen,
                title: "Explore Courses",
                href: "/courses",
              },
              {
                icon: Award,
                title: "Find Scholarships",
                href: "/scholarships",
              },
              {
                icon: BriefcaseBusiness,
                title: "Find Opportunities",
                href: "/opportunities",
              },
              {
                icon: CalendarDays,
                title: "Explore Events",
                href: "/events",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  variants={fadeUp}
                  href={item.href}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-emerald-200 hover:shadow-lg"
                >
                  <Icon className="h-6 w-6 text-emerald-600" />
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="font-black">{item.title}</span>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Questions? Let's make it simple.
            </h2>
          </motion.div>

          <motion.div
            {...motionProps}
            variants={stagger}
            className="mt-14 space-y-3"
          >
            {faqItems.map((faq, index) => {
              const open = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl border border-slate-200"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-bold transition hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>

                    {open ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-emerald-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(249,115,22,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div {...motionProps} variants={fadeUp}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 text-emerald-300">
              <Heart className="h-7 w-7" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl">
              There is a place for you at Zindua.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Give your time. Share your knowledge. Support a learner. Open a
              door. Build a partnership. Whatever your contribution, it can
              become part of something much bigger.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#ways-to-help"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Find your pathway
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Support the mission
                <Heart className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
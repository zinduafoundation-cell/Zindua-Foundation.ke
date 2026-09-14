"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  Play,
  Send,
  Users,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: Users,
    description: "Follow our journey",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Camera,
    description: "See our community",
  },
  {
    name: "TikTok",
    href: "#",
    icon: MessageSquareText,
    description: "Discover our stories",
  },
  {
    name: "YouTube",
    href: "#",
    icon: Play,
    description: "Watch our work",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: BriefcaseBusiness,
    description: "Connect professionally",
  },
];

const contactOptions = [
  {
    title: "General Enquiries",
    description:
      "Have a question about Zindua Foundation or our work? Start here.",
    icon: Mail,
  },
  {
    title: "Programmes",
    description:
      "Ask about our programmes, opportunities, learning and community work.",
    icon: MessageCircle,
  },
  {
    title: "Partnerships",
    description:
      "Explore opportunities to collaborate and create meaningful impact.",
    icon: ArrowRight,
  },
  {
    title: "Volunteer",
    description:
      "Share your skills, time and ideas with the Zindua community.",
    icon: Send,
  },
];

const faqs = [
  {
    question: "How can I contact Zindua Foundation?",
    answer:
      "You can reach the team through the contact form, email or the social channels listed on this page.",
  },
  {
    question: "Can I volunteer with Zindua?",
    answer:
      "Yes. Use the contact form and select Volunteer so the team can understand how you would like to contribute.",
  },
  {
    question: "Can my organisation partner with Zindua?",
    answer:
      "Yes. We welcome conversations with organisations that share our vision and want to create meaningful impact.",
  },
  {
    question: "How can I join a Zindua programme?",
    answer:
      "Use the registration or programme links provided across the website, or contact the team for guidance.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to enquiries within two working days.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /*
      Connect this form to your backend, Supabase,
      Resend, Brevo, or another email service later.
    */

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F6F0] text-[#202522]">
      <section className="relative min-h-[85vh] overflow-hidden bg-[#F8F6F0]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F0] via-[#F4F1E9] to-[#E8DDCB]" />

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E7256]">
              Start a conversation
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-[#173C2F] sm:text-6xl lg:text-8xl">
              Let&apos;s create
              <span className="block">change together.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#737A74] sm:text-xl">
              Whether you are a young person, partner, volunteer or supporter,
              we would love to hear from you.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173C2F] px-7 py-4 font-medium text-white transition hover:bg-[#2B5945]"
              >
                Get in touch
                <ArrowRight size={18} />
              </a>

              <a
                href="#social"
                className="inline-flex items-center justify-center rounded-full border border-[#173C2F]/20 bg-white/50 px-7 py-4 font-medium text-[#173C2F] backdrop-blur transition hover:bg-white"
              >
                Connect with us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-[#9CAF9E]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#173C2F] shadow-2xl">
              <img
                src="/images/story/community.jpg"
                alt="Community members gathering together"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173C2F]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  Zindua Foundation
                </p>

                <p className="mt-3 max-w-md text-2xl font-medium leading-tight">
                  Every conversation can become an opportunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#E8DDCB] via-[#F8F6F0] to-[#F8F6F0] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E7256]">
              How can we help?
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#173C2F] sm:text-6xl">
              Choose the conversation that matters to you.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href="#contact-form"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8DDCB] text-[#173C2F]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[#173C2F]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#737A74]">{item.description}</p>

                  <div className="mt-7 flex items-center gap-2 font-medium text-[#3E7256]">
                    Contact us
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E7256]">
                Direct contact
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[#173C2F] sm:text-5xl">
                Prefer to reach us directly?
              </h2>

              <p className="mt-6 max-w-md leading-8 text-[#737A74]">
                Connect with the Zindua Foundation team through the channels
                that work best for you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Mail className="text-[#3E7256]" size={25} />

                <p className="mt-6 text-sm uppercase tracking-widest text-[#737A74]">
                  Email
                </p>

                <a
                  href="mailto:partner@zinduafoundation.com"
                  className="mt-2 block text-lg font-semibold text-[#173C2F]"
                >
                  partner@zinduafoundation.com
                </a>

                <p className="mt-3 text-sm leading-6 text-[#737A74]">
                  We aim to respond within two working days.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Phone className="text-[#3E7256]" size={25} />

                <p className="mt-6 text-sm uppercase tracking-widest text-[#737A74]">
                  Phone
                </p>

                <p className="mt-2 text-lg font-semibold text-[#173C2F]">
                  Contact team
                </p>

                <p className="mt-3 text-sm leading-6 text-[#737A74]">
                  0720 000 000 (Kenya) <br />
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <MapPin className="text-[#3E7256]" size={25} />

                <p className="mt-6 text-sm uppercase tracking-widest text-[#737A74]">
                  Location
                </p>

                <p className="mt-2 text-lg font-semibold text-[#173C2F]">
                  Kenya / Africa
                </p>

                <p className="mt-3 text-sm leading-6 text-[#737A74]">
                  Add the official Zindua location when available.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#173C2F] p-7 text-white shadow-sm">
                <MessageCircle size={25} />

                <p className="mt-6 text-sm uppercase tracking-widest text-white/60">
                  WhatsApp
                </p>

                <p className="mt-2 text-lg font-semibold">Community support</p>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Add the official WhatsApp link when available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F0] via-[#EEF2EC] to-[#DDE8DF] px-6 py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E7256]">
                Send a message
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#173C2F] sm:text-6xl">
                Tell us what is on your mind.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-[#737A74]">
                Have an idea, question or opportunity? Send us a message and
                let&apos;s start a conversation.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] bg-white p-6 shadow-xl sm:p-10"
            >
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE8DF] text-[#173C2F]">
                    <Send size={25} />
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold text-[#173C2F]">
                    Message received.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-[#737A74]">
                    Thank you for reaching out to Zindua Foundation. Connect
                    this form to your email or Supabase backend to receive
                    real submissions.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full bg-[#173C2F] px-6 py-3 text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Full name
                    </label>

                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Email address
                    </label>

                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Phone number
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      placeholder="Optional"
                      className="w-full rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Organisation
                    </label>

                    <input
                      name="organisation"
                      type="text"
                      placeholder="Optional"
                      className="w-full rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Reason for contacting us
                    </label>

                    <select
                      name="reason"
                      className="w-full rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    >
                      <option>General enquiry</option>
                      <option>Programme</option>
                      <option>Partnership</option>
                      <option>Volunteer</option>
                      <option>Media</option>
                      <option>Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#202522]">
                      Message
                    </label>

                    <textarea
                      required
                      name="message"
                      rows={7}
                      placeholder="Write your message..."
                      className="w-full resize-none rounded-2xl border border-[#173C2F]/10 bg-[#F8F6F0] px-5 py-4 outline-none transition focus:border-[#3E7256]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#173C2F] px-7 py-4 font-medium text-white transition hover:bg-[#2B5945]"
                    >
                      Send message
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <section id="social" className="bg-[#F8F6F0] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E7256]">
              Stay connected
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#173C2F] sm:text-6xl">
              Zindua Social Media
            </h2>

            <p className="mt-6 leading-8 text-[#737A74]">
              Follow the journey, meet the community and discover what we are
              building.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm hover:shadow-lg"
                >
                  <Icon size={26} className="text-[#173C2F]" />

                  <h3 className="mt-8 font-semibold text-[#173C2F]">
                    {social.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#737A74]">{social.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#3E7256]">
                    Connect
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#173C2F] px-6 py-32 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9CAF9E]">
              Where we are
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-tight sm:text-7xl">
              Rooted in Africa.
              <span className="block text-[#9CAF9E]">
                Connected to the world.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Zindua Foundation is building connections between people,
              communities, ideas and opportunities.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-medium">Kenya / Africa</p>
                <p className="text-sm text-white/50">
                  Official location details coming soon
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] bg-[#315C49]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#315C49] to-[#173C2F]" />

            <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-[#9CAF9E]/10 blur-3xl" />

            <div className="absolute bottom-[15%] right-[15%] h-56 w-56 rounded-full bg-[#B96D4D]/10 blur-3xl" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  size={55}
                  strokeWidth={1.3}
                  className="mx-auto text-[#E8DDCB]"
                />

                <p className="mt-6 text-3xl font-semibold">Zindua Foundation</p>

                <p className="mt-2 text-white/60">Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#173C2F] via-[#315C49] to-[#F8F6F0] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9CAF9E]">
              Questions
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-16 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl bg-white/95"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                  >
                    <span className="font-medium text-[#173C2F]">
                      {faq.question}
                    </span>

                    <span className="text-2xl text-[#3E7256]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-7 sm:px-8"
                    >
                      <p className="max-w-3xl leading-7 text-[#737A74]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F8F6F0] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#173C2F] px-7 py-20 text-center sm:px-14 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9CAF9E]">
              The next step
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Let&apos;s build a smarter world together.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Great ideas begin with conversations. Reach out, connect with
              us and become part of the journey.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-[#173C2F] transition hover:bg-[#F8F6F0]"
              >
                Contact Zindua
                <ArrowRight size={18} />
              </a>

              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-medium text-white transition hover:bg-white/10"
              >
                Join Zindua
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

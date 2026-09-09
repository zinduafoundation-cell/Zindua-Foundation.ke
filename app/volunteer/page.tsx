"use client";

import {
  CalendarCheck2,
  MapPin,
  MessageSquareHeart,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const focusAreas = [
  "Mentorship",
  "Community outreach",
  "Event support",
  "Youth engagement",
  "Environment action",
  "Fundraising",
];

export default function VolunteerPage() {
  const router = useRouter();
  const [selectedArea, setSelectedArea] = useState("Mentorship");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    experience: "",
    motivation: "",
    agree: false,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interests: selectedArea,
          consent: formData.agree,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to submit volunteer form.");
      }

      router.push("/thank-you?type=volunteer");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="Volunteers joining a community effort"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(11,61,56,0.76)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,61,56,0.86)] via-[rgba(11,61,56,0.55)] to-[rgba(11,61,56,0.35)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-10 md:py-40">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Become a volunteer</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl xl:text-[7rem]">
              Show up for <span className="text-[var(--zindua-gold)]">young people</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--zindua-ivory)]/75">
              Your time, knowledge, and care can create more opportunities for the next generation. Join the Zindua volunteer movement and help communities grow stronger together.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Why volunteer</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl">One person can change the trajectory of a community.</h2>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4 rounded-2xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]"><Users size={20} /></div>
                  <div>
                    <h3 className="text-lg font-black">Mentor and guide</h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--text-soft)]">Support young people through encouragement, skills sharing and practical guidance.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]"><CalendarCheck2 size={20} /></div>
                  <div>
                    <h3 className="text-lg font-black">Help on the ground</h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--text-soft)]">Join outreach, events, field work and community initiatives where your presence matters.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]"><MapPin size={20} /></div>
                  <div>
                    <h3 className="text-lg font-black">Be present in communities</h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--text-soft)]">Travel to communities, work with local leaders and help create sustainable, human-centered impact.</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] bg-[var(--zindua-ivory)] p-7 text-[var(--zindua-forest)] shadow-[0_30px_80px_rgba(11,61,56,0.08)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Application form</p>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] md:text-5xl">Volunteer with Zindua</h3>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Full name</span>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(event) => setFormData({ ...formData, fullName: event.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Email</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Phone</span>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    placeholder="+254 ..."
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Location</span>
                  <input
                    required
                    type="text"
                    value={formData.location}
                    onChange={(event) => setFormData({ ...formData, location: event.target.value })}
                    placeholder="Nairobi, Kenya"
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Availability</span>
                  <input
                    required
                    type="text"
                    value={formData.availability}
                    onChange={(event) => setFormData({ ...formData, availability: event.target.value })}
                    placeholder="Weekends / evenings"
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Area of interest</span>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSelectedArea(area)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          selectedArea === area ? "border-[var(--zindua-gold)] bg-[var(--zindua-gold)] text-[var(--zindua-forest)]" : "border-[rgba(11,61,56,0.15)] bg-white text-[var(--zindua-forest)]/70"
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Relevant experience or skills</span>
                  <textarea
                    rows={3}
                    value={formData.experience}
                    onChange={(event) => setFormData({ ...formData, experience: event.target.value })}
                    placeholder="Tell us about your relevant experience, skills, or community work."
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Why do you want to volunteer?</span>
                  <textarea
                    required
                    rows={5}
                    value={formData.motivation}
                    onChange={(event) => setFormData({ ...formData, motivation: event.target.value })}
                    placeholder="Tell us about your motivation, skills, and what you hope to contribute."
                    className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-start gap-3 text-sm text-[var(--zindua-forest)]/75">
                  <input
                    required
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(event) => setFormData({ ...formData, agree: event.target.checked })}
                    className="mt-1 h-4 w-4 accent-[var(--zindua-gold)]"
                  />
                  <span>
                    I agree to be contacted by the Zindua team and accept the <a href="/terms" className="font-bold text-[var(--zindua-forest)] underline underline-offset-2">Terms & Conditions</a>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--zindua-forest)] px-6 py-3.5 font-bold text-[var(--zindua-ivory)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"} <MessageSquareHeart size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

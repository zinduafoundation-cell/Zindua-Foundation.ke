"use client";

import {
  ArrowRight,
  Banknote,
  BriefcaseMedical,
  HeartHandshake,
  LandPlot,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const donationOptions = [
  {
    title: "Food support",
    description: "Help provide meals, groceries and emergency food packs for families in need.",
    Icon: HeartHandshake,
  },
  {
    title: "Clothes & essentials",
    description: "Support dignity through clean clothing, blankets and daily-life essentials.",
    Icon: PackageCheck,
  },
  {
    title: "Stationery & school kits",
    description: "Equip learners with books, pens, uniforms, bags and school supplies.",
    Icon: BriefcaseMedical,
  },
  {
    title: "Care & hygiene",
    description: "Fund sanitary products, hygiene packs and health support for vulnerable youth.",
    Icon: ShieldCheck,
  },
  {
    title: "Environment & community",
    description: "Back tree-planting, community cleanups and resilience initiatives.",
    Icon: LandPlot,
  },
];

const paymentMethods = [
  "MPESA Paybill",
  "Bank transfer",
  "Airtel Money",
  "Card payment",
  "Cash / direct support",
];

export default function DonatePage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("MPESA Paybill");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    supportArea: "Food support",
    message: "",
    monthly: false,
    termsAccepted: false,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          paymentMethod: selectedMethod,
          consent: formData.termsAccepted,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to submit donation form.");
      }

      router.push("/thank-you?type=donation");
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
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80"
            alt="People supporting the community"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(11,61,56,0.75)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] via-[rgba(11,61,56,0.3)] to-[rgba(11,61,56,0.2)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-10 md:pt-40">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Give with purpose</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl xl:text-[7rem]">
              Help us build a <span className="text-[var(--zindua-gold)]">stronger tomorrow</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--zindua-ivory)]/75">
              Every contribution helps young people, families and communities access food, clothing, school support, dignity, and opportunities for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Choose a cause</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Where your support goes</h2>
            </div>
            <div className="hidden text-sm text-[var(--text-soft)] md:block">Support that changes lives</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {donationOptions.map(({ title, description, Icon }) => (
              <article key={title} className="zindua-card bg-[rgba(255,255,255,0.02)] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--zindua-ivory)] px-5 py-24 text-[var(--zindua-forest)] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[var(--zindua-forest)] p-7 text-[var(--zindua-ivory)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Payment methods</p>
            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] md:text-5xl">Choose how you want to give</h3>

            <div className="mt-8 grid gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setSelectedMethod(method)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                    selectedMethod === method
                      ? "border-[var(--zindua-gold)] bg-[rgba(216,178,110,0.12)] text-[var(--zindua-ivory)]"
                      : "border-[var(--surface-border)] bg-white/[0.02] text-[var(--zindua-ivory)]/75"
                  }`}
                >
                  <span className="font-medium">{method}</span>
                  <ArrowRight size={16} className="text-[var(--zindua-gold)]" />
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--surface-border)] bg-white/[0.02] p-5 text-sm leading-7 text-[var(--text-soft)]">
              <p className="font-bold uppercase tracking-[0.25em] text-[var(--zindua-gold)]">{selectedMethod}</p>
              {selectedMethod === "MPESA Paybill" && <p className="mt-3">Paybill: 898900 | Account Number: ZINDUA CARE</p>}
              {selectedMethod === "Bank transfer" && <p className="mt-3">Bank: KCB / Equity / Cooperative | Account: Zindua Foundation | Code: 001 / 011</p>}
              {selectedMethod === "Airtel Money" && <p className="mt-3">Airtel Money: +254 700 000 000 | Name: Zindua Foundation</p>}
              {selectedMethod === "Card payment" && <p className="mt-3">Secure card checkout is available on request for one-off or recurring support.</p>}
              {selectedMethod === "Cash / direct support" && <p className="mt-3">For in-kind support and direct arrangements, contact the Zindua team for logistics.</p>}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[rgba(11,61,56,0.1)] bg-white p-7 shadow-[0_20px_60px_rgba(11,61,56,0.08)] md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Full name</span>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(event) => setFormData({ ...formData, fullName: event.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
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
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
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
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Donation amount</span>
                <input
                  required
                  type="text"
                  value={formData.amount}
                  onChange={(event) => setFormData({ ...formData, amount: event.target.value })}
                  placeholder="KES 2,000"
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Support area</span>
                <select
                  value={formData.supportArea}
                  onChange={(event) => setFormData({ ...formData, supportArea: event.target.value })}
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                >
                  <option>Food support</option>
                  <option>Clothes & essentials</option>
                  <option>Stationery & school kits</option>
                  <option>Care & hygiene</option>
                  <option>Environment & community</option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--zindua-forest)]/60">Message</span>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="Tell us how you would like to support or a dedication note..."
                  className="w-full rounded-2xl border border-[rgba(11,61,56,0.12)] bg-[rgba(11,61,56,0.02)] px-4 py-3.5 outline-none transition focus:border-[var(--zindua-gold)]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <label className="inline-flex items-start gap-3 text-sm text-[var(--zindua-forest)]/75">
                <input
                  type="checkbox"
                  checked={formData.monthly}
                  onChange={(event) => setFormData({ ...formData, monthly: event.target.checked })}
                  className="mt-1 h-4 w-4 accent-[var(--zindua-gold)]"
                />
                I want to make this a monthly donation.
              </label>

              <label className="inline-flex items-start gap-3 text-sm text-[var(--zindua-forest)]/75">
                <input
                  required
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(event) => setFormData({ ...formData, termsAccepted: event.target.checked })}
                  className="mt-1 h-4 w-4 accent-[var(--zindua-gold)]"
                />
                <span>
                  I agree to the <a href="/terms" className="font-bold text-[var(--zindua-forest)] underline underline-offset-2">Terms & Conditions</a> and understand how my support will be used.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--zindua-forest)] px-6 py-3.5 font-bold text-[var(--zindua-ivory)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Donate now"} <Banknote size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

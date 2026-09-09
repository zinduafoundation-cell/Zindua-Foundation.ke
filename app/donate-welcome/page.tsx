"use client";

import { Heart, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function DonateWelcomePage() {
  const router = useRouter();
  const [step, setStep] = useState<"welcome" | "form">("welcome");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    donationType: "one-time",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store donor info in session storage for thank you page
      sessionStorage.setItem("donorName", formData.fullName);
      sessionStorage.setItem("donorEmail", formData.email);

      // Redirect to thank you page
      router.push("/donate-thank-you");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
      {step === "welcome" ? (
        // Welcome Section
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1800&q=80"
              alt="Community giving"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(11,61,56,0.75)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] via-[rgba(11,61,56,0.4)] to-[rgba(11,61,56,0.2)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <Heart className="text-[var(--zindua-gold)]" size={28} />
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">
                  Your support matters
                </p>
              </div>

              <h1 className="mb-6 text-5xl font-black leading-[0.88] tracking-[-0.06em] text-[var(--zindua-ivory)] md:text-7xl">
                Welcome to the movement
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-[var(--zindua-ivory)]/75">
                Every contribution, no matter the size, creates real opportunities for young people and communities. Your generosity helps us provide essential support, mentorship, and pathways to brighter futures.
              </p>

              <div className="mb-12 space-y-6 rounded-2xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-8 backdrop-blur-xl">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    <span className="text-sm font-black">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">Choose how to give</h3>
                    <p className="text-sm text-[var(--text-soft)]">
                      Support the cause that resonates most with you. From food support to youth empowerment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    <span className="text-sm font-black">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">Share your details</h3>
                    <p className="text-sm text-[var(--text-soft)]">
                      Help us know how to keep you updated on the impact you're making.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    <span className="text-sm font-black">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">Create change</h3>
                    <p className="text-sm text-[var(--text-soft)]">
                      Your contribution goes to work immediately, creating opportunities where they're needed most.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep("form")}
                className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,var(--zindua-gold),var(--zindua-terracotta))] px-8 py-4 text-lg font-bold text-[var(--zindua-forest)] shadow-[0_30px_60px_rgba(217,168,103,0.38)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_40px_80px_rgba(217,168,103,0.48)]"
              >
                Let's make a difference
                <ArrowRight
                  size={20}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      ) : (
        // Form Section
        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <div className="mb-6 flex justify-center">
                <Heart className="text-[var(--zindua-gold)]" size={32} />
              </div>
              <h2 className="mb-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Share your details
              </h2>
              <p className="text-[var(--text-soft)]">
                Help us understand your giving and keep you updated on the impact you're making.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-8 backdrop-blur-xl md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 ..."
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Donation amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="KES 2,000"
                    required
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Donation type
                  </label>
                  <select
                    name="donationType"
                    value={formData.donationType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  >
                    <option value="one-time">One-time donation</option>
                    <option value="monthly">Monthly support</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your motivation or dedication..."
                    rows={4}
                    className="w-full rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.05)] px-5 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none transition duration-300 focus:border-[var(--zindua-gold)] focus:shadow-[0_0_0_3px_rgba(217,168,103,0.15)]"
                  />
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep("welcome")}
                  className="flex-1 rounded-xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] px-6 py-3 font-bold text-[var(--text-main)] transition duration-300 hover:bg-[rgba(255,255,255,0.05)]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-xl bg-[linear-gradient(135deg,var(--zindua-gold),var(--zindua-terracotta))] px-6 py-3 font-bold text-[var(--zindua-forest)] shadow-[0_20px_40px_rgba(217,168,103,0.3)] transition duration-300 hover:shadow-[0_30px_60px_rgba(217,168,103,0.4)] disabled:opacity-50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  <span className="relative">
                    {isSubmitting ? "Processing..." : "DONATE NOW"}
                  </span>
                  <Heart size={18} className="relative" />
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

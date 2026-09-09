"use client";

import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DonateThankYouPage() {
  const [donorName, setDonorName] = useState<string>("");

  useEffect(() => {
    // Get donor name from session storage
    const name = sessionStorage.getItem("donorName") || "Generous Supporter";
    setDonorName(name);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
            alt="Celebration of giving"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(11,61,56,0.8)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--zindua-forest)] to-[rgba(11,61,56,0.3)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center md:px-10">
          <div className="max-w-2xl">
            {/* Animated Heart */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Heart
                  className="animate-bounce text-[var(--zindua-gold)]"
                  size={80}
                  strokeWidth={1}
                  fill="currentColor"
                  style={{
                    animationDelay: "0s",
                    animationDuration: "1.5s",
                  }}
                />
              </div>
            </div>

            <h1 className="mb-4 text-5xl font-black leading-[0.88] tracking-[-0.06em] text-[var(--zindua-ivory)] md:text-7xl">
              Thank you!
            </h1>

            <p className="mb-8 text-3xl font-bold text-[var(--zindua-gold)] md:text-4xl">
              {donorName}
            </p>

            <p className="mb-12 max-w-xl text-lg leading-8 text-[var(--zindua-ivory)]/75">
              Your generosity is truly inspiring. Your contribution will create real opportunities for young people and strengthen communities.
            </p>

            <div className="mb-12 rounded-2xl border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-8 backdrop-blur-xl">
              <div className="mb-6">
                <p className="mb-2 text-sm uppercase tracking-[0.15em] text-[var(--text-soft)]">
                  What happens next
                </p>
                <h3 className="text-2xl font-black">Your impact awaits</h3>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Confirmation email sent</p>
                    <p className="text-sm text-[var(--text-soft)]">
                      Check your inbox for a detailed receipt and impact report.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Updates on your impact</p>
                    <p className="text-sm text-[var(--text-soft)]">
                      We'll keep you informed about how your contribution is making a difference.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Join the movement</p>
                    <p className="text-sm text-[var(--text-soft)]">
                      Become part of a community creating meaningful change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,var(--zindua-gold),var(--zindua-terracotta))] px-8 py-4 font-bold text-[var(--zindua-forest)] shadow-[0_30px_60px_rgba(217,168,103,0.38)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_40px_80px_rgba(217,168,103,0.48)]"
              >
                Explore our mission
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/volunteer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--zindua-gold)] bg-[rgba(255,255,255,0.02)] px-8 py-4 font-bold text-[var(--zindua-gold)] backdrop-blur-xl transition duration-300 hover:border-[var(--zindua-terracotta)] hover:bg-[var(--zindua-terracotta)]/10"
              >
                Become a volunteer
                <Heart size={18} />
              </Link>
            </div>

            <p className="mt-12 text-sm text-[var(--text-soft)]">
              Questions? Reach out to{" "}
              <a
                href="mailto:hello@zindua.org"
                className="font-semibold text-[var(--zindua-gold)] hover:underline"
              >
                hello@zindua.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

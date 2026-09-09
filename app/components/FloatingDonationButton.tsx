"use client";

import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function FloatingDonationButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Link
        href="/donate-welcome"
        className="group relative inline-flex items-center gap-3 rounded-full border border-[rgba(217,168,103,0.4)] bg-[linear-gradient(135deg,#f9d089_0%,#d9a867_50%,#bb7f52_100%)] px-5 py-3 text-sm font-bold text-[var(--zindua-forest)] shadow-[0_24px_48px_rgba(217,168,103,0.32)] transition duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_32px_64px_rgba(217,168,103,0.42)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(6,60,57,0.12)] text-[var(--zindua-forest)]">
          <HeartHandshake size={18} className="transition-transform duration-300 group-hover:scale-120" />
        </span>
        <span className="hidden pr-1 text-xs font-black uppercase tracking-[0.25em] sm:inline-block">
          Donate
        </span>
      </Link>
    </div>
  );
}



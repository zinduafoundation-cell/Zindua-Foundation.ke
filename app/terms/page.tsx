import { ShieldCheck, Sparkles, FileCheck2, ArrowRight } from "lucide-react";
import Link from "next/link";

const points = [
  {
    title: "Respectful engagement",
    text: "All donors, volunteers, partners, and community members are expected to interact with honesty, dignity, and respect. We value inclusive participation and expect all engagement with Zindua Foundation to align with our values of care, safety, and professionalism.",
    Icon: ShieldCheck,
  },
  {
    title: "Purpose of support",
    text: "Funds, contributions, and in-kind support are used to advance youth empowerment, dignity, climate care, education, and community resilience. Zindua may redirect the use of donated resources to the most urgent priority areas in line with the stated mission and approved programming.",
    Icon: FileCheck2,
  },
  {
    title: "Volunteer participation",
    text: "Volunteer applications are reviewed based on fit, availability, skills, and program needs. Participation is subject to confirmation, onboarding, and any operational requirements set by the Foundation.",
    Icon: Sparkles,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] px-5 py-20 text-[var(--text-main)] md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="section-tag">Terms & Conditions</p>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-6xl">A clear partnership built on trust.</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
            These Terms & Conditions govern the use of support, participation, and engagement with Zindua Foundation. By donating, volunteering, or contributing in any form, you agree to the principles below.
          </p>
        </div>

        <div className="masonry-grid">
          {points.map(({ title, text, Icon }) => (
            <article key={title} className="masonry-item zindua-card p-7 md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]">
                <Icon size={22} />
              </div>
              <h2 className="mt-6 text-2xl font-black tracking-[-0.04em]">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-[var(--text-soft)] md:text-base">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.03)] p-7 md:p-10">
          <h2 className="text-2xl font-black tracking-[-0.04em] md:text-3xl">Additional commitments</h2>
          <ul className="mt-6 space-y-4 text-sm leading-8 text-[var(--text-soft)] md:text-base">
            <li>• We do not share donor or volunteer information with third parties without clear consent, except where required by law or necessary for safe program delivery.</li>
            <li>• All support is handled with care and accountability. We aim to communicate clearly and respectfully about impact, opportunities, and community outcomes.</li>
            <li>• By submitting a donation or application, you agree that the information provided is accurate and that you consent to follow-up communication from the Zindua team.</li>
            <li>• Zindua Foundation reserves the right to review or decline support or participation requests when operational, safeguarding, or mission alignment needs require it.</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/donate" className="brand-btn inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-bold transition hover:scale-[1.02]">
            Support a cause <ArrowRight size={16} />
          </Link>
          <Link href="/volunteer" className="brand-btn-secondary inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-bold transition hover:scale-[1.02]">
            Become a volunteer
          </Link>
        </div>
      </div>
    </main>
  );
}

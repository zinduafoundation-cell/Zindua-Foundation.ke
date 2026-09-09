import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";

export default function ClosingPage() {
  return (
    <main className="flex min-h-screen items-center bg-[var(--bg-base)] px-5 py-20 text-[var(--text-main)] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Zindua together</p>
          <h1 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl xl:text-[7rem]">
            Together, we can <span className="text-[var(--zindua-gold)]">change the story</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            Every act of generosity, time, and care adds to a future where young people can rise with dignity, confidence, and opportunity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/donate" className="inline-flex items-center gap-3 rounded-full bg-[var(--zindua-gold)] px-6 py-3.5 font-bold text-[var(--zindua-forest)] transition hover:scale-[1.02]">
              Donate now <HeartHandshake size={16} />
            </a>
            <a href="/volunteer" className="inline-flex items-center gap-3 rounded-full border border-[var(--surface-border)] px-6 py-3.5 font-bold text-[var(--text-main)] transition hover:border-[var(--zindua-gold)]">
              Volunteer with us <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-7 md:p-10">
          <div className="rounded-[1.7rem] bg-[var(--zindua-ivory)] p-6 text-[var(--zindua-forest)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--zindua-gold)]/20 text-[var(--zindua-gold)]">
              <Sparkles size={24} />
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] md:text-4xl">Our impact is powered by people.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--zindua-forest)]/70">
              <li>• Food and essentials for families facing urgent need</li>
              <li>• School supplies and dignity support for young learners</li>
              <li>• Mentor-led opportunities for youth and communities</li>
              <li>• Environmental action that restores and strengthens shared spaces</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

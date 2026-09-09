import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const type = searchParams?.type ?? "donation";
  const isVolunteer = type === "volunteer";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg-base)] px-5 py-20 text-[var(--text-main)] md:px-10">
      <div className="w-full max-w-4xl rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-7 shadow-[0_30px_80px_rgba(11,61,56,0.12)] md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--zindua-gold)]/15 text-[var(--zindua-gold)]">
          <CheckCircle2 size={40} />
        </div>

        <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">
          {isVolunteer ? "Application received" : "Donation received"}
        </p>

        <h1 className="mt-6 text-center text-4xl font-black tracking-[-0.05em] md:text-6xl">
          Thank you for being part of the change.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-[var(--text-soft)] md:text-lg">
          {isVolunteer
            ? "Your volunteer interest has been received. Our team will review your application and get back to you soon with the next steps."
            : "Your generosity is already making a difference. We have received your support and will use it to help young people and families thrive."}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={isVolunteer ? "/volunteer" : "/donate"}
            className="inline-flex items-center gap-3 rounded-full bg-[var(--zindua-gold)] px-6 py-3.5 font-bold text-[var(--zindua-forest)] transition hover:scale-[1.02]"
          >
            {isVolunteer ? "Submit another volunteer form" : "Give again"}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--surface-border)] px-6 py-3.5 font-bold text-[var(--text-main)] transition hover:border-[var(--zindua-gold)]"
          >
            Return home
          </Link>
        </div>

        <div className="mt-12 rounded-[1.75rem] bg-[var(--zindua-ivory)] p-6 text-[var(--zindua-forest)]">
          <div className="flex items-center justify-center gap-3 text-center">
            <HeartHandshake className="text-[var(--zindua-gold)]" size={22} />
            <p className="text-lg font-bold">Your support strengthens communities across Kenya and beyond.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

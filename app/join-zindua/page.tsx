const membershipTiers = [
  {
    name: "Build",
    fee: "KSh 500",
    description: "Kick-start your support and help fund everyday youth opportunities and community care.",
    accent: "bg-[rgba(217,168,103,0.14)] text-[var(--zindua-gold)]",
  },
  {
    name: "Boost",
    fee: "KSh 1,500",
    description: "Power bigger impact through mentorship, skills training, and practical support for young people.",
    accent: "bg-[rgba(15,93,87,0.18)] text-[var(--zindua-ivory)]",
  },
  {
    name: "Create the Future",
    fee: "KSh 5,000",
    description: "Help shape long-term community growth, leadership, and future-ready opportunities for tomorrow.",
    accent: "bg-[rgba(183,109,74,0.12)] text-[var(--zindua-gold)]",
  },
];

const impactMoments = [
  "Student support and mentorship",
  "Career-building and practical learning",
  "Community care and emergency relief",
];

export default function JoinZinduaPage() {
  return (
    <main className="page-transition min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,168,103,0.18),transparent_25%),linear-gradient(135deg,rgba(6,60,57,0.92),rgba(9,42,40,0.92),rgba(7,29,28,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,20,0.24),rgba(7,21,20,0.78))]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-tag">Join the movement</span>
              <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl xl:text-[6.4rem]">
                Build, boost, and <span className="text-[var(--zindua-gold)]">create the future</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--zindua-ivory)]/80">
                Zindua is a community of people choosing to grow, lift each other up, and build a future where talent, purpose, and opportunity meet.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#membership-fees" className="brand-btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Join now
                </a>
                <a href="/donate" className="brand-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Donate
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-5 sm:grid-cols-3">
                {[
                  ["350+", "young people reached"],
                  ["12", "community actions"],
                  ["100%", "purpose-driven"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black tracking-[-0.05em] text-[var(--zindua-gold)]">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--zindua-ivory)]/70">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[0_30px_80px_rgba(1,12,11,0.35)] backdrop-blur-md md:p-8">
              <div className="rounded-[1.5rem] border border-[var(--surface-border)] bg-[rgba(8,31,30,0.78)] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.33em] text-[var(--zindua-gold)]">Why join</p>
                <h2 className="mt-5 text-3xl font-black tracking-[-0.05em]">A small step. A big future.</h2>

                <ul className="mt-6 space-y-4">
                  {impactMoments.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--zindua-ivory)]/80">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--zindua-gold)] text-[10px] font-black text-[var(--zindua-forest)]">✓</span>
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-[1.3rem] border border-[var(--zindua-gold)]/35 bg-[rgba(217,168,103,0.08)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--zindua-gold)]">Join fee</p>
                  <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-[var(--zindua-ivory)]">From KSh 500</p>
                  <p className="mt-2 text-sm text-[var(--zindua-ivory)]/70">A simple, accessible starting point for anyone ready to support the mission.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership-fees" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-tag justify-center">Membership tiers</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-6xl">Choose the level that matches your dream.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
              Whether you are starting small or ready to invest more deeply, your support helps us build stronger futures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {membershipTiers.map(({ name, fee, description, accent }) => (
              <article key={name} className="zindua-card h-full p-7 md:p-8">
                <div className={`inline-flex rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] ${accent}`}>
                  {name}
                </div>
                <div className="mt-6 text-4xl font-black tracking-[-0.06em] text-[var(--zindua-gold)]">{fee}</div>
                <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">{description}</p>

                <div className="mt-8 rounded-[1.4rem] border border-[var(--surface-border)] bg-white/[0.02] p-4 text-sm leading-7 text-[var(--text-soft)]">
                  <p className="font-bold uppercase tracking-[0.2em] text-[var(--zindua-gold)]">Impact</p>
                  <p className="mt-3">Helps fund programs that support growth, resilience, and opportunity for the next generation.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mpesa" className="bg-[var(--zindua-ivory)] px-5 py-20 text-[var(--zindua-forest)] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="section-tag justify-center">Pay with Mpesa</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-6xl">Joining fee and donation support</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[var(--zindua-forest)] p-7 text-[var(--zindua-ivory)] shadow-[0_20px_60px_rgba(6,60,57,0.18)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Join Zindua</p>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] md:text-4xl">Pay your joining fee</h3>
              <div className="mt-8 space-y-4 text-base leading-8 text-[var(--zindua-ivory)]/80">
                <p><span className="font-bold text-[var(--zindua-gold)]">Paybill:</span> 400200</p>
                <p><span className="font-bold text-[var(--zindua-gold)]">Account:</span> ZINDUA JOIN</p>
                <p><span className="font-bold text-[var(--zindua-gold)]">Amount:</span> KSh 500 / KSh 1,500 / KSh 5,000</p>
              </div>
              <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-[var(--zindua-ivory)]/75">
                <p className="font-bold uppercase tracking-[0.2em] text-[var(--zindua-gold)]">Mpesa steps</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  <li>Go to M-Pesa in your phone.</li>
                  <li>Select Lipa na M-Pesa.</li>
                  <li>Choose Pay Bill.</li>
                  <li>Enter 400200 and the account name.</li>
                  <li>Confirm the amount and send.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-7 shadow-[0_20px_60px_rgba(6,60,57,0.12)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--zindua-gold)]">Support the mission</p>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] md:text-4xl">Make a donation</h3>
              <div className="mt-8 space-y-4 text-base leading-8 text-[var(--zindua-forest)]/75">
                <p><span className="font-bold text-[var(--zindua-forest)]">Paybill:</span> 400200</p>
                <p><span className="font-bold text-[var(--zindua-forest)]">Account:</span> ZINDUA GIVE</p>
                <p><span className="font-bold text-[var(--zindua-forest)]">Amount:</span> Any amount that matches your impact</p>
              </div>
              <div className="mt-8 rounded-[1.4rem] border border-[rgba(6,60,57,0.12)] bg-[rgba(6,60,57,0.03)] p-5 text-sm leading-7 text-[var(--zindua-forest)]/75">
                <p className="font-bold uppercase tracking-[0.2em] text-[var(--zindua-forest)]">How to give</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  <li>Open M-Pesa and choose Lipa na M-Pesa.</li>
                  <li>Select Pay Bill and enter 400200.</li>
                  <li>Use account name ZINDUA GIVE.</li>
                  <li>Confirm your payment and share the receipt.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--surface-border)] bg-[rgba(255,255,255,0.02)] p-8 text-center md:p-12">
          <p className="section-tag justify-center">Become part of the story</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-5xl">A little support can change someone’s tomorrow.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            Your membership or donation helps us build opportunity, ignite confidence, and create a stronger future for young people and families in our community.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#membership-fees" className="brand-btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em]">
              Choose your fee
            </a>
            <a href="/donate" className="brand-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em]">
              Donate today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

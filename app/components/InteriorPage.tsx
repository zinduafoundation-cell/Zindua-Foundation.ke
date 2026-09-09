import RevealImage from "./RevealImage";

interface InteriorPageProps {
  active: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { title: string; text: string }[];
}

export default function InteriorPage({
  active,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  sections,
}: InteriorPageProps) {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-40 md:px-10 md:pt-48 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#35C759]">
            {eyebrow}
          </p>
          <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            {intro}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] lg:col-span-5">
          <RevealImage src={image} alt={imageAlt} className="h-[360px] w-full" />
        </div>
      </section>

      <section className="bg-[#F7F8F4] px-5 py-24 text-[#061826] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="border-t-2 border-[#35C759] pt-6">
              <h2 className="text-3xl font-black tracking-[-0.04em]">{section.title}</h2>
              <p className="mt-4 leading-8 text-[#061826]/65">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

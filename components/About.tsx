import { profile } from "@/data/portfolio";

const facts = [
  { label: "Based in", value: "Surabaya, East Java" },
  { label: "Focus", value: "Web & mobile products, end to end" },
  { label: "Currently", value: "Website Developer Intern, PT Pompa Dex Indoguna" },
  { label: "Languages", value: "Indonesian, English" },
];

export default function About() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
        <div>
          <h2 className="animate-fade-up font-display text-3xl text-ink sm:text-4xl">
            About
          </h2>
          <p className="animate-fade-up mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base [animation-delay:80ms]">
            {profile.bio}
          </p>
        </div>

        <dl className="animate-fade-up divide-y divide-line self-start border-y border-line [animation-delay:160ms]">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[100px_1fr] gap-4 py-4 sm:grid-cols-[130px_1fr]"
            >
              <dt className="font-label text-[13px] text-map-blue-soft">
                {fact.label}
              </dt>
              <dd className="text-[14px] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
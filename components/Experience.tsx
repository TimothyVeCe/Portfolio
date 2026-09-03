import { experience } from "@/data/portfolio";

type ExperienceItem = (typeof experience)[number];

function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="mt-8 space-y-0">
      {items.map((item, index) => (
        <li
          key={item.org + item.role}
          className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 first:border-t-0 sm:grid-cols-[160px_auto_1fr] sm:gap-8"
        >
          <p className="hidden font-label text-[13px] text-ink-soft sm:block">
            {item.period}
          </p>

          <div className="relative flex justify-center">
            <span
              className={`mt-1.5 h-2.5 w-2.5 rounded-full ${
                item.type === "work" ? "bg-signal" : "bg-map-blue-soft"
              }`}
            />
            {index !== items.length - 1 && (
              <span className="absolute top-4 h-full w-px bg-line" />
            )}
          </div>

          <div>
            <p className="font-label text-[13px] text-ink-soft sm:hidden">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-lg text-ink sm:mt-0">
              {item.role}
            </h3>
            <p className="mt-1 font-label text-[13px] text-map-blue-soft">
              {item.org}
            </p>
            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[14px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-soft" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const work = experience.filter((item) => item.type === "work");
  const org = experience.filter((item) => item.type === "org");

  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Experience
        </h2>

        {work.length > 0 && (
          <div>
            <p className="mt-10 font-label text-[13px] text-signal">
              Work & Internship
            </p>
            <ExperienceList items={work} />
          </div>
        )}

        {org.length > 0 && (
          <div>
            <p className="mt-4 font-label text-[13px] text-signal">
              Organization Experience
            </p>
            <ExperienceList items={org} />
          </div>
        )}
      </div>
    </section>
  );
}
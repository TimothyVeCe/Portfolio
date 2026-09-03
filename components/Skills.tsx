import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="border-b border-line bg-paper-raised/50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Toolkit
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="font-label text-[13px] text-map-blue-soft">
                {group.category}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
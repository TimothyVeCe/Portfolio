import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function FeaturedProject() {
    const featured = projects.find((p) => p.featured) ?? projects[0];

    return (
        <section className="border-b border-line">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="flex items-baseline justify-between">
                    <h2 className="animate-fade-up font-display text-3xl text-ink sm:text-4xl">
                        Flagship project
                    </h2>
                    <Link
                        href="/projects"
                        className="group hidden items-center gap-1.5 font-label text-[13px] text-ink-soft transition-colors hover:text-ink sm:flex"
                    >
                        All projects
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

                <Link
                    href={`/projects/${featured.id}`}
                    className="group relative mt-12 block overflow-hidden border border-line bg-ink p-8 text-paper transition-transform duration-300 hover:-translate-y-1 sm:p-10"
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="relative">
                        <p className="font-label text-[12px] text-signal">
                            {featured.type}
                        </p>
                        <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                            {featured.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper/75">
                            {featured.summary}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {featured.tools.map((tool) => (
                                <li
                                    key={tool}
                                    className="rounded-full border border-paper/25 px-3 py-1 font-label text-[12px] text-paper/85"
                                >
                                    {tool}
                                </li>
                            ))}
                        </ul>
                        <span className="mt-7 inline-flex items-center gap-1.5 font-label text-[13px] text-signal transition-colors group-hover:text-paper">
                            View full case study
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </div>
                </Link>

                <Link
                    href="/projects"
                    className="mt-6 flex items-center gap-1.5 font-label text-[13px] text-ink-soft transition-colors hover:text-ink sm:hidden"
                >
                    All projects →
                </Link>
            </div>
        </section>
    );
}
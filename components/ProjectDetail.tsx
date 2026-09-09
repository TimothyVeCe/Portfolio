import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectDetail({ project }: { project: Project }) {
    return (
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
            <Link
                href="/projects"
                className="group animate-fade-up inline-flex items-center gap-1.5 font-label text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
                <span className="transition-transform group-hover:-translate-x-1">
                    ←
                </span>
                All projects
            </Link>

            <p className="animate-fade-up mt-8 font-label text-[13px] text-map-blue-soft [animation-delay:60ms]">
                {project.featured ? "Flagship — " : ""}
                {project.type}
            </p>

            <h1 className="animate-fade-up mt-3 font-display text-3xl text-ink sm:text-5xl [animation-delay:100ms]">
                {project.name}
            </h1>

            <p className="animate-fade-up mt-3 font-label text-[13px] text-ink-soft [animation-delay:140ms]">
                {project.role}
            </p>

            <ul className="animate-fade-up mt-6 flex flex-wrap gap-2 [animation-delay:180ms]">
                {project.tools.map((tool) => (
                    <li
                        key={tool}
                        className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink"
                    >
                        {tool}
                    </li>
                ))}
            </ul>

            <p className="animate-fade-up mt-8 text-[15px] leading-relaxed text-ink-soft sm:text-base [animation-delay:220ms]">
                {project.summary}
            </p>

            <div className="animate-fade-up mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3 [animation-delay:260ms]">
                <div>
                    <p className="font-label text-[12px] text-map-blue-soft">
                        My role
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                        {project.myRole}
                    </p>
                </div>
                <div>
                    <p className="font-label text-[12px] text-map-blue-soft">
                        Impact
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                        {project.impact}
                    </p>
                </div>
                <div>
                    <p className="font-label text-[12px] text-map-blue-soft">
                        What I learned
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                        {project.learned}
                    </p>
                </div>
            </div>

            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group animate-fade-up mt-10 inline-flex items-center gap-1.5 border-b border-signal pb-0.5 font-label text-[13px] text-signal transition-colors hover:text-ink [animation-delay:300ms]"
                >
                    View repository on GitHub
                    <span className="transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </a>
            )}
        </article>
    );
}
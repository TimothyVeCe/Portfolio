import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function ProjectsGrid() {
    return (
        <div>
            {projects.map((project, index) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="animate-fade-up group block border-t border-line py-8 transition-colors first:border-t-0 hover:bg-paper-raised/60"
                    style={{ animationDelay: `${index * 70}ms` }}
                >
                    <div className="grid gap-4 px-2 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-4">
                        <div>
                            <p className="font-label text-[12px] text-map-blue-soft">
                                {project.featured ? "Flagship — " : ""}
                                {project.type}
                            </p>
                            <h3 className="mt-1.5 font-display text-xl text-ink transition-colors group-hover:text-map-blue sm:text-2xl">
                                {project.name}
                            </h3>
                            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-soft">
                                {project.summary}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <li
                                        key={tool}
                                        className="font-label text-[12px] text-ink-soft"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <span className="mt-1 flex items-center gap-1.5 font-label text-[13px] text-ink whitespace-nowrap transition-transform group-hover:translate-x-1">
                            View project →
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
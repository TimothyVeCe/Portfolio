import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Projects — Timothy Vieri Chandra",
};

export default function ProjectsPage() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-10 sm:pt-24">
                <div className="animate-fade-up flex items-baseline justify-between">
                    <h1 className="font-display text-3xl text-ink sm:text-4xl">
                        Selected work
                    </h1>
                    <p className="hidden font-label text-[13px] text-ink-soft sm:block">
                        {projects.length} projects
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 sm:pb-28">
                <ProjectsGrid />
            </div>
        </section>
    );
}
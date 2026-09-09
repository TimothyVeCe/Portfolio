import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    return { title: project ? `${project.name} — Timothy Vieri Chandra` : "Project not found" };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-line py-8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
        aria-expanded={open}
      >
        <div>
          <p className="font-label text-[12px] text-map-blue-soft">
            {project.type}
          </p>
          <h3 className="mt-1.5 font-display text-xl text-ink sm:text-2xl">
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

        <span className="mt-1 flex items-center gap-2 font-label text-[13px] text-ink whitespace-nowrap">
          {open ? "Close" : "Details"}
          <span
            className={`inline-block transition-transform ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </span>
      </button>

      {open && (
        <div className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          <div>
            <p className="font-label text-[12px] text-map-blue-soft">
              My role
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              {project.myRole}
            </p>
          </div>
          <div>
            <p className="font-label text-[12px] text-map-blue-soft">
              Impact
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              {project.impact}
            </p>
          </div>
          <div>
            <p className="font-label text-[12px] text-map-blue-soft">
              What I learned
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              {project.learned}
            </p>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-full flex w-fit items-center gap-1.5 font-label text-[13px] text-signal transition-colors hover:text-ink"
            >
              View repository <ExternalLinkIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="hidden font-label text-[13px] text-ink-soft sm:block">
            {projects.length} projects
          </p>
        </div>

        {featured && (
          <div className="relative mt-12 overflow-hidden border border-line bg-ink p-8 text-paper sm:p-10">
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
                Flagship — {featured.type}
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
              <div className="mt-7 grid gap-6 border-t border-paper/15 pt-6 sm:grid-cols-3">
                <div>
                  <p className="font-label text-[12px] text-signal">
                    My role
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/75">
                    {featured.myRole}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[12px] text-signal">
                    Impact
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/75">
                    {featured.impact}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[12px] text-signal">
                    What I learned
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/75">
                    {featured.learned}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          {rest.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
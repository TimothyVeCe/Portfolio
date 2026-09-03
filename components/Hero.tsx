import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <div>
          <p className="font-label text-[13px] text-map-blue-soft">
            {profile.location}
          </p>

          <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Timothy Vieri
            <br />
            Chandra
          </h1>

          <p className="mt-6 max-w-md font-label text-base text-signal sm:text-lg">
            {profile.role} — {profile.roleSecondary}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3 font-label text-[13px] text-paper transition-colors hover:bg-map-blue"
            >
              View projects
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-line px-6 py-3 font-label text-[13px] text-ink transition-colors hover:border-ink"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-signal" />
            <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-signal" />
            <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-signal" />
            <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-signal" />
            <div className="relative h-full w-full overflow-hidden bg-paper-raised grayscale-[15%]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 360px, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-center font-label text-[12px] text-ink-soft">
            Informatics Engineering · Petra Christian University
          </p>
        </div>
      </div>
    </section>
  );
}
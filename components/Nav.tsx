import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-label text-sm tracking-tight text-ink"
          aria-label="Back to top"
        >
          Timothy Vieri Chandra<span className="text-signal">.</span>
        </a>
        <nav className="hidden gap-8 font-label text-[13px] text-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          download
          className="rounded-full border border-ink px-4 py-2 font-label text-[13px] text-ink transition-colors hover:border-signal hover:bg-signal hover:text-paper"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

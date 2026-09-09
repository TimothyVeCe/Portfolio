"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-label text-sm tracking-tight text-ink"
          aria-label="Back to home"
        >
          TVC<span className="text-signal">.</span>
        </Link>

        <nav className="hidden gap-8 font-label text-[13px] text-ink-soft md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 transition-colors ${isActive ? "text-ink" : "hover:text-ink"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 ${isActive ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                />
              </Link>
            );
          })}
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
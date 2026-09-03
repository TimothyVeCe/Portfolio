import { profile } from "@/data/portfolio";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "LinkedIn", value: "timothy-vieri-chandra", href: profile.linkedin },
  { label: "GitHub", value: "TimothyVieri", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="font-label text-[13px] text-signal">Get in touch</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
          Open to full-stack, web, or mobile roles — let&apos;s talk.
        </h2>

        <div className="mt-12 grid gap-8 border-t border-paper/15 pt-10 sm:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <p className="font-label text-[12px] text-paper/50">
                {link.label}
              </p>
              <p className="mt-2 text-[14px] text-paper transition-colors group-hover:text-signal">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 font-label text-[12px] text-paper/40 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Timothy Vieri Chandra</p>
          <p>{profile.location} · {profile.coordinates}</p>
        </div>
      </div>
    </section>
  );
}
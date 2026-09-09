import { profile } from "@/data/portfolio";

const whatsappNumber = profile.phone.replace(/[^\d]/g, "");

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: "+" + profile.phone,
    href: `https://wa.me/${whatsappNumber}`,
  },
  { label: "LinkedIn", value: "timothy-vieri-chandra", href: profile.linkedin },
  { label: "GitHub", value: "TimothyVieri", href: profile.github },
];

export default function Contact() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="animate-fade-up font-label text-[13px] text-signal">
          Get in touch
        </p>
        <h2 className="animate-fade-up mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-5xl [animation-delay:80ms]">
          Open to full-stack, web, or mobile roles — let&apos;s talk.
        </h2>

        <div className="mt-12 grid gap-8 border-t border-paper/15 pt-10 sm:grid-cols-4">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group animate-fade-up block"
              style={{ animationDelay: `${160 + index * 80}ms` }}
            >
              <p className="font-label text-[12px] text-paper/50">
                {link.label}
              </p>
              <p className="mt-2 text-[14px] text-paper transition-colors group-hover:text-signal">
                {link.value}
              </p>
              <span className="mt-2 block h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
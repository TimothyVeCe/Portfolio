import Link from "next/link";

const cards = [
    {
        href: "/about",
        label: "About",
        blurb: "Background, toolkit, and a full timeline of work & organization experience.",
    },
    {
        href: "/contact",
        label: "Contact",
        blurb: "Email, phone, LinkedIn, and GitHub — open to full-stack, web, or mobile roles.",
    },
];

export default function QuickLinks() {
    return (
        <section className="border-b border-line bg-paper-raised/50">
            <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                {cards.map((card) => (
                    <Link
                        key={card.href}
                        href={card.href}
                        className="group relative bg-paper-raised/50 px-6 py-12 transition-colors hover:bg-ink sm:px-10 sm:py-16"
                    >
                        <p className="font-label text-[13px] text-map-blue-soft transition-colors group-hover:text-signal">
                            {card.label}
                        </p>
                        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft transition-colors group-hover:text-paper/75">
                            {card.blurb}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-1.5 font-label text-[13px] text-ink transition-colors group-hover:text-paper">
                            Go to {card.label.toLowerCase()}
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
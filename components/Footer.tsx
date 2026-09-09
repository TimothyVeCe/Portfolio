import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 font-label text-[12px] text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} Timothy Vieri Chandra</p>
        <p>
          {profile.location} · {profile.coordinates}
        </p>
      </div>
    </footer>
  );
}
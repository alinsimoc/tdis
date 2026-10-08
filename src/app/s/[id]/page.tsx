import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { allSessions, type Person } from "@/data/agenda";

export function generateStaticParams() {
  return allSessions.map((s) => ({ id: s.id }));
}

const find = async (params: Promise<{ id: string }>) => {
  const { id } = await params;
  return allSessions.find((s) => s.id === id) ?? notFound();
};

export async function generateMetadata({ params }: PageProps<"/s/[id]">): Promise<Metadata> {
  const s = await find(params);
  return { title: s.title, description: s.description?.[0] };
}

export default function SessionPage({ params }: PageProps<"/s/[id]">) {
  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-sep/50 bg-canvas/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="mx-auto max-w-2xl px-2">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-1 rounded-lg px-2 text-[17px] text-tint active:opacity-50"
          >
            <svg aria-hidden viewBox="0 0 12 20" className="h-5 w-3">
              <path d="M10 2L2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Agenda
          </Link>
        </div>
      </nav>

      <Suspense fallback={<Skeleton />}>
        <SessionDetails params={params} />
      </Suspense>
    </>
  );
}

// Bara de sus e în shell-ul static; conținutul depinde de URL, deci stă în Suspense.
async function SessionDetails({ params }: { params: Promise<{ id: string }> }) {
  const s = await find(params);

  return (
    <main className="mx-auto max-w-2xl px-4 pt-6 pb-16">
      <header className="px-1">
        {s.kind && <p className="text-[15px] font-semibold text-tint">{s.kind}</p>}
        <h1 className="mt-1 text-[28px] leading-tight font-bold tracking-tight text-balance">
          {s.title}
        </h1>
      </header>

      <ul className="mt-6 overflow-hidden rounded-2xl bg-card text-[17px]">
        <InfoRow icon={<ClockIcon />}>
          <time>{s.start}</time> – <time>{s.end}</time>
        </InfoRow>
        {s.room && <InfoRow icon={<PinIcon />}>{s.room}</InfoRow>}
        {s.lang && <InfoRow icon={<GlobeIcon />}>Sesiune în limba engleză</InfoRow>}
      </ul>

      {s.description && (
        <div className="mt-8 space-y-4 px-1 text-[17px] leading-relaxed">
          {s.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {s.moderators && (
        <People title={s.moderators.length > 1 ? "Moderatori" : "Moderator"} people={s.moderators} />
      )}
      {s.speakers && (
        <People title={s.speakers.length > 1 ? "Speakeri" : "Speaker"} people={s.speakers} />
      )}

      {s.exhibitors && (
        <section className="mt-8">
          <h2 className="px-1 text-[20px] font-semibold tracking-tight">Expozanți</h2>
          <ul className="mt-2 overflow-hidden rounded-2xl bg-card">
            {s.exhibitors.map((e) => (
              <li key={e} className="group pl-4">
                <p className="border-t border-sep/60 py-3 pr-4 text-[17px] group-first:border-t-0">{e}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

function Skeleton() {
  return (
    <main aria-busy className="mx-auto max-w-2xl animate-pulse px-4 pt-6">
      <div className="mx-1 h-4 w-24 rounded bg-pressed" />
      <div className="mx-1 mt-3 h-8 w-4/5 rounded-lg bg-pressed" />
      <div className="mt-6 h-24 rounded-2xl bg-card" />
    </main>
  );
}

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="group flex items-center gap-3 pl-4">
      <span className="text-tint">{icon}</span>
      <p className="flex-1 border-t border-sep/60 py-3 pr-4 tabular-nums group-first:border-t-0">
        {children}
      </p>
    </li>
  );
}

function People({ title, people }: { title: string; people: Person[] }) {
  return (
    <section className="mt-8">
      <h2 className="px-1 text-[20px] font-semibold tracking-tight">{title}</h2>
      <ul className="mt-2 overflow-hidden rounded-2xl bg-card">
        {people.map((p) => (
          <li key={p.name} className="group flex items-center gap-3 pl-4">
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-zinc-400 to-zinc-500 text-[15px] font-semibold text-white"
            >
              {initials(p.name)}
            </span>
            <div className="min-w-0 flex-1 border-t border-sep/60 py-3 pr-4 group-first:border-t-0">
              <p className="text-[17px] leading-snug font-medium">{p.name}</p>
              <p className="mt-0.5 text-[15px] leading-snug text-label-2">{p.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Prima și ultima literă mare din nume (fără titluri), ca în Contacts.
const initials = (name: string) => {
  const w = name.split(/\s+/).filter((x) => /^\p{Lu}/u.test(x) && !x.endsWith("."));
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
};

const iconCls = "size-5";
const ClockIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const PinIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const GlobeIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
  </svg>
);

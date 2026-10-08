"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { allDay, event, hasDetails, sessions, toMinutes, type Session } from "@/data/agenda";

const sections: { title: string; items: Session[] }[] = [
  { title: "Toată ziua", items: allDay },
  { title: "Dimineața", items: sessions.filter((s) => toMinutes(s.start) < 12 * 60) },
  {
    title: "După-amiaza",
    items: sessions.filter((s) => toMinutes(s.start) >= 12 * 60 && toMinutes(s.start) < 18 * 60),
  },
  { title: "Seara", items: sessions.filter((s) => toMinutes(s.start) >= 18 * 60) },
];

const fmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: event.timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// Minutul curent din ziua evenimentului (ora României), sau null în altă zi.
function getNow(): number | null {
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  if (`${p.year}-${p.month}-${p.day}` !== event.date) return null;
  return Number(p.hour) * 60 + Number(p.minute);
}

function subscribe(cb: () => void) {
  const t = setInterval(cb, 30_000);
  return () => clearInterval(t);
}

const useNow = () => useSyncExternalStore(subscribe, getNow, () => null);

type Status = "past" | "live" | "next";

function status(s: Session, now: number | null): Status {
  if (now === null) return "next";
  if (now >= toMinutes(s.end)) return "past";
  return now >= toMinutes(s.start) ? "live" : "next";
}

export function AgendaList() {
  const now = useNow();
  const live = sessions.filter((s) => !s.isBreak && status(s, now) === "live");

  return (
    <>
      {sections.map((sec) => (
        <section key={sec.title} className="mt-8">
          <h2 className="sticky top-0 z-10 -mx-4 bg-canvas/85 px-5 py-2 text-[20px] font-semibold tracking-tight backdrop-blur-xl">
            {sec.title}
          </h2>
          <ul className="mt-1 overflow-hidden rounded-2xl bg-card">
            {sec.items.map((s) => (
              <Row key={s.id} s={s} st={sec.items === allDay ? "next" : status(s, now)} />
            ))}
          </ul>
        </section>
      ))}

      {live.length > 0 && (
        <button
          type="button"
          onClick={() =>
            document
              .getElementById(live[0].id)
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-20 flex min-h-12 max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2.5 rounded-full border border-sep/50 bg-card/80 px-5 text-[15px] font-semibold shadow-lg shadow-black/10 backdrop-blur-xl transition active:scale-95"
        >
          <LiveDot />
          <span className="truncate">
            Acum: {live.map((s) => s.kind ?? s.title).join(" · ")}
          </span>
        </button>
      )}
    </>
  );
}

function LiveDot() {
  return (
    <span className="relative flex size-2.5 shrink-0">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-tint opacity-60" />
      <span className="relative inline-flex size-2.5 rounded-full bg-tint" />
    </span>
  );
}

function Row({ s, st }: { s: Session; st: Status }) {
  const linked = hasDetails(s);
  const parallel = s.room && s.room !== "ERRA Ballroom" && !allDay.includes(s);

  const body = (
    <>
      <div className="w-12 shrink-0 pt-3.5 tabular-nums">
        <time className="block text-[15px] font-semibold">{s.start}</time>
        <time className="block text-[13px] text-label-2">{s.end}</time>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-3 border-t border-sep/60 py-3 pr-4 group-first:border-t-0">
        <div className="min-w-0 flex-1">
          {st === "live" && (
            <p className="mb-1 flex items-center gap-1.5 text-[13px] font-semibold text-tint">
              <LiveDot /> Acum
            </p>
          )}
          {s.kind && <p className="text-[13px] font-medium text-label-2">{s.kind}</p>}
          <p
            className={
              s.isBreak
                ? "text-[17px] leading-snug text-label-2"
                : "text-[17px] leading-snug font-semibold"
            }
          >
            {s.title}
          </p>
          {(s.room || s.lang) && (
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[15px] text-label-2">
              {s.room && (
                <span className={parallel ? "font-medium text-accent" : undefined}>{s.room}</span>
              )}
              {s.lang && (
                <span className="rounded-md border border-sep px-1.5 text-[11px] font-semibold leading-5 tracking-wide">
                  {s.lang}
                </span>
              )}
            </p>
          )}
        </div>
        {linked && (
          <svg aria-hidden viewBox="0 0 8 14" className="h-3.5 w-2 shrink-0 text-sep">
            <path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </>
  );

  const cls = `flex gap-3 pl-4 transition-colors ${st === "past" ? "opacity-45" : ""} ${
    st === "live" ? "bg-tint/8" : ""
  }`;

  return (
    <li id={s.id} className="group scroll-mt-16">
      {linked ? (
        <Link href={`/s/${s.id}`} prefetch className={`${cls} active:bg-pressed`}>
          {body}
        </Link>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </li>
  );
}

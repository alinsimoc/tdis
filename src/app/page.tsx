import { AgendaList } from "@/components/agenda-list";
import { ShareButton } from "@/components/share-button";
import { event } from "@/data/agenda";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-[max(2.5rem,env(safe-area-inset-top))] pb-28">
      <header className="px-1">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-label-2">
          {event.dateLabel}
        </p>
        <div className="mt-1 flex items-center justify-between gap-4">
          <h1 className="text-[34px] leading-tight font-bold tracking-tight">Agenda</h1>
          <ShareButton />
        </div>
        <p className="mt-3 text-[22px] leading-tight font-semibold tracking-tight text-balance">
          {event.name} · {event.edition}
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-1 mt-1 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 text-[17px] text-tint active:opacity-50"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-[18px] shrink-0" fill="currentColor">
            <path d="M12 2a7 7 0 00-7 7c0 5.3 6.2 12.2 6.5 12.5a.7.7 0 001 0C12.8 21.2 19 14.3 19 9a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
          </svg>
          {event.venue}
        </a>
      </header>
      <AgendaList />
      <footer className="mt-12 text-center text-[13px] text-label-2">
        Dezvoltat de{" "}
        <a
          href="https://softisfy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-medium text-label active:opacity-50"
        >
          softisfy.com
        </a>
      </footer>
    </main>
  );
}

import { AgendaList } from "@/components/agenda-list"
import { ShareButton } from "@/components/share-button"
import { event } from "@/data/agenda"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-[max(2.5rem,env(safe-area-inset-top))] pb-28">
      <header className="px-1">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-label-2">
          {event.dateLabel}
        </p>
        <div className="mt-1 flex items-center justify-between gap-4">
          <h1 className="text-[34px] leading-tight font-bold tracking-tight">
            Agenda
          </h1>
          <div className="flex gap-2">
            <a
              href="/agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label="Descarcă PDF"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-tint transition active:scale-90 active:bg-pressed"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-[22px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
            </a>
            <ShareButton />
          </div>
        </div>
        <p className="mt-3 text-[22px] leading-tight font-semibold tracking-tight text-balance">
          {event.name} · {event.edition}
        </p>
        <div className="mt-1 flex flex-col items-start">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="-mx-1 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 text-[17px] text-tint active:opacity-50"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-[18px] shrink-0"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 00-7 7c0 5.3 6.2 12.2 6.5 12.5a.7.7 0 001 0C12.8 21.2 19 14.3 19 9a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
            {event.venue}
          </a>
          <a
            href={event.travelInfo}
            target="_blank"
            rel="noopener noreferrer"
            className="-mx-1 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 text-[17px] text-tint active:opacity-50"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-[18px] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 7.5v.01" />
            </svg>
            Informații despre transport și cazare
          </a>
        </div>
        <p className="mt-2 text-[13px] leading-snug text-label-2">
          Aplicația a fost realizată cu ajutorul inteligenței artificiale. Este posibil ca unele
          informații să nu fie corecte.
        </p>
      </header>
      <AgendaList />
    </main>
  )
}

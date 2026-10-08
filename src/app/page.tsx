import { AgendaList } from "@/components/agenda-list";
import { event } from "@/data/agenda";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-[max(2.5rem,env(safe-area-inset-top))] pb-28">
      <header className="px-1">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-label-2">
          {event.dateLabel}
        </p>
        <h1 className="mt-1 text-[34px] leading-tight font-bold tracking-tight">Agenda</h1>
        <p className="mt-2 text-[17px] leading-snug text-label-2">
          {event.name} · {event.edition}
          <br />
          {event.venue}
        </p>
      </header>
      <AgendaList />
    </main>
  );
}

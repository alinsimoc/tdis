"use client";

import { useRef, useState } from "react";
import { encode } from "uqr";

function Qr({ text }: { text: string }) {
  const { size, data } = encode(text, { border: 0, ecc: "M" });
  let d = "";
  data.forEach((row, y) => row.forEach((on, x) => on && (d += `M${x} ${y}h1v1h-1z`)));
  return (
    <svg viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" className="size-full" role="img" aria-label={`Cod QR pentru ${text}`}>
      <path d={d} fill="#000" />
    </svg>
  );
}

export function ShareButton() {
  const ref = useRef<HTMLDialogElement>(null);
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const open = () => {
    setUrl(`${location.origin}/`);
    setCopied(false);
    ref.current?.showModal();
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: document.title, url }).catch(() => {});
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Distribuie agenda"
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-tint transition active:scale-90 active:bg-pressed"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h3v-3" />
        </svg>
      </button>

      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && ref.current.close()}
        aria-labelledby="share-title"
        className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-3xl bg-card p-0 text-label shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <div className="relative px-6 pt-7 pb-6 text-center">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Închide"
            className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-full text-label-2 active:bg-pressed"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <h2 id="share-title" className="text-[20px] font-semibold tracking-tight">
            Distribuie agenda
          </h2>
          <p className="mt-1 text-[15px] text-label-2">Scanează codul cu camera telefonului</p>

          {/* Fundal alb, ca să se poată scana */}
          <div className="mx-auto mt-6 aspect-square w-full max-w-64 rounded-2xl bg-white p-4">
            {url && <Qr text={url} />}
          </div>

          <p className="mt-4 truncate text-[15px] text-label-2">{url.replace(/^https?:\/\//, "")}</p>

          <button
            type="button"
            onClick={share}
            className="mt-5 min-h-12 w-full rounded-xl bg-tint text-[17px] font-semibold text-white transition active:opacity-80"
          >
            {copied ? "Link copiat ✓" : "Trimite linkul"}
          </button>
        </div>
      </dialog>
    </>
  );
}

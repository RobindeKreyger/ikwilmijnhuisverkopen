import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">
        Bedankt
      </p>
      <h1 className="text-4xl font-semibold text-slate-900">
        We hebben je aanvraag ontvangen
      </h1>
      <p className="text-lg text-slate-600">
        We nemen binnen 24 uur contact op. Intussen kan je alvast een
        waardeschatting starten of de volgende stappen bekijken.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wijschattenuwwoning.be"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Schatting doen
        </a>
        <Link
          href="/hoe-het-werkt"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Bekijk de stappen
        </Link>
      </div>
    </div>
  );
}

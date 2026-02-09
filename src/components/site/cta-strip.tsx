import Link from "next/link";

interface CtaStripProps {
  title?: string;
  description?: string;
}

export function CtaStrip({
  title = "Klaar om zonder makelaar te verkopen?",
  description = "Vraag je gratis intake aan of start meteen met een externe waardeschatting.",
}: CtaStripProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wijschattenuwwoning.be"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Schatting doen
          </a>
          <Link
            href="/contact#intake-form"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Gratis intake
          </Link>
        </div>
      </div>
    </section>
  );
}

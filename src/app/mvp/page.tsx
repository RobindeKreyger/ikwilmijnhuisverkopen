export default function MvpPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Project Verkoopklaar
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          MVP one-pager (PDF)
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Download de beknopte A4-samenvatting van het MVP-plan, inclusief
          pricing, unit economics en go-to-market.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/verkoopklaar-mvp.pdf"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
          >
            Download PDF
          </a>
          <a
            href="/"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            Terug naar home
          </a>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
        <p>
          Tip: de PDF is ook rechtstreeks beschikbaar via{" "}
          <a
            className="font-semibold text-brand"
            href="/verkoopklaar-mvp.pdf"
          >
            /verkoopklaar-mvp.pdf
          </a>
          .
        </p>
      </div>
    </section>
  );
}

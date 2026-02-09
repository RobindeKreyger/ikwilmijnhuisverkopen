export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Production-grade MVP
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">
          Zelf je woning verkopen in Vlaanderen, met controle en zekerheid.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Project V combineert deterministische software met optionele menselijke
          validatie. Geen commissies, geen abonnementen — wel vaste fees per
          dossier en realtime besluitvorming.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/cases/new"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
          >
            Start nieuw verkoopdossier
          </a>
          <a
            href="/cases"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            Bekijk actieve dossiers
          </a>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Waardeschatting",
            copy: "Externe ankerpunten + scenario-engine voor snelle, markt- en maximale waarde.",
          },
          {
            title: "Taken & documenten",
            copy: "Meer dan 40 Vlaanderen-specifieke taken en verplichte attesten.",
          },
          {
            title: "Risico-gestuurde beslissingen",
            copy: "Biedingsanalyse, risico-indicatoren en optionele expert reviews.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

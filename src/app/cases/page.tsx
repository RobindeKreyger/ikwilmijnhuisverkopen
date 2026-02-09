const cases = [
  {
    id: "case-v-001",
    title: "Gezinswoning in Gent",
    status: "Actief",
    valuation: "€ 435.000",
    nextStep: "Takenpakket afronden",
  },
  {
    id: "case-v-002",
    title: "Rijwoning in Mechelen",
    status: "Setup",
    valuation: "€ 312.000",
    nextStep: "Externe schatting invoeren",
  },
  {
    id: "case-v-003",
    title: "Appartement in Leuven",
    status: "Biedingen",
    valuation: "€ 389.000",
    nextStep: "Biedingen vergelijken",
  },
];

export default function CasesPage() {
  return (
    <section className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Dossiers</h1>
          <p className="mt-2 text-sm text-slate-600">
            Volg elk verkoopdossier van opstart tot compromis.
          </p>
        </div>
        <a
          href="/cases/new"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
        >
          Nieuw dossier starten
        </a>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((saleCase) => (
          <a
            key={saleCase.id}
            href={`/cases/${saleCase.id}`}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {saleCase.status}
              </span>
              <span className="text-xs text-slate-500">{saleCase.id}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand">
              {saleCase.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Laatste waardering: <strong>{saleCase.valuation}</strong>
            </p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>Volgende stap</span>
              <span className="text-slate-700">{saleCase.nextStep}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

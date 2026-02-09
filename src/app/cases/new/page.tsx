const steps = [
  {
    title: "Basisgegevens woning",
    description: "Adres, type woning, bouwjaar en EPC.",
  },
  {
    title: "Externe waardering",
    description: "Manuele invoer van wijschattenuwwoning.be",
  },
  {
    title: "Monetisatie & dossierfee",
    description: "Kies het vaste fee-pakket en optionele expertvalidatie.",
  },
];

export default function NewCasePage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase text-brand">
          Dossier opstart
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Nieuw verkoopdossier
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Begeleid proces in drie stappen. Je kan altijd opslaan en later
          verdergaan.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-500">
              Stap {index + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Snelle intake (MVP)
        </h2>
        <form className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { label: "Straat + nummer", placeholder: "Meersstraat 14" },
            { label: "Postcode", placeholder: "9000" },
            { label: "Gemeente", placeholder: "Gent" },
            { label: "Woningtype", placeholder: "Gezinswoning" },
            { label: "Bouwjaar", placeholder: "1988" },
            { label: "Bewoonbare oppervlakte (m²)", placeholder: "185" },
            { label: "Externe schatting (EUR)", placeholder: "435000" },
            { label: "EPC-label", placeholder: "C" },
          ].map((field) => (
            <label key={field.label} className="text-sm font-medium text-slate-700">
              {field.label}
              <input
                type="text"
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none"
              />
            </label>
          ))}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              Dossier aanmaken
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

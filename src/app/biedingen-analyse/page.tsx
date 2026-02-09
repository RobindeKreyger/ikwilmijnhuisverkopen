import { CtaStrip } from "@/components/site/cta-strip";

const offers = [
  {
    bidder: "Bieder A",
    price: "€ 410.000",
    conditions: "Voorbehoud lening",
    timing: "60 dagen",
    score: "7,5/10",
  },
  {
    bidder: "Bieder B",
    price: "€ 402.000",
    conditions: "Geen voorbehoud",
    timing: "45 dagen",
    score: "8,6/10",
  },
  {
    bidder: "Bieder C",
    price: "€ 415.000",
    conditions: "Voorbehoud verkoop",
    timing: "90 dagen",
    score: "6,8/10",
  },
];

export default function BiedingenAnalysePage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Biedingenanalyse
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Vergelijk biedingen met zekerheid
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Niet het hoogste bedrag wint, maar het beste totaalplaatje. We geven
          elk bod een score op prijs, voorwaarden, timing en financiering.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Hoe we vergelijken
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Prijs versus markt",
              copy: "We leggen elke bieding naast de waardeschatting en lokale trends.",
            },
            {
              title: "Voorwaarden",
              copy: "Voorbehoud van lening of verkoop verlaagt de zekerheid.",
            },
            {
              title: "Timing & haalbaarheid",
              copy: "Wanneer wil de koper tekenen en hoe haalbaar is dat?",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900">Voorbeeld</h2>
          <p className="text-sm text-slate-500">
            Illustratief, gebaseerd op een woning in Gent.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th className="pb-3 pr-4">Bieder</th>
                <th className="pb-3 pr-4">Prijs</th>
                <th className="pb-3 pr-4">Voorwaarden</th>
                <th className="pb-3 pr-4">Timing</th>
                <th className="pb-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr
                  key={offer.bidder}
                  className="border-b border-slate-100 text-slate-700 last:border-0"
                >
                  <td className="py-3 pr-4 font-semibold text-slate-900">
                    {offer.bidder}
                  </td>
                  <td className="py-3 pr-4">{offer.price}</td>
                  <td className="py-3 pr-4">{offer.conditions}</td>
                  <td className="py-3 pr-4">{offer.timing}</td>
                  <td className="py-3">{offer.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Je krijgt een duidelijke aanbeveling: doorgaan, heronderhandelen of
          extra zekerheid vragen.
        </p>
      </section>

      <CtaStrip
        title="Wil je hulp bij je biedingen?"
        description="Vraag een gratis intake aan en ontdek hoe we jouw biedingen vergelijken."
      />
    </div>
  );
}

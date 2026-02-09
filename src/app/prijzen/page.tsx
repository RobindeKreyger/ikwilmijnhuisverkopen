import { CtaStrip } from "@/components/site/cta-strip";

const upsells = [
  { label: "Prijsvalidatie", range: "€250 – €400" },
  { label: "Onderhandelingssupport", range: "€300 – €600" },
  { label: "Compromis check", range: "€200 – €350" },
  { label: "Strategische call", range: "€99" },
];

export default function PrijzenPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Prijzen
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Vaste fee, geen commissies
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Je betaalt één vaste basisfee voor de tooling. Experts schakel je alleen
          in wanneer je het nodig hebt.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Basisproduct
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Alles om zelf te verkopen, inclusief biedingenanalyse.
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-semibold text-slate-900">€399</p>
              <p className="text-xs text-slate-500">per woning • éénmalig</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li>Waardeschatting & prijsstrategie</li>
            <li>Vlaamse checklist & attesten</li>
            <li>Marketingtemplates & timing</li>
            <li>Biedingenanalyse + score</li>
            <li>Support via mail</li>
            <li>Persoonlijke roadmap</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Expert moment aanvragen
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Plan een korte call met een expert en ontvang advies op maat.
          </p>
          <form
            name="expert-moment"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="expert-moment" />
            <p className="hidden">
              <label>
                Niet invullen: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="expert-name">
                Naam
              </label>
              <input
                id="expert-name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="expert-email">
                Email
              </label>
              <input
                id="expert-email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label
                className="text-xs font-semibold text-slate-600"
                htmlFor="expert-request"
              >
                Type hulp
              </label>
              <select
                id="expert-request"
                name="requestType"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <option value="">Maak een keuze</option>
                <option>Onderhandeling</option>
                <option>Compromis check</option>
                <option>Prijsvalidatie</option>
                <option>Strategisch advies</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="expert-message">
                Vraag / context
              </label>
              <textarea
                id="expert-message"
                name="message"
                rows={3}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Expert moment aanvragen
            </button>
          </form>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Optionele expert upgrades
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Kies enkel wat jij nodig hebt. Alle bedragen zijn richtprijzen (incl.
          btw) voor Vlaanderen.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {upsells.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-1 text-sm text-slate-600">{item.range}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Eerst even sparren?"
        description="Plan een gratis intake en ontdek of zelf verkopen loont voor jouw woning."
      />
    </div>
  );
}

import Link from "next/link";
import { CtaStrip } from "@/components/site/cta-strip";

const unbundleRows = [
  {
    label: "DIY",
    highlight: "Alles zelf",
    copy: "Je regelt attesten, marketing, bezoeken, biedingen en compromis alleen.",
  },
  {
    label: "Makelaar",
    highlight: "Alles uitbesteed",
    copy: "Je betaalt 2-3% commissie en hebt weinig zicht op de echte processen.",
  },
  {
    label: "Verkoopklaar",
    highlight: "Slimme mix",
    copy: "Tooling voor repeatable werk, experts alleen waar het echt risico is.",
  },
];

const testimonials = [
  {
    name: "Liesbeth, Gent",
    quote:
      "Geen zever: alles stond in een dashboard en we schakelden pas een expert in bij het compromis.",
  },
  {
    name: "Tom, Mechelen",
    quote:
      "We betaalden een vaste fee en hielden het overzicht. De biedingenanalyse gaf ons rust.",
  },
  {
    name: "Sarah, Leuven",
    quote:
      "Snelle waardeschatting, duidelijke stappen en enkel expert support wanneer we het wilden.",
  },
];

const partners = [
  "Professionele fotografen",
  "EPC & attesten",
  "Juridische screening",
  "Lokale notarissen",
  "Onderhandelaars",
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Vlaanderen • vaste fee
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Zelf verkopen zonder makelaar, met zekerheid.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Project Verkoopklaar combineert slimme tooling met on-demand experts.
            Alles wat herhaalbaar is = tool & AI. Alles met financieel of
            juridisch risico = expert. Geen commissies, wel vaste fees.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wijschattenuwwoning.be"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Schatting doen
            </a>
            <Link
              href="/contact#intake-form"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Gratis intake aanvragen
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Vaste fee per woning",
              "Juridische zekerheid",
              "Volledig transparant",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">In één oogopslag</p>
          <ul className="mt-5 space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-900">Stap 1:</span> Start
              met een externe waardeschatting en een verkoopplan.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Stap 2:</span> Volg
              je taken, attesten en marketing in één dashboard.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Stap 3:</span>
              Vergelijk biedingen objectief met onze analyse.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Stap 4:</span>
              Schakel experten in voor compromis en onderhandeling.
            </li>
          </ul>
          <Link
            href="/hoe-het-werkt"
            className="mt-6 inline-flex text-sm font-semibold text-brand"
          >
            Bekijk de aanpak →
          </Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Waarom nu?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Steeds meer verkopers willen controle, maar willen geen commissie
            betalen voor standaardwerk. Project Verkoopklaar geeft je dezelfde
            zekerheid als een makelaar, zonder het prijskaartje.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">
                Transparantie wordt de norm
              </p>
              <p>
                Vergelijk biedingen op voorwaarden, timing en financiering.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Wetgeving verandert</p>
              <p>
                Vlaamse attesten en verplichtingen blijven stijgen. Wij maken ze
                beheersbaar.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Vaste fee wint</p>
              <p>
                Je weet vooraf wat je betaalt, zonder verborgen commissie.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Wat we ontkoppelen
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            De verkoop bestaat uit herhaalbaar werk en risicovolle beslissingen.
            Wij scheiden die twee.
          </p>
          <div className="mt-6 space-y-4">
            {unbundleRows.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    {row.label}
                  </p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {row.highlight}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{row.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Wat verkopers zeggen
          </h2>
          <Link href="/contact" className="text-sm font-semibold">
            Plan een gesprek →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-600">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Geverifieerde partners
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          We werken samen met gespecialiseerde partners in Vlaanderen zodat jij
          snel kan schakelen wanneer nodig.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      <CtaStrip />
    </div>
  );
}

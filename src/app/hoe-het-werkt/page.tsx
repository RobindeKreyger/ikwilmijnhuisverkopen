import Link from "next/link";
import { CtaStrip } from "@/components/site/cta-strip";

const steps = [
  {
    title: "Waardeschatting",
    copy: "Start met een externe waardeschatting en bepaal samen je richtprijs en strategie.",
  },
  {
    title: "Dashboard & checklist",
    copy: "Alle Vlaamse attesten, documenten en marketingtaken komen in één overzicht.",
  },
  {
    title: "Biedingen analyseren",
    copy: "Vergelijk biedingen op prijs, voorwaarden, timing en financiering.",
  },
  {
    title: "Experts wanneer nodig",
    copy: "Voor onderhandeling, compromis en risico-check schakelen we specialisten in.",
  },
];

export default function HoeHetWerktPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Zo werkt het
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          De stappen van verkoop tot compromis
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Verkoopklaar is geen makelaar, maar een slimme workflow. Jij houdt de
          controle, wij bewaken de risico&apos;s.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Stap {index + 1}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{step.copy}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Wat jij doet vs. wat wij doen
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">Jij</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Keurt beslissingen goed en behoudt de regie.</li>
              <li>Plant bezoeken en bepaalt de gewenste timing.</li>
              <li>Kiest welke experts je inzet.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">Wij</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Automatiseren checklist, attesten en marketingflow.</li>
              <li>Analyseren biedingen en duiden risico&apos;s.</li>
              <li>Leveren on-demand experts voor juridische zekerheid.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://wijschattenuwwoning.be"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Start waardeschatting
          </a>
          <Link
            href="/contact#intake-form"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Gratis intake
          </Link>
        </div>
      </section>

      <CtaStrip />
    </div>
  );
}

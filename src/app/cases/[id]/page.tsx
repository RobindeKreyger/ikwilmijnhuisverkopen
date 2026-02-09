import { notFound } from "next/navigation";

import { cases } from "../data";

const tabs = [
  "Waardeschatting",
  "Taken & checklist",
  "Documenten",
  "Marketing playbook",
  "Bezoeken",
  "Biedingen",
  "Expert ondersteuning",
  "Export",
];

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((saleCase) => ({ id: saleCase.id }));
}

type CaseDetailPageProps = {
  params: { id: string };
};

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  const saleCase = cases.find((item) => item.id === params.id);

  if (!saleCase) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-brand">Dossier</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {saleCase.title}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
            Status: {saleCase.status}
          </span>
          <span>Laatste update: {saleCase.lastUpdate}</span>
          <span>Dossierfee: {saleCase.dossierFee}</span>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-brand hover:text-brand"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Waardescenario’s
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex justify-between">
              <span>Snel verkopen</span>
              <strong className="text-slate-900">€ 395.000</strong>
            </li>
            <li className="flex justify-between">
              <span>Marktwaarde</span>
              <strong className="text-slate-900">€ 435.000</strong>
            </li>
            <li className="flex justify-between">
              <span>Maximale waarde</span>
              <strong className="text-slate-900">€ 468.000</strong>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Externe schatting als anker. Interne engine past risico’s toe op EPC
            en renovatieplicht.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Takenoverzicht
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            14 taken in uitvoering, 9 afgerond.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Technische attesten</span>
              <span className="font-semibold text-slate-900">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Marketing voorbereiden</span>
              <span className="font-semibold text-slate-900">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Administratief</span>
              <span className="font-semibold text-slate-900">80%</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Expert ondersteuning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Optioneel, vaste fee per aanvraag. Geen commissies.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between">
              <span>Prijsvalidatie</span>
              <span className="font-semibold text-slate-900">€ 190</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Compromis-check</span>
              <span className="font-semibold text-slate-900">€ 280</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Strategische call</span>
              <span className="font-semibold text-slate-900">€ 120</span>
            </li>
          </ul>
          <button className="mt-5 w-full rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
            Vraag expertadvies aan
          </button>
        </div>
      </div>
    </section>
  );
}

import { CtaStrip } from "@/components/site/cta-strip";

const faqs = [
  {
    question: "Is Project Verkoopklaar een makelaar?",
    answer:
      "Nee. We zijn een vaste-fee service die tooling en experts combineert. Jij blijft eigenaar van de verkoop.",
  },
  {
    question: "Welke regio bedienen jullie?",
    answer:
      "We focussen op Vlaanderen. Onze checklist en attesten zijn volledig Vlaams afgestemd.",
  },
  {
    question: "Wat zit er in de basisfee van €399?",
    answer:
      "Waardeschatting, checklist, marketingflow, biedingenanalyse en begeleiding per mail.",
  },
  {
    question: "Kan ik enkel een expertmoment boeken?",
    answer:
      "Ja, dat kan. Je kiest de expert die je nodig hebt en betaalt enkel voor dat moment.",
  },
  {
    question: "Hoe werken jullie met attesten?",
    answer:
      "We geven een volledige checklist en koppelen je aan partners voor EPC, asbest, elektriciteit en meer.",
  },
  {
    question: "Moet ik zelf de bezoeken doen?",
    answer:
      "Ja, jij blijft het gezicht naar de kopers. We helpen met scripts, timing en voorbereiding.",
  },
  {
    question: "Wat als ik toch een makelaar wil inschakelen?",
    answer:
      "Geen probleem. Je kan op elk moment stoppen of overschakelen. Er zijn geen lange contracten.",
  },
  {
    question: "Hoe helpt de biedingenanalyse?",
    answer:
      "We vergelijken biedingen op prijs, voorwaarden en timing. Zo kies je het veiligste bod.",
  },
  {
    question: "Zijn de expertfees verplicht?",
    answer:
      "Nee. Experts zijn optioneel. We adviseren wanneer het risico verhoogt, jij beslist.",
  },
  {
    question: "Kan ik de verkoop zelf blijven sturen?",
    answer:
      "Absoluut. Jij beslist over prijs, timing en onderhandelingen. Wij geven inzicht.",
  },
  {
    question: "Werkt dit voor appartementen en huizen?",
    answer:
      "Ja. Zowel appartementen, rijwoningen als open bebouwingen passen in onze flow.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "Binnen 24 uur na intake activeren we je dashboard en checklist.",
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Veelgestelde vragen
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Kort en duidelijk, zoals het hoort. Nog iets niet helder? Vraag het
          gerust.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </section>

      <CtaStrip
        title="Meer weten?"
        description="Plan een intake en krijg advies op maat voor jouw woning."
      />
    </div>
  );
}

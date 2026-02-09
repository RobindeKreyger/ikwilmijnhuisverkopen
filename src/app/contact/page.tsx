import { CtaStrip } from "@/components/site/cta-strip";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Vraag je gratis intake aan
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          We bekijken jouw woning en verkoopdoelstelling. Je krijgt binnen 24 uur
          een voorstel en concrete volgende stappen.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          id="intake-form"
          name="gratis-intake"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <input type="hidden" name="form-name" value="gratis-intake" />
          <p className="hidden">
            <label>
              Niet invullen: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="name">
                Naam
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600" htmlFor="phone">
                Telefoon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label
                className="text-xs font-semibold text-slate-600"
                htmlFor="municipality"
              >
                Gemeente
              </label>
              <input
                id="municipality"
                name="municipality"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <label
                className="text-xs font-semibold text-slate-600"
                htmlFor="property-type"
              >
                Type woning
              </label>
              <select
                id="property-type"
                name="propertyType"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <option value="">Maak een keuze</option>
                <option>Appartement</option>
                <option>Rijwoning</option>
                <option>Open bebouwing</option>
                <option>Halfopen bebouwing</option>
                <option>Investeringspand</option>
              </select>
            </div>
            <div>
              <label
                className="text-xs font-semibold text-slate-600"
                htmlFor="timeline"
              >
                Verkooptermijn
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <option value="">Maak een keuze</option>
                <option>Binnen 1 maand</option>
                <option>1 - 3 maanden</option>
                <option>3 - 6 maanden</option>
                <option>Later dit jaar</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-xs font-semibold text-slate-600" htmlFor="message">
              Extra info (optioneel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Gratis intake aanvragen
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Door te verzenden ga je akkoord met onze privacyvoorwaarden.
          </p>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Wat gebeurt er na je aanvraag?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>We bellen je binnen 1 werkdag.</li>
              <li>We bespreken jouw doel, timing en locatie.</li>
              <li>Je krijgt een helder voorstel met vaste fee.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-3 text-sm text-slate-600">
              Email: <a href="mailto:hallo@projectverkoopklaar.be">hallo@projectverkoopklaar.be</a>
            </p>
            <p className="mt-2 text-sm text-slate-600">Vlaanderen</p>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Wil je liever eerst schatten?"
        description="Start een externe waardeschatting en krijg direct inzicht in je prijsvork."
      />
    </div>
  );
}

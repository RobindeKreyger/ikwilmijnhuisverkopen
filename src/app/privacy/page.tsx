export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Privacy
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Privacyverklaring
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Deze verklaring is van toepassing op Project Verkoopklaar en heeft als
          doel transparant te zijn over het verzamelen en verwerken van
          persoonsgegevens.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">1. Gegevens</h2>
        <p className="mt-3 text-sm text-slate-600">
          We verzamelen enkel gegevens die je zelf invult via onze formulieren,
          zoals naam, contactgegevens, gemeente, type woning en eventuele
          context.
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-slate-900">2. Doel</h2>
        <p className="mt-3 text-sm text-slate-600">
          We gebruiken je gegevens om contact op te nemen, je vraag te behandelen
          en je een voorstel te doen. We delen je gegevens niet met derden zonder
          jouw toestemming.
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-slate-900">
          3. Bewaartermijn
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          We bewaren je gegevens zolang dit nodig is om je aanvraag te behandelen
          of zolang de wet dit vereist.
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-slate-900">4. Rechten</h2>
        <p className="mt-3 text-sm text-slate-600">
          Je kan je gegevens inkijken, aanpassen of laten verwijderen. Stuur een
          mail naar <a href="mailto:hallo@projectverkoopklaar.be">hallo@projectverkoopklaar.be</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-slate-900">5. Cookies</h2>
        <p className="mt-3 text-sm text-slate-600">
          We gebruiken enkel functionele cookies en een optionele analytics
          tool. Je kan cookies blokkeren via je browserinstellingen.
        </p>
        <p className="mt-8 text-sm text-slate-500">
          Laatst bijgewerkt: 10 september 2024.
        </p>
      </section>
    </div>
  );
}

import Link from "next/link";

const links = [
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/biedingen-analyse", label: "Biedingenanalyse" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-slate-900">
            Project Verkoopklaar
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Zelf verkopen zonder makelaar, met zekerheid. Tooling voor alles wat
            herhaalbaar is en on-demand experts voor alles met financieel of
            juridisch risico.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Navigatie</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-600 hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <p className="mt-3 text-sm text-slate-600">
            Email: <a href="mailto:hallo@projectverkoopklaar.be">hallo@projectverkoopklaar.be</a>
          </p>
          <p className="mt-2 text-sm text-slate-600">Vlaanderen, België</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Project Verkoopklaar. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}

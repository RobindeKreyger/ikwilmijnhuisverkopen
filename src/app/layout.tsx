import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project V",
  description:
    "Zelf verkopen in Vlaanderen met gecontroleerde risico's en vaste fees.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-BE">
      <body>
        <div className="min-h-screen bg-slate-50">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white font-bold">
                  V
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Project V
                  </p>
                  <p className="text-sm text-slate-500">
                    Vlaanderen • vaste fee per dossier
                  </p>
                </div>
              </div>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                <a href="/cases">Dossiers</a>
                <a href="/cases/new">Nieuw dossier</a>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-slate-700">
                  Demo login
                </button>
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

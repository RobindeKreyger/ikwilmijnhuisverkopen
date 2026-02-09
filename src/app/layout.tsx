import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://projectverkoopklaar.be"),
  title: {
    default: "Project Verkoopklaar",
    template: "%s | Project Verkoopklaar",
  },
  description:
    "Verkoop je woning in Vlaanderen zonder makelaar. Vaste fee, slimme tooling en experts wanneer het écht telt.",
  openGraph: {
    title: "Project Verkoopklaar",
    description:
      "Zelf verkopen zonder makelaar, met zekerheid: vaste fee, slimme tooling en on-demand experts.",
    type: "website",
    locale: "nl_BE",
    url: "https://projectverkoopklaar.be",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Project Verkoopklaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Verkoopklaar",
    description:
      "Verkoop je woning in Vlaanderen zonder makelaar. Geen commissies, wel zekerheid.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-BE">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand focus:shadow-lg"
        >
          Naar inhoud
        </a>
        <Navbar />
        <main
          id="content"
          className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10"
        >
          {children}
        </main>
        <Footer />
        <Script
          defer
          data-domain="projectverkoopklaar.be"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

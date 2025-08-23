
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pleefy",
  description: "AI-assistent voor sales- en supportgesprekken"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <aside className="w-64 p-4 panel ring-apple hidden md:flex md:flex-col gap-2">
            <div className="text-lg font-semibold mb-4">🅿️ Pleefy</div>
            <nav className="flex flex-col gap-1">
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/">Dashboard</Link>
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/conversations">Gesprekken</Link>
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/reports">Rapportages</Link>
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/onboarding">Onboarding</Link>
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/integrations">Integraties</Link>
              <Link className="px-3 py-2 rounded-lg hover:bg-white/5" href="/settings">Instellingen</Link>
            </nav>
            <div className="mt-auto text-xs muted">Stripe/HubSpot vibe</div>
          </aside>
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

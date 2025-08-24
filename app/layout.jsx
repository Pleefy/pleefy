import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pleefy Dashboard",
  description: "Realtime gesprek-hulp met AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container-page flex items-center gap-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-black text-white flex items-center justify-center font-bold">P</div>
              <span className="font-semibold">Pleefy</span>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Link href="/conversations">Gesprekken</Link>
              <Link href="/reports">Rapportages</Link>
              <Link href="/onboarding">Onboarding</Link>
              <Link href="/integrations">Integraties</Link>
              <Link href="/settings">Instellingen</Link>
            </div>
          </nav>
        </header>
        <main className="container-page py-8">{children}</main>
      </body>
    </html>
  );
}

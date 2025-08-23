import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Pleefy",
  description: "Real-time gesprekshulp & rapportages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen">
          <aside className="hidden md:flex w-64 flex-col border-r border-gray-200 bg-white">
            <div className="h-16 flex items-center gap-3 px-6 border-b">
              <div className="h-8 w-8 rounded-xl bg-brand-600 text-white grid place-content-center font-bold">P</div>
              <span className="font-semibold">Pleefy</span>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Dashboard</Link>
              <Link href="/conversations" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Gesprekken</Link>
              <Link href="/reports" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Rapportages</Link>
              <Link href="/onboarding" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Onboarding</Link>
              <Link href="/integrations" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Integraties</Link>
              <Link href="/settings" className="block px-3 py-2 rounded-xl hover:bg-gray-100">Instellingen</Link>
            </nav>
            <div className="p-4 text-xs text-gray-500 border-t">© {new Date().getFullYear()} Pleefy</div>
          </aside>
          <main className="flex-1">
            <header className="h-16 border-b bg-white flex items-center px-4 md:px-8 justify-between">
              <div className="flex items-center gap-3 md:hidden">
                <div className="h-8 w-8 rounded-xl bg-brand-600 text-white grid place-content-center font-bold">P</div>
                <span className="font-semibold">Pleefy</span>
              </div>
              <div className="text-sm text-gray-500">Stripe/HubSpot look • demo data</div>
              <div className="text-sm text-gray-500">v11</div>
            </header>
            <div className="p-4 md:p-8">
              <div className="container-page">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

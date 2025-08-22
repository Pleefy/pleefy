import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import SideNav from "../components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pleefy",
  description: "Realtime assistent voor sales en service."
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-12">
          <aside className="col-span-3 lg:col-span-2 border-r border-gray-200 p-4">
            <div className="flex items-center gap-2 px-2 py-3">
              <div className="h-8 w-8 rounded-xl bg-black text-white flex items-center justify-center">P</div>
              <div className="text-lg font-semibold">Pleefy</div>
            </div>
            <SideNav />
          </aside>
          <main className="col-span-9 lg:col-span-10 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

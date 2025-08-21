import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata = {
  title: "Pleefy",
  description: "Stripe-style SaaS dashboard for real-time conversation guidance"
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

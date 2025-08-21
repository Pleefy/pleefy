import './globals.css';

export const metadata = {
  title: 'Pleefy Dashboard',
  description: 'Modern SaaS dashboard with Stripe-like design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}

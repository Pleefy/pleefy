import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Integrations() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integraties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card><CardHeader><CardTitle>HubSpot</CardTitle></CardHeader><CardContent>Klik-om-te-koppelen (mock).</CardContent></Card>
        <Card><CardHeader><CardTitle>Salesforce</CardTitle></CardHeader><CardContent>Widget in Lightning (mock).</CardContent></Card>
        <Card><CardHeader><CardTitle>Stripe</CardTitle></CardHeader><CardContent>Billing en metingen (mock).</CardContent></Card>
      </div>
    </div>
  );
}

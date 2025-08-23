import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Integrations() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integraties</h1>
      <Card>
        <CardHeader><CardTitle>CRM</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Koppel binnenkort je CRM (HubSpot, Salesforce, Teamleader). Voor nu is dit een demo.</p>
        </CardContent>
      </Card>
    </div>
  );
}

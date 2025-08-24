import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instellingen</h1>
      <Card>
        <CardHeader><CardTitle>Account & Team</CardTitle></CardHeader>
        <CardContent className="text-gray-600">
          Koppel je CRM, beheer teamleden en stel rechten in.
        </CardContent>
      </Card>
    </div>
  );
}

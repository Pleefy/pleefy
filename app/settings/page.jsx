import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instellingen</h1>
      <Card>
        <CardHeader><CardTitle>Algemeen</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Hier komen algemene instellingen zoals branding, teams en permissies.</p>
        </CardContent>
      </Card>
    </div>
  );
}

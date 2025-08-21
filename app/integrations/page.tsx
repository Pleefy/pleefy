import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IntegrationsPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integrations</h1>
      <Card>
        <CardHeader><CardTitle>CRM & Tools</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">HubSpot</div>
              <div className="text-sm text-gray-500">Sync contacten en deals</div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Salesforce</div>
              <div className="text-sm text-gray-500">Enterprise CRM</div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

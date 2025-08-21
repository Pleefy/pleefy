'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SettingsPage(){
  const [dark, setDark] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Card>
        <CardHeader><CardTitle>Weergave</CardTitle></CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <div className="font-medium">Dark mode</div>
            <div className="text-sm text-gray-500">Zachte donkere UI (beta)</div>
          </div>
          <Switch checked={dark} onChange={setDark} />
        </CardContent>
      </Card>
    </div>
  );
}

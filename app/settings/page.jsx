"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { conversations as seed } from "../../lib/mock";
import { toCSV } from "../../lib/utils";

export default function Settings(){
  const [theme, setTheme] = React.useState("light");

  function exportAll(){
    const data = {
      conversations: JSON.parse(localStorage.getItem("pleefy.conversations")||"null") || seed,
      onboarding: JSON.parse(localStorage.getItem("pleefy.onboarding")||"null"),
      integrations: JSON.parse(localStorage.getItem("pleefy.integrations")||"null")
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "pleefy-export.json"; a.click();
    URL.revokeObjectURL(url);
  }

  function exportCSV(){
    const rows = JSON.parse(localStorage.getItem("pleefy.conversations")||"null") || seed;
    const csv = toCSV(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "pleefy-conversations.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instellingen</h1>
      <Card>
        <CardHeader><CardTitle>Voorkeuren</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <label className="block text-sm text-gray-600">Thema</label>
          <select className="border rounded-xl p-2" value={theme} onChange={e=>setTheme(e.target.value)}>
            <option value="light">Licht</option>
            <option value="dark">Donker (coming soon)</option>
          </select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Data export</CardTitle></CardHeader>
        <CardContent className="flex gap-3">
          <Button onClick={exportAll}>Export JSON</Button>
          <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
        </CardContent>
      </Card>
    </div>
  );
}

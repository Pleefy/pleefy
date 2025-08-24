'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Onboarding() {
  const [form, setForm] = useState({
    doelgroep: "",
    doelen: "",
    bezwaren: "",
    usps: "",
  });
  const [saved, setSaved] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const save = () => {
    localStorage.setItem("pleefy:onboarding", JSON.stringify(form));
    setSaved(true);
    setTimeout(()=>setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Onboarding</h1>
      <Card>
        <CardHeader><CardTitle>Vertel Pleefy over je business</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Doelgroep</label>
            <Input value={form.doelgroep} onChange={update('doelgroep')} placeholder="B2B SaaS in de zorg, MKB, etc." />
          </div>
          <div>
            <label className="text-sm text-gray-600">Doelen</label>
            <Input value={form.doelen} onChange={update('doelen')} placeholder="Meer afspraken, hogere NPS, kortere beltijd..." />
          </div>
          <div>
            <label className="text-sm text-gray-600">Bezwaren</label>
            <Input value={form.bezwaren} onChange={update('bezwaren')} placeholder="Te duur, geen tijd, al leverancier..." />
          </div>
          <div>
            <label className="text-sm text-gray-600">USP's</label>
            <Input value={form.usps} onChange={update('usps')} placeholder="Realtime script, CRM-koppeling, coaching..." />
          </div>
          <div className="flex gap-2">
            <Button onClick={save}>Opslaan</Button>
            {saved && <span className="text-green-600 text-sm">Opgeslagen ✅</span>}
          </div>
          <p className="text-xs text-gray-500">Je kunt dit later altijd aanpassen. Pleefy gebruikt dit om PLEVI te trainen.</p>
        </CardContent>
      </Card>
    </div>
  );
}

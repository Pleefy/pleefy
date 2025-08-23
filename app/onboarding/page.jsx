"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Onboarding() {
  const [form, setForm] = useState({
    doelgroep: "",
    doelen: "",
    bezwaren: "",
    usps: "",
    coachingskaders: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("pleefy:onboarding");
    if (raw) setForm(JSON.parse(raw));
  }, []);

  function save() {
    localStorage.setItem("pleefy:onboarding", JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Onboarding</h1>
        <Button onClick={save}>{saved ? "Opgeslagen ✓" : "Opslaan"}</Button>
      </div>

      <Card>
        <CardHeader><CardTitle>Input voor PLEVI</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Doelgroep</label>
            <Input name="doelgroep" value={form.doelgroep} onChange={onChange} placeholder="Bijv. SaaS scale-ups in de Benelux" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Doelen</label>
            <Input name="doelen" value={form.doelen} onChange={onChange} placeholder="Bijv. meer demo-afspraken, hogere win-rate" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bezwaren</label>
            <Input name="bezwaren" value={form.bezwaren} onChange={onChange} placeholder="Bijv. prijs, implementatietijd, integratie" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">USP's</label>
            <Input name="usps" value={form.usps} onChange={onChange} placeholder="Bijv. realtime coaching, CRM-integraties" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Coachingskaders (wekelijks)</label>
            <Input name="coachingskaders" value={form.coachingskaders} onChange={onChange} placeholder="Bijv. focus op discovery, samenvatten, afsluiten" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-gray-500">Je kunt dit later altijd aanpassen. PLEVI gebruikt dit voor realtime scripts en coaching.</div>
        </CardFooter>
      </Card>
    </div>
  );
}

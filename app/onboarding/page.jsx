
"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { saveOnboarding, loadOnboarding } from "@/lib/data";

export default function Onboarding() {
  const [form, setForm] = useState({ doelgroep:"", doelen:"", bezwaren:"", usps:"", coaching:"" });
  useEffect(()=>{ setForm(prev => ({...prev, ...loadOnboarding()})); }, []);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const save = () => { saveOnboarding(form); alert("Onboarding opgeslagen"); };

  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold">Onboarding</h1>
      <Card>
        <CardHeader><CardTitle>Vertel Pleefy over jullie business</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <label className="block">
            <div className="text-sm mb-1">Doelgroep</div>
            <Input name="doelgroep" value={form.doelgroep} onChange={onChange} placeholder="Wie bel/mail je? Segmenten, persona's…" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Doelen</div>
            <Input name="doelen" value={form.doelen} onChange={onChange} placeholder="Afspraak, upsell, klachtoplossing…" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Bezwaren</div>
            <Input name="bezwaren" value={form.bezwaren} onChange={onChange} placeholder="Prijs, timing, autoriteit…" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">USP’s</div>
            <Input name="usps" value={form.usps} onChange={onChange} placeholder="Wat maakt jullie uniek?" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Coachingskaders</div>
            <Input name="coaching" value={form.coaching} onChange={onChange} placeholder="Wat mag wel/niet gezegd worden?" />
          </label>
          <div className="pt-2">
            <Button onClick={save} className="bg-brand text-white">Opslaan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

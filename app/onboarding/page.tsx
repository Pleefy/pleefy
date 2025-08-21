'use client';
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getOnboarding, setOnboarding } from "@/lib/data";

export default function OnboardingPage(){
  const [step,setStep] = useState(1);
  const [form, setForm] = useState({ industry:"", targetAudience:"", goals:"", objections:"", usps:"" });

  useEffect(()=>{
    const existing = getOnboarding();
    if (existing) setForm(existing);
  },[]);

  function next(){ setStep(s=>Math.min(3, s+1)); }
  function prev(){ setStep(s=>Math.max(1, s-1)); }
  function save(){ setOnboarding(form); alert("Onboarding opgeslagen"); }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Onboarding</h1>
      <Card>
        <CardHeader><CardTitle>Stap {step} van 3</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {step===1 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Branche / Industry</Label>
                <Input value={form.industry} onChange={e=>setForm({...form, industry:e.target.value})} placeholder="Bijv. Telecom, SaaS, Energie" />
              </div>
              <div>
                <Label>Doelgroep</Label>
                <Input value={form.targetAudience} onChange={e=>setForm({...form, targetAudience:e.target.value})} placeholder="Bijv. MKB-eigenaren in NL" />
              </div>
            </div>
          )}
          {step===2 && (
            <div className="grid gap-6">
              <div>
                <Label>Doelen</Label>
                <Textarea value={form.goals} onChange={e=>setForm({...form, goals:e.target.value})} placeholder="Welke doelen wil je bereiken? (afspraken, NPS, first-call-resolve)" />
              </div>
              <div>
                <Label>Bezwaren</Label>
                <Textarea value={form.objections} onChange={e=>setForm({...form, objections:e.target.value})} placeholder="Wat hoor je vaak als bezwaar?" />
              </div>
            </div>
          )}
          {step===3 && (
            <div className="grid gap-6">
              <div>
                <Label>Unique Selling Points (USP's)</Label>
                <Textarea value={form.usps} onChange={e=>setForm({...form, usps:e.target.value})} placeholder="Wat maakt jullie anders/beter?" />
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                <div className="font-semibold mb-2">Samenvatting</div>
                <div>Branche: {form.industry || "-"}</div>
                <div>Doelgroep: {form.targetAudience || "-"}</div>
                <div>Doelen: {form.goals || "-"}</div>
                <div>Bezwaren: {form.objections || "-"}</div>
                <div>USPs: {form.usps || "-"}</div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="secondary" onClick={prev} disabled={step===1}>Terug</Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={save}>Opslaan</Button>
              {step<3 ? <Button onClick={next}>Volgende</Button> : <Button onClick={save}>Afronden</Button>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

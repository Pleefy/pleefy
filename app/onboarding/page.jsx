"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function Onboarding(){
  const [form, setForm] = React.useState({
    doelgroep: "",
    doelen: "",
    usps: "",
    bezwaren: "",
    tone: "professioneel & menselijk"
  });
  const [weekly, setWeekly] = React.useState("");

  React.useEffect(()=>{
    const raw = localStorage.getItem("pleefy.onboarding");
    if (raw) try { const d = JSON.parse(raw); setForm(d.form||form); setWeekly(d.weekly||""); } catch {}
  }, []);

  function save(){
    localStorage.setItem("pleefy.onboarding", JSON.stringify({ form, weekly }));
    alert("Onboarding opgeslagen ✔︎");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Onboarding</h1>
      <Card>
        <CardHeader><CardTitle>Bedrijfsprofiel</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {["doelgroep","doelen","usps","bezwaren","tone"].map((k)=> (
            <div key={k} className="space-y-1">
              <label className="text-sm text-gray-600 block capitalize">{k}</label>
              <textarea
                className="w-full border rounded-xl p-3"
                rows={k==="usps"||k==="bezwaren"?4:3}
                value={form[k]}
                onChange={e=>setForm({...form,[k]:e.target.value})}
                placeholder={k==="usps"?"Wat maakt jullie uniek?":""}
              />
            </div>
          ))}
          <Button onClick={save}>Opslaan</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Wekelijkse samenvatting & coaching</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <textarea
            className="w-full border rounded-xl p-3"
            rows={6}
            value={weekly}
            onChange={e=>setWeekly(e.target.value)}
            placeholder="Noteer de samenvatting van deze week en coachingspunten..."
          />
          <div className="text-sm text-gray-500">De manager kan dit elke week checken en aanpassen.</div>
          <Button onClick={save}>Opslaan</Button>
        </CardContent>
      </Card>
    </div>
  );
}

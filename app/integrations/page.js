"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function Integrations(){
  const [cfg, setCfg] = React.useState({ hubspot:false, salesforce:false, stripe:false, webhook:'' });

  React.useEffect(()=>{
    const raw = localStorage.getItem("pleefy.integrations");
    if(raw) try { setCfg(JSON.parse(raw)); } catch {}
  },[]);

  function save(){
    localStorage.setItem("pleefy.integrations", JSON.stringify(cfg));
    alert("Integraties opgeslagen ✔︎");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integraties</h1>
      <Card>
        <CardHeader><CardTitle>CRM & betaling</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {["hubspot","salesforce","stripe"].map((k)=>(
            <label key={k} className="flex items-center gap-2">
              <input type="checkbox" checked={cfg[k]} onChange={e=>setCfg({...cfg,[k]:e.target.checked})} />
              <span className="capitalize">{k}</span>
            </label>
          ))}
          <div className="space-y-1">
            <label className="label">Webhook (voor events)</label>
            <Input value={cfg.webhook} onChange={e=>setCfg({...cfg, webhook:e.target.value})} placeholder="https://..." />
          </div>
          <Button variant="primary" onClick={save}>Opslaan</Button>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoConversations, getStoredThumbs } from "@/lib/data";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import { useEffect, useMemo, useState } from "react";

export default function ReportsPage(){
  const [thumbs, setThumbs] = useState<Record<string,"up"|"down">>({});
  useEffect(()=>{ setThumbs(getStoredThumbs()); },[]);

  const perAgent = useMemo(()=>{
    const map: Record<string, {agent:string; success:number; fail:number; total:number}> = {};
    for (const c of demoConversations) {
      const res = map[c.agent] || { agent: c.agent, success:0, fail:0, total:0 };
      const t = thumbs[c.id];
      const isSuccess = (t==="up") || (c.outcome==="success");
      const isFail = (t==="down") || (c.outcome==="fail");
      if (isSuccess) res.success++;
      if (isFail) res.fail++;
      res.total++;
      map[c.agent] = res;
    }
    return Object.values(map).map(r => ({...r, rate: Math.round((r.success/(r.total||1))*100)}));
  }, [thumbs]);

  const overall = useMemo(()=>{
    let success=0, fail=0;
    for (const c of demoConversations){
      const t = thumbs[c.id];
      if (t==="up" || c.outcome==="success") success++;
      if (t==="down" || c.outcome==="fail") fail++;
    }
    return [
      { name: "Succes", value: success },
      { name: "Mislukt", value: fail }
    ];
  }, [thumbs]);

  const COLORS = ["#16a34a", "#dc2626"];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Resultaten per agent</CardTitle></CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perAgent}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="agent" /><YAxis /><Tooltip />
                <Bar dataKey="success" />
                <Bar dataKey="fail" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Overall succes vs mislukt</CardTitle></CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={overall} dataKey="value" nameKey="name" outerRadius={110} label>
                  {overall.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

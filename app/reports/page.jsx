
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { byMedewerker, byDay, conversations } from "@/lib/data";
import { downloadCSV, downloadXLSX } from "@/lib/export";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";

function weeklySummary(items) {
  const total = items.length;
  const ok = items.filter(x=>x.succes).length;
  const top = byMedewerker(items).sort((a,b)=>b.value-a.value)[0];
  return `Samenvatting: ${ok}/${total} successen. Beste performer: ${top?.name ?? 'n.v.t.'} (${top?.value ?? 0}).`;
}

export default function Reports() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold">Rapportages</h1>
        <div className="flex gap-2">
          <Button onClick={()=>downloadCSV('rapport.csv', conversations)}>Export CSV</Button>
          <Button onClick={()=>downloadXLSX('rapport.xlsx', conversations)}>Export Excel</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Per medewerker</CardTitle></CardHeader>
          <CardContent style={{height:320}}>
            <ResponsiveContainer>
              <BarChart data={byMedewerker()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)" />
                <XAxis dataKey="name" /><YAxis allowDecimals={false} /><Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Per dag</CardTitle></CardHeader>
          <CardContent style={{height:320}}>
            <ResponsiveContainer>
              <LineChart data={byDay()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)" />
                <XAxis dataKey="date" /><YAxis allowDecimals={false} /><Tooltip />
                <Line type="monotone" dataKey="value" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Wekelijkse samenvatting</CardTitle></CardHeader>
          <CardContent>
            <p className="muted">{weeklySummary(conversations)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

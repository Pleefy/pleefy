'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const kpi = [
  { label: "Gesprekken vandaag", value: "48" },
  { label: "Succesratio", value: "68%" },
  { label: "Gem. duur", value: "7m 12s" },
  { label: "Open coach-items", value: "12" }
];

const trend = [
  { day: "Ma", success: 62 },
  { day: "Di", success: 64 },
  { day: "Wo", success: 67 },
  { day: "Do", success: 70 },
  { day: "Vr", success: 68 },
  { day: "Za", success: 65 },
  { day: "Zo", success: 66 }
];

export default function Dashboard(){
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpi.map((k)=> (
          <Card key={k.label}><CardHeader><CardTitle>{k.label}</CardTitle></CardHeader>
          <CardContent><div className="text-3xl font-semibold">{k.value}</div></CardContent></Card>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle>Succesratio (7 dagen)</CardTitle></CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" /><YAxis /><Tooltip />
              <Line type="monotone" dataKey="success" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

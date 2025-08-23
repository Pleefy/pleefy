"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { conversations, byAgent, downloadCSV, downloadXLSX, weeklySummary } from "@/lib/data";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

function groupByDate(rows) {
  const map = {};
  for (const r of rows) {
    map[r.date] = map[r.date] || { date: r.date, total: 0, success: 0 };
    map[r.date].total += 1;
    if (r.success) map[r.date].success += 1;
  }
  return Object.values(map).sort((a,b) => a.date.localeCompare(b.date));
}

export default function Reports() {
  const byDay = groupByDate(conversations);
  const agents = byAgent(conversations);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Rapportages</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => downloadCSV("rapport.csv", conversations)}>Export CSV</Button>
          <Button onClick={() => downloadXLSX("rapport.xlsx", conversations)}>Export Excel</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Gesprekken per dag</CardTitle></CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer>
                <LineChart data={byDay}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" />
                  <Line type="monotone" dataKey="success" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Succes per medewerker</CardTitle></CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer>
                <BarChart data={agents}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Wekelijkse transcriptie-samenvatting</CardTitle></CardHeader>
        <CardContent>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">{weeklySummary}</pre>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from "recharts";
import { conversations as seed, aggregateByAgent } from "../../lib/mock";

function useConversations() {
  const [data, setData] = React.useState(seed);
  React.useEffect(() => {
    const raw = localStorage.getItem("pleefy.conversations");
    if (raw) {
      try { setData(JSON.parse(raw)); } catch {}
    }
  }, []);
  return data;
}

export default function ReportsPage() {
  const data = useConversations();
  const byAgent = aggregateByAgent(data);
  const overall = [
    { name: "Succes", value: data.filter(d => d.thumbs === "up").length },
    { name: "Niet-succes", value: data.filter(d => d.thumbs === "down").length }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Rapportages</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Per agent</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer>
                <BarChart data={byAgent}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="agent" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="up" fill="#111111" />
                  <Bar dataKey="down" fill="#94a3b8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Overall succes</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={overall} dataKey="value" nameKey="name" outerRadius={110} label>
                    {overall.map((entry, index) => <Cell key={index} fill={index===0?"#111111":"#94a3b8"} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

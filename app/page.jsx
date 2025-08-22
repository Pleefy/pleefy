"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";
import { conversations as seed, aggregateByAgent, kpi } from "../lib/mock";

function useConversations(){
  const [data, setData] = React.useState(seed);
  React.useEffect(()=>{
    const raw = localStorage.getItem("pleefy.conversations");
    if (raw) try { setData(JSON.parse(raw)); } catch {}
  },[]);
  return [data, setData];
}

export default function Dashboard(){
  const [data] = useConversations();
  const stats = kpi(data);
  const byAgent = aggregateByAgent(data).slice(0,5);
  const byDate = Object.values(data.reduce((acc, c)=>{
    acc[c.date] = acc[c.date] || { date:c.date, success:0, total:0 };
    acc[c.date].total += 1;
    if(c.thumbs==="up") acc[c.date].success += 1;
    return acc;
  }, {})).slice(-30);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card><CardContent className="py-4"><div className="text-sm text-gray-500">Gesprekken</div><div className="text-3xl font-semibold">{stats.total}</div></CardContent></Card>
        <Card><CardContent className="py-4"><div className="text-sm text-gray-500">Succes</div><div className="text-3xl font-semibold">{stats.success}</div></CardContent></Card>
        <Card><CardContent className="py-4"><div className="text-sm text-gray-500">Succesratio</div><div className="text-3xl font-semibold">{stats.successRate}%</div></CardContent></Card>
        <Card><CardContent className="py-4"><div className="text-sm text-gray-500">Gem. duur</div><div className="text-3xl font-semibold">{stats.avgDuration}s</div></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Top agents</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer>
                <BarChart data={byAgent}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="agent" /><YAxis /><Tooltip />
                  <Bar dataKey="up" fill="#111111" />
                  <Bar dataKey="down" fill="#94a3b8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Succes per dag (30d)</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer>
                <LineChart data={byDate}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" hide /><YAxis /><Tooltip />
                  <Line dataKey="total" stroke="#94a3b8" />
                  <Line dataKey="success" stroke="#111111" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

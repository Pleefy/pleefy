'use client';
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getKpis, getTeamSeries, toCSV } from "@/lib/data";
import { useMemo } from "react";

const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import("recharts").then(m => m.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then(m => m.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then(m => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const Legend = dynamic(() => import("recharts").then(m => m.Legend), { ssr: false });

export default function Reports() {
  const { successRate, failedRate, total } = getKpis();
  const series = useMemo(()=>getTeamSeries(), []);

  const handleExport = () => {
    const csv = toCSV(series);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pleefy_reports.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Rapportages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card><CardHeader><CardTitle className="text-sm text-gray-500">Succesratio</CardTitle></CardHeader><CardContent className="text-3xl font-semibold">{successRate}%</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm text-gray-500">Faalsratio</CardTitle></CardHeader><CardContent className="text-3xl font-semibold">{failedRate}%</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm text-gray-500">Totaal gesprekken</CardTitle></CardHeader><CardContent className="text-3xl font-semibold">{total}</CardContent></Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Team performance per week</CardTitle>
          <Button onClick={handleExport}>Exporteer CSV</Button>
        </CardHeader>
        <CardContent style={{height: 360}}>
          <ResponsiveContainer>
            <LineChart data={series}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Lisa" />
              <Line type="monotone" dataKey="Mark" />
              <Line type="monotone" dataKey="Sophie" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

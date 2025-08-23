
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { successRate, byMedewerker, byDay } from "@/lib/data";
import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import Link from "next/link";

export default function Dashboard() {
  const rate = successRate();
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/onboarding"><Button>Onboarding</Button></Link>
          <Link href="/conversations"><Button className="bg-brand text-white">Naar gesprekken</Button></Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Succesratio</CardTitle></CardHeader>
          <CardContent style={{height:320}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={[{name:'Succes', value: rate},{name:'Niet', value: 100-rate}]} dataKey="value" nameKey="name" outerRadius={110} label />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Successen per medewerker</CardTitle></CardHeader>
          <CardContent style={{height:320}}>
            <ResponsiveContainer>
              <BarChart data={byMedewerker()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader><CardTitle>Trend per dag</CardTitle></CardHeader>
          <CardContent style={{height:300}}>
            <ResponsiveContainer>
              <LineChart data={byDay()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

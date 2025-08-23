"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { successRate, byAgent, conversations } from "@/lib/data";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";

export default function Dashboard() {
  const rate = successRate(conversations);
  const agentStats = byAgent(conversations);
  const pieData = [
    { name: "Succes", value: conversations.filter(c => c.success).length },
    { name: "Niet succes", value: conversations.filter(c => !c.success).length },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-3">
          <Link href="/onboarding"><Button variant="outline">Onboarding</Button></Link>
          <Link href="/conversations"><Button>Bekijk gesprekken</Button></Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Succesratio</CardTitle></CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-3">
              <div className="text-4xl font-bold">{rate}%</div>
              <div className="text-sm text-gray-500">op basis van {conversations.length} gesprekken</div>
            </div>
            <div className="mt-4 h-48">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70} label>
                    {pieData.map((_, i) => <Cell key={i} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Top medewerkers</CardTitle></CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={agentStats}>
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
    </div>
  );
}

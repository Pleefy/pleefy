import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Headphones, BarChart3 } from "lucide-react";
import Link from "next/link";
import { demoSummary } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Realtime AI scripts, coaching & rapportage.</p>
        </div>
        <Link href="/onboarding" className="text-sm underline">Start onboarding</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-sm text-gray-500">Succesratio (week)</CardTitle></CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            62% <ThumbsUp className="h-5 w-5 text-green-600" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm text-gray-500">Mislukte gesprekken</CardTitle></CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            38% <ThumbsDown className="h-5 w-5 text-red-600" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm text-gray-500">Trainingstijd</CardTitle></CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            3.1u <Headphones className="h-5 w-5" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Week-samenvatting</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {demoSummary.map((s,i)=>(<li key={i}>{s}</li>))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Rapportages</CardTitle></CardHeader>
          <CardContent className="text-gray-600">
            Bekijk succesratio per medewerker, reden code rood, COACH onderwerpen en exporteer naar CSV.
            <div className="mt-3">
              <Link href="/reports" className="underline text-sm inline-flex items-center gap-2">
                Open rapportages <BarChart3 className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Onboarding</CardTitle></CardHeader>
          <CardContent className="text-gray-600">
            Geef je doelgroep, doelen, bezwaren en USPs door om Pleefy te trainen. Dit kan je later altijd aanpassen.
            <div className="mt-3">
              <Link href="/onboarding" className="underline text-sm">Start onboarding</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

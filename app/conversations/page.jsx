'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { demoConversations, toggleThumb } from "@/lib/data";
import { useState } from "react";

export default function Conversations() {
  const [q, setQ] = useState("");
  const [rows, setRows] = useState(demoConversations);

  const filtered = rows.filter(r =>
    [r.employee, r.outcome, r.summary].join(" ").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Gesprekken</h1>
          <p className="text-gray-500">Duid elk gesprek: 👍 doel behaald of 👎 niet behaald.</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Zoek..." value={q} onChange={e=>setQ(e.target.value)} />
          <Button onClick={()=>setQ("")}>Reset</Button>
        </div>
      </div>
      <Card>
        <CardHeader><CardTitle>Overzicht</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TR>
                <TH>ID</TH>
                <TH>Medewerker</TH>
                <TH>Samenvatting</TH>
                <TH>Uitkomst</TH>
                <TH>Actie</TH>
              </TR>
            </THead>
            <TBody>
              {filtered.map(r => (
                <TR key={r.id}>
                  <TD>#{r.id}</TD>
                  <TD>{r.employee}</TD>
                  <TD className="max-w-[420px] truncate">{r.summary}</TD>
                  <TD>{r.outcome}</TD>
                  <TD>
                    <div className="flex gap-2">
                      <Button size="sm" variant={r.success ? "default" : "outline"} onClick={()=>setRows(toggleThumb(rows, r.id, true))}>👍</Button>
                      <Button size="sm" variant={!r.success ? "default" : "outline"} onClick={()=>setRows(toggleThumb(rows, r.id, false))}>👎</Button>
                    </div>
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

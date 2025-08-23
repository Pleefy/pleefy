
"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { conversations as seed } from "@/lib/data";
import { downloadCSV, downloadXLSX } from "@/lib/export";

export default function Conversations() {
  const [rows, setRows] = useState(seed);
  const [q, setQ] = useState("");

  const filtered = rows.filter(r => (r.id+r.medewerker+r.onderwerp).toLowerCase().includes(q.toLowerCase()));

  const toggle = (id, ok) => {
    setRows(prev => prev.map(r => r.id === id ? { ...r, succes: ok } : r));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold">Gesprekken</h1>
        <div className="flex gap-2">
          <Button onClick={()=>downloadCSV("gesprekken.csv", rows)}>Export CSV</Button>
          <Button onClick={()=>downloadXLSX("gesprekken.xlsx", rows)}>Export Excel</Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Overzicht</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3">
            <Input placeholder="Zoeken op id, medewerker of onderwerp…" value={q} onChange={e=>setQ(e.target.value)} />
          </div>
          <div className="overflow-auto">
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH><TH>Medewerker</TH><TH>Kanaal</TH><TH>Datum</TH><TH>Duur</TH><TH>Onderwerp</TH><TH>👍/👎</TH><TH>Sentiment</TH>
                </TR>
              </THead>
              <TBody>
                {filtered.map(r => (
                  <TR key={r.id}>
                    <TD>{r.id}</TD>
                    <TD>{r.medewerker}</TD>
                    <TD>{r.kanaal}</TD>
                    <TD>{r.datum}</TD>
                    <TD>{r.duurMin}m</TD>
                    <TD>{r.onderwerp}</TD>
                    <TD className="space-x-2">
                      <button onClick={()=>toggle(r.id, true)} className={`px-2 py-1 rounded-lg ${r.succes?'bg-green-500/20 ring-apple':''}`}>👍</button>
                      <button onClick={()=>toggle(r.id, false)} className={`px-2 py-1 rounded-lg ${!r.succes?'bg-red-500/20 ring-apple':''}`}>👎</button>
                    </TD>
                    <TD>{Math.round(r.sentiment*100)}%</TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

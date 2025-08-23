"use client";
import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { conversations as seed, downloadCSV, downloadXLSX } from "@/lib/data";

export default function Conversations() {
  const [rows, setRows] = useState(seed);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return rows.filter(r =>
      r.customer.toLowerCase().includes(q) ||
      r.intent.toLowerCase().includes(q)
    );
  }, [rows, query]);

  function toggleSuccess(id, val) {
    setRows(prev => prev.map(r => r.id === id ? { ...r, success: val } : r));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Gesprekken</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => downloadCSV("gesprekken.csv", filtered)}>Export CSV</Button>
          <Button onClick={() => downloadXLSX("gesprekken.xlsx", filtered)}>Export Excel</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Zoeken & beoordelen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 mb-4">
            <Input placeholder="Zoek op klant of intentie…" value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <div className="overflow-auto">
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH>
                  <TH>Klant</TH>
                  <TH>Intentie</TH>
                  <TH>Datum</TH>
                  <TH>Duur (min)</TH>
                  <TH>Succes?</TH>
                  <TH>Notities</TH>
                </TR>
              </THead>
              <TBody>
                {filtered.map((r) => (
                  <TR key={r.id}>
                    <TD>{r.id}</TD>
                    <TD>{r.customer}</TD>
                    <TD>{r.intent}</TD>
                    <TD>{r.date}</TD>
                    <TD>{r.durationMin}</TD>
                    <TD>
                      <div className="flex gap-2">
                        <Button variant={r.success ? "default" : "outline"} onClick={() => toggleSuccess(r.id, true)}>👍</Button>
                        <Button variant={!r.success ? "default" : "outline"} onClick={() => toggleSuccess(r.id, false)}>👎</Button>
                      </div>
                    </TD>
                    <TD>{r.notes}</TD>
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

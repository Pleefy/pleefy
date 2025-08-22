"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "../../components/ui/table";
import { conversations as seed } from "../../lib/mock";
import { toCSV } from "../../lib/utils";
import * as XLSX from "xlsx";

function useLocalConversations() {
  const [data, setData] = React.useState(seed);
  React.useEffect(() => {
    const raw = localStorage.getItem("pleefy.conversations");
    if (raw) { try { setData(JSON.parse(raw)); } catch {} }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("pleefy.conversations", JSON.stringify(data));
  }, [data]);
  return [data, setData];
}

export default function Page() {
  const [data, setData] = useLocalConversations();

  function setThumb(id, value) {
    setData(prev => prev.map(c => c.id === id ? { ...c, thumbs: value } : c));
  }

  function exportCSV() {
    const csv = toCSV(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "conversations.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  function exportXLSX() {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Gesprekken");
    XLSX.writeFile(wb, "conversations.xlsx");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Gesprekken</h1>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Laatste gesprekken</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
            <Button onClick={exportXLSX}>Export Excel</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TR>
                <TH>Datum</TH><TH>Agent</TH><TH>Duur (s)</TH><TH>Type</TH><TH>Notities</TH><TH>Resultaat</TH>
              </TR>
            </THead>
            <TBody>
              {data.map((c) => (
                <TR key={c.id}>
                  <TD>{c.date}</TD>
                  <TD>{c.agent}</TD>
                  <TD>{c.duration}</TD>
                  <TD>{c.type}</TD>
                  <TD>{c.notes}</TD>
                  <TD>
                    <div className="flex gap-2">
                      <Button variant={c.thumbs==="up"?"default":"outline"} onClick={() => setThumb(c.id,"up")}>👍</Button>
                      <Button variant={c.thumbs==="down"?"default":"outline"} onClick={() => setThumb(c.id,"down")}>👎</Button>
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

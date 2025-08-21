'use client';
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { ThumbsUp, ThumbsDown, Download } from "lucide-react";
import { demoConversations, getStoredThumbs, setStoredThumbs } from "@/lib/data";
import { toCSV } from "@/lib/data";
import * as XLSX from "xlsx";

export default function ConversationsPage(){
  const [query, setQuery] = useState("");
  const [thumbs, setThumbs] = useState<Record<string, "up"|"down">>({});

  useEffect(()=>{ setThumbs(getStoredThumbs()); },[]);

  const filtered = useMemo(()=>{
    return demoConversations.filter(c =>
      [c.id, c.agent, c.customer, c.outcome].join(" ").toLowerCase().includes(query.toLowerCase())
    ).map(c => ({...c, thumb: thumbs[c.id]}));
  }, [query, thumbs]);

  function setThumb(id:string, val:"up"|"down"){
    const next = { ...thumbs, [id]: val };
    setThumbs(next);
    setStoredThumbs(next);
  }

  function exportCSV(){
    const csv = toCSV(filtered, ["id","agent","customer","date","durationSec","outcome","thumb"]);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "conversations.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  function exportXLSX(){
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Conversations");
    XLSX.writeFile(workbook, "conversations.xlsx");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Conversations</h1>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gesprekken</CardTitle>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={exportCSV}><Download className="mr-2 h-4 w-4" />CSV</Button>
            <Button variant="outline" onClick={exportXLSX}><Download className="mr-2 h-4 w-4" />Excel</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 pb-4">
            <Input placeholder="Zoeken op agent, klant, outcome..." value={query} onChange={e=>setQuery(e.target.value)} />
          </div>
          <Table>
            <THead>
              <TR>
                <TH>ID</TH><TH>Agent</TH><TH>Klant</TH><TH>Datum</TH><TH>Duur</TH><TH>Outcome</TH><TH>Feedback</TH>
              </TR>
            </THead>
            <TBody>
              {filtered.map(c => (
                <TR key={c.id}>
                  <TD>{c.id}</TD>
                  <TD>{c.agent}</TD>
                  <TD>{c.customer}</TD>
                  <TD>{new Date(c.date).toLocaleString()}</TD>
                  <TD>{Math.round(c.durationSec/60)}m {c.durationSec%60}s</TD>
                  <TD className={c.outcome==="success"?"text-green-600": c.outcome==="fail"?"text-red-600":"text-gray-500"}>{c.outcome}</TD>
                  <TD>
                    <div className="flex gap-2">
                      <Button variant={c.thumb==="up"?"default":"secondary"} size="sm" onClick={()=>setThumb(c.id,"up")}><ThumbsUp size={16} /></Button>
                      <Button variant={c.thumb==="down"?"default":"secondary"} size="sm" onClick={()=>setThumb(c.id,"down")}><ThumbsDown size={16} /></Button>
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

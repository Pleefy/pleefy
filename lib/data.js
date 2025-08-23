// Mock data + export helpers
import * as XLSX from "xlsx";

export const team = [
  { id: "u1", name: "Lotte Jansen" },
  { id: "u2", name: "Milan de Vries" },
  { id: "u3", name: "Saar van Dijk" },
  { id: "u4", name: "Noah Bakker" },
];

export const conversations = [
  { id: "c1001", agentId: "u1", customer: "ACME BV", intent: "Demo afspraak", date: "2025-08-18", durationMin: 9,   success: true,  notes: "Afspraak bevestigd voor vrijdag." },
  { id: "c1002", agentId: "u2", customer: "Flow Logistics", intent: "Klacht",      date: "2025-08-18", durationMin: 12,  success: false, notes: "Terugbelverzoek, onduidelijk over SLA." },
  { id: "c1003", agentId: "u3", customer: "Bright Solar",  intent: "Cold call",    date: "2025-08-19", durationMin: 6,   success: true,  notes: "Doorverwezen naar inkoop." },
  { id: "c1004", agentId: "u1", customer: "Huis&Co",       intent: "Klacht",      date: "2025-08-19", durationMin: 14,  success: true,  notes: "Oplossing per e-mail gestuurd." },
  { id: "c1005", agentId: "u4", customer: "Green Foods",   intent: "Demo afspraak", date: "2025-08-20", durationMin: 11, success: false, notes: "Beslisser niet bereikbaar." },
  { id: "c1006", agentId: "u2", customer: "Delta Telecom", intent: "Cold call",   date: "2025-08-20", durationMin: 7,   success: true,  notes: "Follow-up e-mail verstuurd." },
  { id: "c1007", agentId: "u3", customer: "NoviTech",      intent: "Demo afspraak", date: "2025-08-21", durationMin: 10, success: true,  notes: "POC gepland." },
  { id: "c1008", agentId: "u4", customer: "UrbanRide",     intent: "Klacht",      date: "2025-08-21", durationMin: 8,   success: false, notes: "Escalatie nodig." },
];

export const weeklySummary = `
• Veelgestelde bezwaren: prijs, implementatietijd, integratie met CRM.
• Succesvolle tactieken: direct vragen om de afspraak, samenvatten van de behoefte, social proof.
• Coachingadvies: meer doorvragen naar beslissers en budget; bij klachten eerst het doel van de klant herhalen.
`;

export function toCSV(rows, headers) {
  if (!rows || rows.length === 0) return "";
  const keys = headers ?? Object.keys(rows[0]);
  const escapeCell = (s) => {
    const str = String(s ?? "");
    if (/[",\n]/.test(str)) { // escape comma, quote, newline
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  const head = keys.join(",");
  const body = rows.map(r => keys.map(k => escapeCell(r[k])).join(",")).join("\n");
  return head + "\n" + body + "\n";
}

export function downloadCSV(filename, rows, headers) {
  const csv = toCSV(rows, headers);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadXLSX(filename, rows, sheetName = "Data") {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filename);
}

export function successRate(data) {
  const total = data.length;
  const success = data.filter(x => x.success).length;
  return total ? Math.round((success / total) * 100) : 0;
}

export function byAgent(data) {
  const map = {};
  for (const c of data) {
    map[c.agentId] = map[c.agentId] || { agentId: c.agentId, success: 0, total: 0 };
    map[c.agentId].total += 1;
    if (c.success) map[c.agentId].success += 1;
  }
  const enriched = Object.values(map).map(r => ({
    ...r,
    name: (team.find(t => t.id === r.agentId) || {}).name || r.agentId,
    rate: r.total ? Math.round((r.success / r.total) * 100) : 0
  }));
  return enriched.sort((a,b) => b.rate - a.rate);
}

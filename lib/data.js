export const demoConversations = [
  { id: 1, employee: "Lisa", success: true, summary: "Afspraak gemaakt voor demo", outcome: "👍 Succes" },
  { id: 2, employee: "Mark", success: false, summary: "Lead had al leverancier", outcome: "👎 Geen afspraak" },
  { id: 3, employee: "Sophie", success: true, summary: "Klacht opgelost binnen gesprek", outcome: "👍 Succes" },
  { id: 4, employee: "Iris", success: false, summary: "Geen budget beschikbaar", outcome: "👎 Afgehaakt" },
  { id: 5, employee: "Noah", success: true, summary: "Upgrade verkocht", outcome: "👍 Upsell" }
];

export const demoSummary = [
  "Top-bezwaar: 'al leverancier' (23%).",
  "Beste openingsvraag: 'Mag ik 2 minuten uitleggen wat je wint?'.",
  "Coaching-focus: afsluiten en samenvatten (team).",
  "USP die het meest triggert: realtime coach in CRM."
];

export function toggleThumb(rows, id, success) {
  return rows.map(r => r.id === id ? ({ ...r, success, outcome: success ? "👍 Succes" : "👎 Niet behaald" }) : r);
}

export function getKpis() {
  const total = demoConversations.length;
  const success = demoConversations.filter(r => r.success).length;
  const failed = total - success;
  const successRate = Math.round((success / total) * 100);
  const failedRate = 100 - successRate;
  return { total, successRate, failedRate };
}

export function getTeamSeries() {
  // week data (mock)
  return [
    { week: "W1", Lisa: 5, Mark: 3, Sophie: 4 },
    { week: "W2", Lisa: 6, Mark: 2, Sophie: 5 },
    { week: "W3", Lisa: 7, Mark: 4, Sophie: 6 },
    { week: "W4", Lisa: 6, Mark: 5, Sophie: 7 }
  ];
}

export function toCSV(rows) {
  if (!rows || rows.length === 0) return "";
  const keys = Object.keys(rows[0]);
  const escapeCell = (v) => {
    const s = String(v ?? "");
    if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  };
  const header = keys.join(",");
  const body = rows.map(r => keys.map(k => escapeCell(r[k])).join(",")).join("\n");
  return header + "\n" + body + "\n";
}

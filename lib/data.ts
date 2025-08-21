export type Conversation = {
  id: string;
  agent: string;
  customer: string;
  date: string;
  durationSec: number;
  outcome: "success" | "fail" | "pending";
  thumb?: "up" | "down";
};

export const demoConversations: Conversation[] = [
  { id: "C-1001", agent: "Sanne", customer: "ACME BV", date: "2025-08-10T09:10:00Z", durationSec: 540, outcome: "success" },
  { id: "C-1002", agent: "Youssef", customer: "Fabrikam", date: "2025-08-10T09:50:00Z", durationSec: 420, outcome: "fail" },
  { id: "C-1003", agent: "Kim", customer: "Northwind", date: "2025-08-10T10:30:00Z", durationSec: 610, outcome: "success" },
  { id: "C-1004", agent: "Lars", customer: "Globex", date: "2025-08-10T11:20:00Z", durationSec: 380, outcome: "pending" },
  { id: "C-1005", agent: "Sanne", customer: "Stark", date: "2025-08-11T09:05:00Z", durationSec: 700, outcome: "success" },
  { id: "C-1006", agent: "Kim", customer: "Wonka", date: "2025-08-11T10:25:00Z", durationSec: 300, outcome: "fail" },
  { id: "C-1007", agent: "Youssef", customer: "Vandelay", date: "2025-08-12T13:10:00Z", durationSec: 460, outcome: "success" },
  { id: "C-1008", agent: "Lars", customer: "Umbrella", date: "2025-08-12T14:40:00Z", durationSec: 520, outcome: "success" },
  { id: "C-1009", agent: "Sanne", customer: "ACME BV", date: "2025-08-12T15:15:00Z", durationSec: 265, outcome: "fail" },
  { id: "C-1010", agent: "Kim", customer: "Hooli", date: "2025-08-13T10:00:00Z", durationSec: 800, outcome: "success" }
];

export type Onboarding = {
  industry: string;
  targetAudience: string;
  goals: string;
  objections: string;
  usps: string;
};

export function getStoredThumbs(): Record<string, "up"|"down"> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem("pleefy_thumbs") || "{}"); } catch { return {}; }
}
export function setStoredThumbs(map: Record<string, "up"|"down">) {
  if (typeof window === "undefined") return;
  localStorage.setItem("pleefy_thumbs", JSON.stringify(map));
}

export function getOnboarding(): Onboarding | null {
  if (typeof window === "undefined") return null;
  try { const v = localStorage.getItem("pleefy_onboarding"); return v ? JSON.parse(v) : null; } catch { return null; }
}
export function setOnboarding(v: Onboarding) {
  if (typeof window === "undefined") return;
  localStorage.setItem("pleefy_onboarding", JSON.stringify(v));
}

export function toCSV(rows: any[], headers?: string[]): string {
  if (!rows.length) return "";
  const keys = headers ?? Object.keys(rows[0]);
  const escape = (s: any) => {
    const str = String(s ?? "");
    if (/[",
]/.test(str)) return '"' + str.replace(/"/g, '""') + '"';
    return str;
  };
  const header = keys.join(",");
  const body = rows.map(r => keys.map(k => escape(r[k])).join(",")).join("\n");
  return header + "\n" + body;
}


export const conversations = [
  { id: "C-1001", medewerker: "Sophie", kanaal: "Phone", datum: "2025-08-20", duurMin: 12, succes: true, onderwerp: "Afspraak inplannen", sentiment: 0.76 },
  { id: "C-1002", medewerker: "Jamal",  kanaal: "Phone", datum: "2025-08-20", duurMin: 8,  succes: false, onderwerp: "Klacht", sentiment: 0.32 },
  { id: "C-1003", medewerker: "Eva",    kanaal: "Email", datum: "2025-08-21", duurMin: 5,  succes: true, onderwerp: "Offerte", sentiment: 0.61 },
  { id: "C-1004", medewerker: "Noah",   kanaal: "Phone", datum: "2025-08-21", duurMin: 16, succes: true, onderwerp: "Cold call", sentiment: 0.55 },
  { id: "C-1005", medewerker: "Sven",   kanaal: "Chat",  datum: "2025-08-22", duurMin: 7,  succes: false, onderwerp: "Retour", sentiment: 0.40 }
];

export function successRate(items = conversations) {
  const ok = items.filter(x => x.succes).length;
  return items.length ? Math.round((ok / items.length) * 100) : 0;
}

export function byMedewerker(items = conversations) {
  const map = {};
  items.forEach(c => map[c.medewerker] = (map[c.medewerker] || 0) + (c.succes ? 1 : 0));
  return Object.entries(map).map(([name, value]) => ({ name, value }));
}

export function byDay(items = conversations) {
  const map = {};
  items.forEach(c => map[c.datum] = (map[c.datum] || 0) + (c.succes ? 1 : 0));
  return Object.entries(map).map(([date, value]) => ({ date, value })).sort((a,b)=> a.date.localeCompare(b.date));
}

export const onboardingKey = "pleefy_onboarding_v1";
export function saveOnboarding(data) {
  if (typeof window === "undefined") return;
  localStorage.setItem(onboardingKey, JSON.stringify(data));
}
export function loadOnboarding() {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(onboardingKey) || "{}"); } catch { return {}; }
}

export const demoConversations = [
  { id: 1, employee: "Lisa", success: true, summary: "Afspraak gemaakt" },
  { id: 2, employee: "Mark", success: false, summary: "Lead niet geconverteerd" },
  { id: 3, employee: "Sophie", success: true, summary: "Klacht goed opgelost" }
];

export const getStoredThumbs = () => {
  return demoConversations.map(c => ({
    id: c.id,
    status: c.success ? "👍" : "👎"
  }));
};
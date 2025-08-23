
import * as XLSX from "xlsx";

export function toCSV(rows, headers) {
  if (!rows || !rows.length) return "";
  const keys = headers || Object.keys(rows[0]);
  const esc = (s) => {
    const str = String(s ?? "");
    if (str.includes(',') || str.includes('\n') || str.includes('"')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  const head = keys.join(",");
  const body = rows.map(r => keys.map(k => esc(r[k])).join(",")).join("\n");
  return head + "\n" + body;
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
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filename);
}

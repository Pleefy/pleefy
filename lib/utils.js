export function toCSV(rows, headers){
  if (!rows || rows.length===0) return "";
  const keys = headers ?? Object.keys(rows[0]);
  const escape = (s) => {
    const str = String(s ?? "");
    // Quote fields that contain double-quotes, commas or newlines
    if (/[",\n]/.test(str)) return '"' + str.replace(/"/g, '""') + '"';
    return str;
  };
  const head = keys.join(",");
  const body = rows.map(r => keys.map(k => escape(r[k])).join(",")).join("\n");
  return head + "\n" + body;
}

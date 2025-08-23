export function Table({ children, className="" }) {
  return <table className={`w-full text-sm ${className}`}>{children}</table>;
}
export function THead({ children }) { return <thead className="text-left text-gray-500">{children}</thead>; }
export function TBody({ children }) { return <tbody className="divide-y divide-gray-100">{children}</tbody>; }
export function TR({ children }) { return <tr className="hover:bg-gray-50">{children}</tr>; }
export function TH({ children, className="" }) { return <th className={`py-3 px-3 font-medium ${className}`}>{children}</th>; }
export function TD({ children, className="" }) { return <td className={`py-3 px-3 ${className}`}>{children}</td>; }

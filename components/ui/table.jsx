import React from "react";
export function Table({ children }) { return <table className="w-full text-sm">{children}</table>; }
export function THead({ children }) { return <thead className="text-left text-gray-500">{children}</thead>; }
export function TBody({ children }) { return <tbody className="divide-y">{children}</tbody>; }
export function TR({ children }) { return <tr className="hover:bg-gray-50">{children}</tr>; }
export function TH({ children }) { return <th className="py-2 pr-3 font-medium">{children}</th>; }
export function TD({ children }) { return <td className="py-2 pr-3">{children}</td>; }

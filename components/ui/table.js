import React from "react";
export function Table({ children }){ return <table className="table">{children}</table>; }
export function THead({ children }){ return <thead>{children}</thead>; }
export function TBody({ children }){ return <tbody className="divide-y">{children}</tbody>; }
export function TR({ children }){ return <tr className="tr">{children}</tr>; }
export function TH({ children }){ return <th className="th">{children}</th>; }
export function TD({ children }){ return <td className="td">{children}</td>; }

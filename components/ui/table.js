
export function Table({ children, className = "" }) {
  return <table className={`w-full text-sm ${className}`}>{children}</table>;
}
export function THead({ children }) { return <thead className="text-left text-xs uppercase muted">{children}</thead> }
export function TBody({ children }) { return <tbody className="divide-y divide-white/5">{children}</tbody> }
export function TR({ children }) { return <tr className="hover:bg-white/5">{children}</tr> }
export function TH({ children, className = "" }) { return <th className={`px-3 py-2 ${className}`}>{children}</th> }
export function TD({ children, className = "" }) { return <td className={`px-3 py-2 ${className}`}>{children}</td> }

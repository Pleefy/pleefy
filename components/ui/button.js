
export default function Button({ as: Tag = "button", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20";
  const style = "bg-white text-black";
  return <Tag className={`${base} ${style} ${className}`} {...props}>{children}</Tag>;
}

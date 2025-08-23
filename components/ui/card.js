
export function Card({ className = "", children, ...props }) {
  return <div className={`panel ring-apple rounded-2xl ${className}`} {...props}>{children}</div>;
}
export function CardHeader({ className = "", children, ...props }) {
  return <div className={`p-4 border-b border-white/5 ${className}`} {...props}>{children}</div>;
}
export function CardTitle({ className = "", children, ...props }) {
  return <h3 className={`text-base font-semibold ${className}`} {...props}>{children}</h3>;
}
export function CardContent({ className = "", children, ...props }) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>;
}

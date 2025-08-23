export function Card({ className = "", children }) {
  return <div className={`surface ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={`px-6 pt-5 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-base font-semibold ${className}`}>{children}</h3>;
}
export function CardDescription({ className = "", children }) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}
export function CardContent({ className = "", children }) {
  return <div className={`px-6 pb-5 ${className}`}>{children}</div>;
}
export function CardFooter({ className = "", children }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

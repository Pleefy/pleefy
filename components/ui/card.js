import { cn } from "./utils";

export function Card({ className, ...props }) {
  return <div className={cn("rounded-2xl border bg-white shadow-sm", className)} {...props} />;
}
export function CardHeader({ className, ...props }) {
  return <div className={cn("p-5 border-b", className)} {...props} />;
}
export function CardTitle({ className, ...props }) {
  return <h3 className={cn("font-medium", className)} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={cn("p-5", className)} {...props} />;
}

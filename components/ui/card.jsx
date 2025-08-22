import React from "react";
import cn from "classnames";

export function Card({ className, children, ...props }) {
  return <div className={cn("card", className)} {...props}>{children}</div>;
}
export function CardHeader({ className, children, ...props }) {
  return <div className={cn("px-4 lg:px-6 py-4 border-b border-gray-200", className)} {...props}>{children}</div>;
}
export function CardTitle({ className, children, ...props }) {
  return <h3 className={cn("text-base lg:text-lg font-semibold", className)} {...props}>{children}</h3>;
}
export function CardContent({ className, children, ...props }) {
  return <div className={cn("p-4 lg:p-6", className)} {...props}>{children}</div>;
}

import React from "react";
import { cn } from "./cn";
export function Card({ className, ...props }){ return <div className={cn("card", className)} {...props} />; }
export function CardHeader({ className, ...props }){ return <div className={cn("px-4 lg:px-6 py-4 border-b", className)} {...props} />; }
export function CardTitle({ className, ...props }){ return <h3 className={cn("text-base lg:text-lg font-semibold", className)} {...props} />; }
export function CardContent({ className, ...props }){ return <div className={cn("p-4 lg:p-6", className)} {...props} />; }

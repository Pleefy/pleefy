import React from "react";
import { cn } from "./cn";
export function Badge({ className, ...props }){
  return <span className={cn("badge", className)} {...props} />;
}

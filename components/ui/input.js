import React from "react";
import { cn } from "./cn";
export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={cn("input", className)} {...props} />
));
Input.displayName = "Input";

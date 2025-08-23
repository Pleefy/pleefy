import React from "react";
import { cn } from "./cn";
export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("input min-h-[120px]", className)} {...props} />
));
Textarea.displayName = "Textarea";

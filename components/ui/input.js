import { cn } from "./utils";
import * as React from "react";

export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-xl border px-3 text-sm outline-none ring-offset-2 focus:ring-2",
        className
      )}
      {...props}
    />
  );
});

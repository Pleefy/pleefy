import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        default: "",
        primary: "btn-primary",
        outline: "btn",
        ghost: "bg-transparent border-transparent hover:bg-gray-100"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4",
        lg: "h-10 px-5"
      }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
);

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
Button.displayName = "Button";

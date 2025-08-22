import React from "react";
import cn from "classnames";
export function Button({ className, variant="default", ...props }) {
  const styles = variant==="outline" ? "btn" : "btn btn-primary";
  return <button className={cn(styles, className)} {...props} />;
}

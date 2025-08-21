import * as React from "react";
import { cn } from "@/lib/utils";
export function Switch({ checked, onChange, className }: {checked:boolean; onChange:(v:boolean)=>void; className?:string}){
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn("w-12 h-6 rounded-full transition-colors", checked ? "bg-black" : "bg-gray-300", className)}
      aria-pressed={checked}
    >
      <span className={cn("block w-5 h-5 bg-white rounded-full transform transition-transform translate-y-[2px]",
        checked ? "translate-x-[26px]" : "translate-x-[2px]")} />
    </button>
  );
}

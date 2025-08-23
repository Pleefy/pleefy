"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/cn";
const items = [
  { href: "/", label: "Dashboard" },
  { href: "/conversations", label: "Gesprekken" },
  { href: "/reports", label: "Rapportages" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/integrations", label: "Integraties" },
  { href: "/settings", label: "Instellingen" }
];
export default function SideNav(){
  const pathname = usePathname();
  return (
    <nav className="mt-2 space-y-1">
      {items.map(i=>{
        const active = pathname === i.href;
        return (
          <Link key={i.href} href={i.href} className={cn(
            "block px-3 py-2 rounded-xl text-sm",
            active ? "bg-black text-white" : "hover:bg-gray-100"
          )}>{i.label}</Link>
        );
      })}
    </nav>
  );
}

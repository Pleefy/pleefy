'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, BarChart3, Settings, Plug, Rocket } from "lucide-react";

const items = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/conversations", label: "Conversations", icon: MessageSquare },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/onboarding", label: "Onboarding", icon: Rocket },
  { href: "/integrations", label: "Integrations", icon: Plug },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar(){
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-4 hidden md:block">
      <div className="flex items-center gap-2 px-2 pb-6">
        <div className="w-8 h-8 rounded-2xl bg-black text-white grid place-items-center text-lg font-bold">P</div>
        <span className="font-semibold">Pleefy</span>
      </div>
      <nav className="space-y-1">
        {items.map(({href,label,icon:Icon}) => (
          <Link key={href} href={href} className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100",
            pathname === href ? "bg-gray-100" : ""
          )}>
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

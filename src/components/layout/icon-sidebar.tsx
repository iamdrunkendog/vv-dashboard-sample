// @/components/layout/icon-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, LayoutDashboard, MessageSquare } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/projects", icon: LayoutDashboard, label: "프로젝트" },
  { href: "/channels", icon: MessageSquare, label: "채널" },
];

export function IconSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col items-center gap-4 border-r bg-sidebar p-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Link href="/projects">
            <Boxes className="h-6 w-6" />
            <span className="sr-only">VisualVibe</span>
        </Link>
      </div>
      <nav className="flex flex-col items-center gap-2">
        <TooltipProvider>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
    </div>
  );
}

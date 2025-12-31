// @/components/layout/submenu-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Calendar,
  Book,
  Code,
  GitBranch,
  KanbanSquare,
  Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { channels } from "@/data";

const projectsNav = [
  { href: "/projects", label: "프로젝트 관리 보드", icon: KanbanSquare },
  { href: "/projects/documents", label: "문서 & 가이드", icon: FileText },
  { href: "/projects/schedule", label: "일정 관리 센터", icon: Calendar },
  { href: "/projects/handbook", label: "촬영 운영 핸드북", icon: Book },
  { href: "/projects/aem-guide", label: "AEM 가이드 센터", icon: Code },
  { href: "/projects/audit-log", label: "변경 이력", icon: GitBranch },
];

const channelsNav = channels.map(channel => ({
    href: `/channels/${channel.id}/${channel.name.substring(1)}`,
    label: channel.name,
    icon: Hash,
    unreadCount: channel.unreadCount
}));

export function SubMenuSidebar() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const isChannels = pathname.startsWith("/channels");

  let navItems: { href: string; label: string; icon: React.ElementType, unreadCount?: number }[] = [];
  let title = "";

  if (isProjects) {
    navItems = projectsNav;
    title = "프로젝트";
  } else if (isChannels) {
    navItems = channelsNav;
    title = "채널";
  }

  return (
    <div className="hidden h-full border-r bg-muted/40 md:flex md:flex-col">
      <div className="flex h-14 items-center border-b px-6">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="grid items-start px-4 py-4 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.unreadCount && item.unreadCount > 0 && (
                     <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.unreadCount}
                    </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

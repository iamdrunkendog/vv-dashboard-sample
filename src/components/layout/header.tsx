// @/components/layout/header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { UserNav } from "@/components/layout/user-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
      <Breadcrumb>
        <BreadcrumbList>
          {pathSegments.length === 0 ? (
            <BreadcrumbItem>
                <BreadcrumbPage>프로젝트</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href={`/${pathSegments[0]}`}>{pathSegments[0]}</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.slice(1).map((segment, index) => (
                <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    {index < pathSegments.length - 2 ? (
                    <BreadcrumbLink asChild>
                        <Link href={`/${pathSegments.slice(0, index + 2).join('/')}`}>{segment}</Link>
                    </BreadcrumbLink>
                    ) : (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                    )}
                </BreadcrumbItem>
                </React.Fragment>
            ))}
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="검색..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}

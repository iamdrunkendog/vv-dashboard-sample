import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { IconSidebar } from "@/components/layout/icon-sidebar";
import { SubMenuSidebar } from "@/components/layout/submenu-sidebar";
import { PageTransition } from "@/components/layout/page-transition";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "VisualVibe 대시보드",
  description: "크리에이티브 팀을 위한 협업 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid h-screen w-full grid-cols-[auto_1fr] md:grid-cols-[auto_240px_1fr]">
            <IconSidebar />
            <SubMenuSidebar />
            <div className="flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto p-6">
                <PageTransition>{children}</PageTransition>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

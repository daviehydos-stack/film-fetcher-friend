import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function StreamingShell({ children, footer = true }: { children: ReactNode; footer?: boolean }) {
  return <div className="min-h-[100svh] bg-background text-foreground"><SiteHeader />{children}{footer ? <SiteFooter /> : null}</div>;
}
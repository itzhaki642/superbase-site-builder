import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-lg"
      >
        דלגו לתוכן המרכזי
      </a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
}

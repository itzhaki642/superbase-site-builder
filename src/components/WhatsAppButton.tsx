import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppUrl("שלום, אשמח לקבל פרטים נוספים")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 focus-visible:scale-105 print:hidden"
      aria-label="שליחת הודעת WhatsApp לנאור אדיר"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
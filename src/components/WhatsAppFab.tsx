import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[0_12px_30px_-8px_oklch(0.62_0.16_150/0.6)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
      <span className="hidden font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
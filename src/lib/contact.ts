export const PHONE_DISPLAY = "054-984-1800";
export const PHONE_TEL = "0549841800";
export const WHATSAPP_NUMBER = "972549841800";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
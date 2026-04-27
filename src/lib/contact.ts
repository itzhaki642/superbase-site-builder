export const PHONE_DISPLAY = "050-685-5640";
export const PHONE_TEL = "0506855640";
export const PHONE_OFFICE_DISPLAY = "04-832-8880";
export const PHONE_OFFICE_TEL = "048328880";
export const WHATSAPP_NUMBER = "972506855640";
export const EMAIL = "naoradir@orange.net.il";
export const ADDRESS = "קהילת ציון 4, עפולה";
export const HOURS = "07:00-16:00";
export const TIKTOK_URL = "https://www.tiktok.com/@nati.levi37?_r=1&_t=ZS-95snxN485uG";
export const YOUTUBE_URL = "https://youtube.com/@natilevi5215?si=NW1AzI8B8gW-oLKS";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

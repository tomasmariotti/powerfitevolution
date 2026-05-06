import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/541130304860?text=Hola%20Powerfit%2C%20quiero%20info%20del%20gimnasio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-red"
    >
      <MessageCircle size={26} />
    </a>
  );
}

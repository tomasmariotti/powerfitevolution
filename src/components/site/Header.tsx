import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Powerfit Evolution" width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
          <span className="font-display text-2xl tracking-wider hidden sm:inline">
            POWERFIT <span className="text-primary">EVOLUTION</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+541130304860"
          className="hidden lg:inline-flex items-center gap-2 rounded-md bg-gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground btn-glow"
        >
          <Phone size={16} /> 011 3030-4860
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-5 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+541130304860"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone size={16} /> 011 3030-4860
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Powerfit Evolution" width={36} height={36} className="h-9 w-9 rounded-md object-cover" />
          <span className="font-display text-xl tracking-wider">
            POWERFIT <span className="text-primary">EVOLUTION</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Powerfit Evolution · Sarandí, Buenos Aires
        </p>
      </div>
    </footer>
  );
}

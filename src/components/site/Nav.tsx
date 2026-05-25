import { useEffect, useState } from "react";

const links = [
  { href: "#historia", label: "Nossa História" },
  { href: "#evento", label: "Evento" },
  { href: "#presentes", label: "Presentes" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif text-xl tracking-elegant transition-colors ${
            scrolled ? "text-espresso" : "text-ivory"
          }`}
        >
          G <span className="text-gold font-script mx-0.5">&</span> C
        </a>
        <nav
          className={`hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-luxe transition-colors ${
            scrolled ? "text-muted-foreground" : "text-ivory/85"
          }`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className={`px-5 py-2.5 border transition-all duration-500 ${
              scrolled
                ? "border-espresso/70 text-espresso hover:bg-espresso hover:text-ivory"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso"
            }`}
          >
            Confirmar Presença
          </a>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden text-[10px] uppercase tracking-luxe ${
            scrolled ? "text-espresso" : "text-ivory"
          }`}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 fade-in">
          <div className="px-8 py-8 flex flex-col gap-5 text-xs uppercase tracking-elegant text-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="inline-block text-center mt-2 px-5 py-3 border border-espresso/70 text-espresso hover:bg-espresso hover:text-ivory transition-colors"
            >
              Confirmar Presença
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

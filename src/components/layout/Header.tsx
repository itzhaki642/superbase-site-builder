import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "בית" },
  { to: "/catalog", label: "קטלוג מוצרים" },
  { to: "/contractors", label: "קבלנים" },
  { to: "/social", label: "אנחנו ברשתות החברתיות" },
  { to: "/about", label: "אודות ויצירת קשר" },
];

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)} aria-label="מעבר לעמוד הבית של נאור אדיר בע״מ">
          <img
            src={logo}
            alt="נאור אדיר בע״מ - שירות ואחזקה לדלתות קירור"
            className="h-12 w-12 rounded-md object-contain transition-transform group-hover:scale-105 md:h-14 md:w-14"
          />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-foreground md:text-xl">
              נאור אדיר בע״מ
            </div>
            <div className="text-[10px] font-medium tracking-wide text-muted-foreground md:text-xs">
              שירות ואחזקה לדלתות קירור
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  active ? "text-primary" : "text-foreground/80",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-gradient-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="default" className="bg-gradient-accent shadow-glow hover:opacity-90">
            <Link to="/about#contact">
              <Phone className="ml-1 h-4 w-4" />
              צור קשר
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-navigation" className="border-t border-border bg-background md:hidden" aria-label="ניווט ראשי במובייל">
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-base font-medium transition-colors",
                    active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 w-full bg-gradient-accent">
              <Link to="/about#contact" onClick={() => setOpen(false)}>
                <Phone className="ml-1 h-4 w-4" />
                צור קשר
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

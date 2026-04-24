import { Link } from "react-router-dom";
import { Snowflake, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-concrete-900 text-concrete-100">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-accent">
                <Snowflake className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white">נאור אדיר בע״מ</div>
                <div className="text-xs uppercase tracking-widest text-concrete-300">
                  Industrial Cooling Solutions
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-concrete-300">
              פתרונות קירור תעשייתיים מובילים. מומחים בייבוא, מכירה והתקנה של דלתות קירור,
              וכן במתן שירות מקצועי ואמין לחדרי קירור ללקוחות תעשייתיים.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">ניווט מהיר</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-concrete-300 transition-colors hover:text-primary-glow">בית</Link></li>
              <li><Link to="/catalog" className="text-concrete-300 transition-colors hover:text-primary-glow">קטלוג מוצרים</Link></li>
              <li><Link to="/about" className="text-concrete-300 transition-colors hover:text-primary-glow">אודות ויצירת קשר</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">צור קשר</h4>
            <ul className="mt-4 space-y-3 text-sm text-concrete-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                <span dir="ltr">050-000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
                <span dir="ltr">info@naor-adir.co.il</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span>אזור התעשייה, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 opacity-30" />

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-concrete-300 md:flex-row">
          <div>© {new Date().getFullYear()} נאור אדיר בע״מ. כל הזכויות שמורות.</div>
          <Link to="/auth" className="transition-colors hover:text-primary-glow">
            כניסת מנהלים
          </Link>
        </div>
      </div>
    </footer>
  );
}

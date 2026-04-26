import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-concrete-900 text-concrete-100">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="נאור אדיר בע״מ"
                className="h-12 w-12 rounded-md bg-white/95 object-contain p-1"
              />
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white">נאור אדיר בע״מ</div>
                <div className="text-xs tracking-wide text-concrete-300">
                  שירות ואחזקה לדלתות קירור
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-concrete-300">
              שיווק, התקנה ואחזקה של כל סוגי דלתות הקירור, המקררים והמקפיאים המסחריים
              והתעשייתיים. שירותי שיפוץ וחידוש דלתות ורמפות, ובניית חדרי קירור ברמה מקצועית גבוהה.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">ניווט מהיר</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-concrete-300 transition-colors hover:text-primary-glow">בית</Link></li>
              <li><Link to="/catalog" className="text-concrete-300 transition-colors hover:text-primary-glow">קטלוג מוצרים</Link></li>
              <li><Link to="/about" className="text-concrete-300 transition-colors hover:text-primary-glow">אודות ויצירת קשר</Link></li>
              <li><Link to="/accessibility" className="text-concrete-300 transition-colors hover:text-primary-glow">הצהרת נגישות</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">צור קשר</h4>
            <ul className="mt-4 space-y-3 text-sm text-concrete-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-primary-glow" dir="ltr">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
                <span dir="ltr">info@naor-adir.co.il</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span>העליה 47, עפולה</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span>ימים א׳ - ה׳, 6:30 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 opacity-30" />

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-concrete-300 md:flex-row">
          <div>© {new Date().getFullYear()} נאור אדיר בע״מ. כל הזכויות שמורות.</div>
          <div className="flex items-center gap-4">
            <Link to="/accessibility" className="transition-colors hover:text-primary-glow">הצהרת נגישות</Link>
            <Link to="/auth" className="transition-colors hover:text-primary-glow">
              כניסת מנהלים
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ClipboardCheck, Factory, Gauge, Ruler, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import rampFieldDockSide from "@/assets/ramp-field-dock-side.webp";
import rampFieldDockFront from "@/assets/ramp-field-dock-front.webp";
import rampPlanTechnical from "@/assets/ramp-plan-technical.webp";
import rampHydraulicDiagram from "@/assets/ramp-hydraulic-diagram.webp";
import rampPlan3d from "@/assets/ramp-plan-3d.webp";
import rampPlanViews from "@/assets/ramp-plan-views.webp";
import rampScissorLift from "@/assets/ramp-scissor-lift.webp";
import rampLiftTable from "@/assets/ramp-lift-table.webp";

const highlights = [
  { icon: Ruler, title: "תכנון לפי השטח", text: "התאמה למפתח, גובה רצפה, עומסי עבודה וסוגי רכבים באתר." },
  { icon: Gauge, title: "מערכת הידראולית", text: "פתרון הרמה יציב ונוח לתפעול עבור רציפי טעינה ומעברים תעשייתיים." },
  { icon: ShieldCheck, title: "בטיחות ועמידות", text: "משטח מחוספס, מבנה פלדה, שפת גישור ופתרונות הגנה לפי הצורך." },
  { icon: Wrench, title: "ייצור והתקנה", text: "ליווי משלב התכנון ועד התקנה, שירות ותחזוקה בשטח." },
];

const rampTypes = [
  "רמפות הידראוליות לרציפי טעינה",
  "משווי גובה לבתי קירור ומרכזים לוגיסטיים",
  "במות הרמה מספריים למפעלים ומחסנים",
  "פתרונות גישור והעמסה בהתאמה אישית",
];

const gallery = [
  { image: rampFieldDockSide, title: "רמפת רציף מותקנת בשטח", alt: "רמפה הידראולית מותקנת ברציף טעינה במפעל" },
  { image: rampFieldDockFront, title: "חזית רמפת טעינה תעשייתית", alt: "רמפת טעינה תעשייתית במבט חזיתי במפעל" },
  { image: rampPlanTechnical, title: "תוכנית טכנית לפי מידה", alt: "שרטוט טכני של רמפה הידראולית עם מידות" },
  { image: rampHydraulicDiagram, title: "מערכת הידראולית", alt: "תרשים של רמפה הידראולית עם צילינדרים ותחנה הידראולית" },
  { image: rampPlan3d, title: "מודל התקנה ברציף", alt: "מודל תלת ממדי של רמפת רציף בקיר מבנה" },
  { image: rampPlanViews, title: "מבטי תכנון וייצור", alt: "מבטי שרטוט של רמפה תעשייתית" },
];

const liftSolutions = [
  { image: rampScissorLift, title: "במת הרמה מספריים", alt: "במת הרמה מספריים כחולה למפעל" },
  { image: rampLiftTable, title: "שולחן הרמה הידראולי", alt: "שולחן הרמה הידראולי צהוב ושחור" },
];

const Ramps = () => {
  return (
    <PublicLayout>
      <SEO
        title="רמפות הידראוליות | נאור אדיר"
        description="רמפות הידראוליות, משווי גובה ובמות הרמה בהתאמה אישית למפעלים, בתי קירור ומרכזים לוגיסטיים."
        path="/ramps"
      />

      <section className="border-b border-border bg-gradient-dark py-14 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-glow">
                <Factory className="h-4 w-4" />
                רמפות בהתאמה אישית
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
                רמפות הידראוליות ייחודיות למפעלים, מחסנים ורציפי טעינה
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                תכנון, ייצור והתקנה של רמפות ומשווי גובה לפי תנאי האתר — עם פתרונות שמיועדים לעבודה אינטנסיבית, בטוחה ומדויקת בשטח.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                  <Link to="/about#contact">
                    ייעוץ לרמפה לפרויקט
                    <ArrowLeft className="mr-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                  <Link to="/catalog">צפייה במוצרים</Link>
                </Button>
              </div>
            </div>
            <figure className="overflow-hidden bg-card shadow-lg">
              <img src={rampFieldDockSide} alt="רמפה הידראולית מותקנת ברציף טעינה" className="aspect-[4/3] w-full object-cover" fetchPriority="high" />
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">מה מייחד אותנו</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                פתרון שמתחיל במדידה ומסתיים ברמפה עובדת
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                הרמפה נבחרת לפי המציאות באתר: הפרשי גובה, תדירות העמסה, עומסים, תנועת מלגזות וסביבת העבודה.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="bg-card p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">סוגי פתרונות</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                רמפות, משווי גובה ובמות הרמה
              </h2>
            </div>
            <div className="grid gap-0 divide-y divide-border border-y border-border">
              {rampTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 py-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base font-bold leading-relaxed text-foreground">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">תוכניות והתקנות</div>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              מהתוכנית הטכנית ועד ההתקנה בשטח
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.title} className="group overflow-hidden bg-card shadow-sm">
                <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="border-r-4 border-primary p-4 text-base font-extrabold text-foreground">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                לפני הצעת מחיר בודקים את נתוני האתר
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                כדי להתאים רמפה נכון נדרש להבין מידות, הפרשי גובה, עומס נדרש, סוגי כלי שינוע וקצב עבודה.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {liftSolutions.map((item) => (
                <figure key={item.title} className="overflow-hidden bg-background shadow-sm">
                  <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="p-4 text-base font-extrabold text-foreground">{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-dark py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-primary-glow">
              <Truck className="h-5 w-5" />
              פתרונות טעינה למפעלים ומרכזים לוגיסטיים
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              צריכים רמפה לפי מידה? שלחו לנו נתוני שטח
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              נבחן את הצורך, נמליץ על פתרון מתאים ונלווה אתכם עד התקנה ותפעול.
            </p>
            <Button asChild size="lg" className="mt-7 bg-gradient-accent shadow-glow hover:opacity-90">
              <Link to="/about#contact">יצירת קשר לרמפות</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Ramps;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Snowflake,
  Building2,
  PackageCheck,
  Factory,
  Truck,
  GraduationCap,
  Wrench,
  DoorOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_OFFICE_DISPLAY } from "@/lib/contact";
import heroImage from "@/assets/hero-cold-storage.jpg";
import loadingDocksImage from "@/assets/field-project-loading-docks.jpeg";
import loadingDockInterior from "@/assets/loading-dock-interior.jpeg";
import loadingDockExterior from "@/assets/loading-dock-exterior.jpeg";
import hydraulicRampImage from "@/assets/field-project-hydraulic-ramp.jpeg";
import industrialDoorImage from "@/assets/field-project-industrial-door.jpeg";
import rampBlueDockFront from "@/assets/ramp-blue-dock-front.jpeg";
import rampBlueGiantOpen from "@/assets/ramp-blue-giant-open.jpeg";
import rampHormannDock from "@/assets/ramp-hormann-dock.jpeg";
import rampInkemaInstalled from "@/assets/ramp-inkema-installed.jpeg";
import rampInstallationsCollage from "@/assets/ramp-installations-collage.jpeg";

const industryClients = [
  { name: "משרד הביטחון", mark: "משרד הביטחון", meta: "מגזר ביטחוני" },
  { name: "שופרסל", mark: "שופרסל", meta: "קמעונאות ומרכזים לוגיסטיים" },
  { name: "נסטלה", mark: "נסטלה", meta: "מזון ומשקאות" },
  { name: "טרה נוגה", mark: "טרה נוגה", meta: "מוצרי חלב" },
  { name: "בלדי", mark: "בלדי", meta: "תעשיית מזון" },
  { name: "סנפרוסט", mark: "סנפרוסט", meta: "מזון קפוא" },
  { name: "דיקסל", mark: "דיקסל", meta: "תעשייה ולוגיסטיקה" },
  { name: "תנובה", mark: "תנובה", meta: "מוצרי חלב ומזון" },
  { name: "שטראוס", mark: "שטראוס", meta: "מזון ומשקאות" },
  { name: "טירת צבי", mark: "טירת צבי", meta: "תעשיית בשר" },
  { name: "עוף טוב", mark: "עוף טוב", meta: "ייצור ושיווק" },
  { name: "זוגלובק", mark: "זוגלובק", meta: "תעשיית מזון" },
  { name: "מעדנות", mark: "מעדנות", meta: "ייצור מזון" },
];

const contractorSolutions = [
  { icon: Truck, title: "קנייה סיטונאית", text: "מלאי מקצועי לקבלנים, ספקים ומתקינים." },
  { icon: DoorOpen, title: "כל אביזרי הקירור", text: "תריסים, דלתות, רמפות, חלקים וציוד משלים." },
  { icon: GraduationCap, title: "ליווי מקצועי", text: "הכוונה טכנית והתאמה לפי סוג הפרויקט." },
];

const factorySolutions = [
  { icon: Wrench, title: "התקנות ותחזוקה", text: "שירות למערכי קירור, דלתות ופתרונות תעשייתיים." },
  { icon: Factory, title: "רמפות למפעלים", text: "ייצור כחול־לבן של רמפות הידראוליות מהיסוד." },
  { icon: PackageCheck, title: "פתרון תפעולי מלא", text: "משלב הייעוץ ועד שירות שוטף בשטח." },
];

const loadingDockSlides = [
  { image: loadingDockInterior, alt: "רמפות הידראוליות בתוך מפעל לוגיסטי" },
  { image: loadingDockExterior, alt: "רציפי טעינה חיצוניים עם דלתות תעשייתיות" },
];

const hydraulicRampSlides = [
  { image: hydraulicRampImage, alt: "רמפה הידראולית תעשייתית בשטח מפעל" },
  { image: rampBlueDockFront, alt: "רמפה הידראולית כחולה — מבט חזיתי" },
  { image: rampBlueGiantOpen, alt: "רמפת רציף הידראולית במצב פתוח" },
  { image: rampHormannDock, alt: "רמפת רציף תעשייתית עם סימוני בטיחות" },
  { image: rampInkemaInstalled, alt: "רמפה מותקנת בגומחת רציף בטון" },
  { image: rampInstallationsCollage, alt: "התקנות רמפות במפעלים" },
];

const fieldProjects = [
  {
    images: loadingDockSlides,
    title: "רציפי טעינה למפעלים",
    alt: "רציפי טעינה ודלתות תעשייתיות במפעל",
  },
  { images: hydraulicRampSlides, title: "רמפה הידראולית תעשייתית", alt: "רמפה הידראולית תעשייתית בשטח מפעל" },
  { images: [{ image: industrialDoorImage, alt: "תריס תעשייתי גדול במפעל" }], title: "תריס ודלת תעשייתית", alt: "תריס תעשייתי גדול במפעל" },
];

function FieldProjectImage({ slides }: { slides: { image: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-full w-full">
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-white" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "נאור אדיר בע״מ",
    description:
      "יבוא, התקנה ושירות לדלתות קירור, חדרי קירור, רמפות, משווי גובה, וילונות מהירים ותריסי גלילה למפעלים וקבלנים.",
    telephone: [PHONE_DISPLAY, PHONE_OFFICE_DISPLAY],
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressCountry: "IL",
    },
    areaServed: "ישראל",
    knowsAbout: [
      "דלתות קירור",
      "חדרי קירור",
      "רמפות",
      "משווי גובה",
      "תריסי גלילה",
      "וילונות מהירים",
      "חלקי חילוף לקבלנים",
    ],
  };

  return (
    <PublicLayout>
      <SEO
        title="נאור אדיר בע״מ | דלתות קירור ורמפות"
        description="יבוא, התקנה ושירות לדלתות קירור, חדרי קירור, רמפות, משווי גובה, וילונות מהירים ותריסי גלילה למפעלים וקבלנים."
        path="/"
        jsonLd={localBusinessSchema}
      />
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="חדר קירור תעשייתי עם דלתות קירור"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container relative py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-widest text-white backdrop-blur-md md:px-4 md:text-xs">
              <Snowflake className="h-3.5 w-3.5" />
              פתרונות קירור, דלתות ורמפות לתעשייה
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl md:text-6xl lg:text-7xl">
              ייבוא, ייצור ושיווק אביזרי קירור ורמפות לתעשייה
            </h1>
            <div className="mt-5 max-w-2xl border-r-4 border-primary bg-white/10 p-4 text-base font-extrabold leading-relaxed text-white backdrop-blur-md md:mt-6 md:text-xl">
              היחידים בישראל המבצעים ייצור כחול-לבן של רמפות הידראוליות מהיסוד.
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:mt-6 md:text-xl">
              פתרונות קירור, דלתות ורמפות למפעלים, ספקים וקבלנים — כולל אספקה סיטונאית והכוונה מקצועית להתקנה עצמית.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                <Link to="/catalog">
                  צפה בקטלוג המוצרים
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto"
              >
                <Link to="/about#contact">דברו איתנו</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 industrial-grid-bg opacity-10" />
            <div className="relative rounded-md border border-white/15 bg-concrete-900/75 p-5 shadow-industrial backdrop-blur-xl backdrop-saturate-150 sm:p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-4 text-center sm:gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">+25</div>
                  <div className="mt-1 text-sm font-medium text-white/85">שנות ניסיון בתחום</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">1</div>
                  <div className="mt-1 text-sm font-medium text-white/85">היחידים בארץ שבונים רמפה הידראולית מאפס</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">כחול־לבן</div>
                  <div className="mt-1 text-sm font-medium text-white/85">ייצור ישראלי לרמפות תעשייתיות</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">תו תקן</div>
                  <div className="mt-1 text-sm font-medium text-white/85">בעלי תו תקן ישראלי</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE SOLUTIONS */}
      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">לקבלנים</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                קנייה סיטונאית של אביזרי קירור ורמפות
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                קבלנים יכולים להגיע אלינו ולרכוש בצורה סיטונאית תריסים, דלתות, רמפות, אביזרי קירור וחלקים מקצועיים לפרויקטים.
              </p>
              <div className="mt-7 grid gap-4">
                {contractorSolutions.map((item) => (
                  <div key={item.title} className="flex gap-4 border-r-4 border-primary bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-10 lg:border-r lg:border-t-0 lg:pt-0 lg:pr-12">
              <div className="text-xs font-bold uppercase tracking-widest text-primary">למפעלים</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                שירות, התקנות ותחזוקה למערכי תעשייה
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                למפעלים אנחנו מספקים התקנות, תחזוקה שוטפת, דלתות קירור ורמפות הידראוליות בהתאמה לצרכים התפעוליים בשטח.
              </p>
              <div className="mt-7 grid gap-4">
                {factorySolutions.map((item) => (
                  <div key={item.title} className="flex gap-4 border-r-4 border-primary bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
              <Link to="/about#contact">
                לקבלת הצעה
                <ArrowLeft className="mr-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contractors">עמוד לקבלנים</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FIELD PROJECTS */}
      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">פרויקטים מהשטח</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                התקנות ורמפות במפעלים פעילים
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              עבודות אמיתיות בשטח — דלתות, רציפי טעינה ורמפות למערכי תעשייה ולוגיסטיקה.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {fieldProjects.map((project) => (
              <figure key={project.title} className="group overflow-hidden bg-card shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                  <FieldProjectImage slides={project.images} />
                </div>
                <figcaption className="border-r-4 border-primary p-4 text-base font-extrabold text-foreground">
                  {project.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-border bg-muted/30 py-12 md:py-18">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary md:h-12 md:w-12">
                <Building2 className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-primary md:mt-5">
                לקוחות מובילים
              </div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                מוניטין שנבנה עם החברות הגדולות בישראל
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                ניסיון מוכח מול גופי תעשייה, מזון ולוגיסטיקה מהגדולים בארץ.
              </p>
            </div>
            <div className="border-y border-border py-4 md:py-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
                {industryClients.map((client) => (
                  <div
                    key={client.name}
                    className="group flex min-h-14 items-center justify-center text-center"
                    aria-label={`לקוח: ${client.name}`}
                  >
                    <div className="text-lg font-black leading-none text-foreground/75 transition-colors group-hover:text-primary md:text-2xl">
                      {client.mark}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-dark py-14 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">בואו נדבר</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                זקוקים לפתרון קירור עבור העסק שלכם?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                צוות המומחים שלנו ישמח לסייע בבחירת הפתרון המתאים ביותר - מייעוץ ראשוני ועד התקנה מלאה, בניית רמפות
                ושירות מתמשך.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
                <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                  <Link to="/about#contact">השאירו פרטים</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                >
                  <Link to="/catalog">לקטלוג המוצרים</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Home;

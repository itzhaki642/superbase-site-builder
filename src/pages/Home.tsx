import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, Clock, Snowflake, Building2, PackageCheck, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_OFFICE_DISPLAY } from "@/lib/contact";
import heroImage from "@/assets/hero-cold-storage.jpg";

const trustPoints = [
  "עשרות שנות ניסיון מעשי",
  "יבואני חלקי חילוף ואביזרים",
  "מומחיות בבניית רמפות מאפס",
  "אספקה לקבלנים ולאנשי מקצוע",
];

const industryClients = [
  { name: "תנובה", mark: "תנובה", meta: "מוצרי חלב ומזון" },
  { name: "שטראוס", mark: "Strauss", meta: "מזון ומשקאות" },
  { name: "טירת צבי", mark: "טירת צבי", meta: "תעשיית בשר" },
  { name: "עוף טוב", mark: "עוף טוב", meta: "ייצור ושיווק" },
  { name: "זוגלובק", mark: "זוגלובק", meta: "תעשיית מזון" },
  { name: "מעדנות", mark: "מעדנות", meta: "ייצור מזון" },
];

const importSolutions = [
  "חלקי חילוף לדלתות קירור: ידיות, עיניים, מיקרו־סוויצ׳ים ופרזול",
  "דלתות קירור, דלתות מהירות, וילונות מהירים ותריסי גלילה",
  "משווי גובה, שלטרים, כריות אטימה ורמפות טעינה",
  "אספקה לקבלנים לצד התקנות ושירות באתרי תעשייה",
];

const corePillars = [
  { icon: Truck, title: "ייבוא", desc: "מלאי אביזרים וחלקי חילוף לדלתות, קירור, תריסים, וילונות ורמפות." },
  { icon: Wrench, title: "התקנות", desc: "בניית דלתות קירור מא׳ עד ת׳, חדרי קירור קטנים ורמפות למפעלים." },
  { icon: Clock, title: "שירות", desc: "קריאות שירות מהירות ופתרונות תחזוקה למפעלים לפי צורך וחוזה." },
];

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "נאור אדיר בע״מ",
    description: "יבוא, התקנה ושירות לדלתות קירור, חדרי קירור, רמפות, משווי גובה, וילונות מהירים ותריסי גלילה למפעלים וקבלנים.",
    telephone: [PHONE_DISPLAY, PHONE_OFFICE_DISPLAY],
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressCountry: "IL",
    },
    areaServed: "ישראל",
    knowsAbout: ["דלתות קירור", "חדרי קירור", "רמפות", "משווי גובה", "תריסי גלילה", "וילונות מהירים", "חלקי חילוף לקבלנים"],
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

        <div className="container relative py-20 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-widest text-white backdrop-blur-md md:px-4 md:text-xs">
              <Snowflake className="h-3.5 w-3.5" />
              פתרונות קירור, דלתות ורמפות לתעשייה
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl md:text-6xl lg:text-7xl">
              דלתות קירור, חדרי קירור ורמפות למפעלים
              <span className="mt-2 block text-gradient-primary">ברמה הגבוהה ביותר</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:mt-6 md:text-xl">
              נאור אדיר בע״מ מרכזת במקום אחד ייבוא חלקי חילוף ואביזרים, בניית דלתות ורמפות,
              התקנות מקצועיות ושירות מהיר למפעלים, קבלנים ואתרי תעשייה בכל הארץ.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                <Link to="/catalog">
                  צפה בקטלוג המוצרים
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto">
                <Link to="/about#contact">דברו איתנו</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">מה אנחנו עושים</div>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
              שלושה תחומים שמכסים את כל הצורך בשטח
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              יבוא חלקים, התקנות מקצועיות ושירות מהיר למפעלים, חדרי קירור וקבלנים.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
            {corePillars.map((pillar) => (
              <div key={pillar.title} className="flex min-h-40 flex-col border-t-4 border-primary bg-card p-5 shadow-sm md:min-h-48 md:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary md:h-12 md:w-12">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-foreground md:text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-10 md:pt-8">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTER POSITIONING */}
      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary md:h-12 md:w-12">
                <Factory className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-primary md:mt-5">יבוא, אספקה והתקנה</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                מקור מקצועי אחד לאביזרים, חלקי חילוף והתקנות בשטח
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                החברה מייבאת מלאי רחב של חלקי חילוף ואביזרים לדלתות קירור, דלתות מהירות,
                וילונות מהירים, תריסי גלילה, משווי גובה ורמפות. קבלנים ואנשי מקצוע רוכשים ממנה חלקים,
                ובמקביל הצוות מתקין ומתחזק את המערכות בשטח אצל מפעלים וחברות תעשייה.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {importSolutions.map((solution) => (
                <div key={solution} className="flex min-h-16 items-center gap-3 rounded-md border border-border/70 bg-card p-3 shadow-sm md:min-h-20 md:p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary md:h-9 md:w-9">
                    <PackageCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold leading-relaxed text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-border bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary md:h-12 md:w-12">
                <Building2 className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-primary md:mt-5">לקוחות מובילים</div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                מוניטין שנבנה עם החברות הגדולות בישראל
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                לאורך השנים בוצעו אספקות, התקנות ושירותים במפעלי מזון, קירור ותעשייה מובילים בישראל —
                כולל עבודה ישירה ובשיתוף קבלנים, תוך שמירה על מקצועיות, זמינות וביצוע נקי בשטח.
              </p>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/80 p-3 shadow-sm backdrop-blur-sm md:p-5">
              <div className="grid grid-cols-2 divide-x divide-y divide-border/70 overflow-hidden rounded-md border border-border/70 sm:grid-cols-4">
              {industryClients.map((client) => (
                <div
                  key={client.name}
                  className="group flex min-h-24 flex-col items-center justify-center bg-background/70 p-4 text-center transition-colors hover:bg-primary/5 md:min-h-28 md:p-5"
                  aria-label={`לקוח: ${client.name}`}
                >
                  <div className="text-xl font-black leading-none text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {client.mark}
                  </div>
                  <div className="mt-3 h-px w-10 bg-primary/40 transition-all group-hover:w-14" />
                  <div className="mt-3 text-xs font-medium text-muted-foreground">{client.meta}</div>
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
                צוות המומחים שלנו ישמח לסייע בבחירת הפתרון המתאים ביותר -
                מייעוץ ראשוני ועד התקנה מלאה, בניית רמפות ושירות מתמשך.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
                <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                  <Link to="/about#contact">השאירו פרטים</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                  <Link to="/catalog">לקטלוג המוצרים</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 industrial-grid-bg opacity-10" />
              <div className="relative rounded-lg bg-white/5 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">+25</div>
                    <div className="mt-1 text-sm text-white/70">שנות ניסיון בתחום</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">1</div>
                    <div className="mt-1 text-sm text-white/70">מומחיות ייחודית בבניית רמפות</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">3</div>
                    <div className="mt-1 text-sm text-white/70">ייבוא, התקנות ושירות</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">מהיר</div>
                    <div className="mt-1 text-sm text-white/70">מענה שירות לפי צורך וחוזה</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Home;

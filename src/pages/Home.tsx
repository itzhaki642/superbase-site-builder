import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Wrench, Clock, Award, Snowflake, DoorOpen, ChevronLeft, Building2, PackageCheck, Factory, Store, Zap, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import heroImage from "@/assets/hero-cold-storage.jpg";
import doorImage from "@/assets/cold-door-detail.jpg";
import serviceImage from "@/assets/service-image.jpg";

const values = [
  { icon: Award, title: "עשרות שנות ניסיון", desc: "ניסיון מעשי רחב בקירור ובפתרונות לתעשייה" },
  { icon: PackageCheck, title: "יבואני חלקי חילוף", desc: "ידיות, עיניים, מיקרו־סוויצ׳ים, פרזול ומנגנונים" },
  { icon: Shield, title: "מומחי רמפות", desc: "מהיחידים בארץ שבונים רמפות למפעלים מאפס" },
  { icon: Store, title: "חנות לקבלנים", desc: "אספקת אביזרים וחלקים לקבלנים ולאנשי מקצוע" },
  { icon: Zap, title: "שירות מהיר", desc: "מענה זריז לתקלות, כולל מסלולי שירות לפי חוזה" },
];

const services = [
  {
    icon: DoorOpen,
    title: "דלתות קירור",
    desc: "דלתות קירור, דלתות נגררות, דלתות מתרוממות ודלתות מהירות לתעשייה ולמפעלים",
    image: doorImage,
    link: "/cooling-doors",
  },
  {
    icon: Snowflake,
    title: "חדרי קירור",
    desc: "בניית חדרי קירור, שירות ואחזקה, כולל פתרונות איטום ו-P.V.C לפי דרישת הלקוח",
    image: heroImage,
    link: "/about",
  },
  {
    icon: Wrench,
    title: "רמפות ופתרונות טעינה",
    desc: "בנייה, התקנה וחידוש רמפות, משווי גובה, תריסי גלילה, שלטרים וכריות אטימה",
    image: serviceImage,
    link: "/about",
  },
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
  return (
    <PublicLayout>
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

        <div className="container relative py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
              <Snowflake className="h-3.5 w-3.5" />
              פתרונות קירור, דלתות ורמפות לתעשייה
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white text-balance md:text-6xl lg:text-7xl">
              דלתות קירור, חדרי קירור ורמפות למפעלים
              <span className="mt-2 block text-gradient-primary">ברמה הגבוהה ביותר</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              נאור אדיר בע״מ מרכזת במקום אחד ייבוא חלקי חילוף ואביזרים, בניית דלתות ורמפות,
              התקנות מקצועיות ושירות מהיר למפעלים, קבלנים ואתרי תעשייה בכל הארץ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-accent shadow-glow hover:opacity-90">
                <Link to="/catalog">
                  צפה בקטלוג המוצרים
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
                <Link to="/about#contact">דברו איתנו</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="border-b border-border bg-background py-12 md:py-16">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {corePillars.map((pillar) => (
              <div key={pillar.title} className="flex min-h-36 items-start gap-4 border-r-4 border-primary bg-card p-6 shadow-sm first:border-r-primary">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-foreground">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="border-b border-border bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{v.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTER POSITIONING */}
      <section className="border-b border-border bg-background py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                <Factory className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">יבוא, אספקה והתקנה</div>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
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
                <div key={solution} className="flex min-h-20 items-center gap-3 rounded-md border border-border/70 bg-card p-4 shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
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
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">לקוחות מובילים</div>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
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
                  className="group flex min-h-28 flex-col items-center justify-center bg-background/70 p-5 text-center transition-colors hover:bg-primary/5"
                  aria-label={`לקוח: ${client.name}`}
                >
                  <div className="text-2xl font-black leading-none text-foreground transition-colors group-hover:text-primary md:text-3xl">
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

      {/* SERVICES */}
      <section className="concrete-texture py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">תחומי הפעילות שלנו</div>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
              פתרונות מקיפים למפעלים, מחסנים וחדרי קירור
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              מדלת הקירור ועד הרמפה, האיטום והתחזוקה השוטפת - אנחנו לצדכם בכל שלב
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-16">
            {services.map((s, i) => (
              <Card
                key={s.title}
                className="group overflow-hidden border-border/60 bg-card hover-lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-accent shadow-glow">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to={s.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    קראו עוד
                    <ChevronLeft className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-dark py-20 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">בואו נדבר</div>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                זקוקים לפתרון קירור עבור העסק שלכם?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                צוות המומחים שלנו ישמח לסייע בבחירת הפתרון המתאים ביותר -
                מייעוץ ראשוני ועד התקנה מלאה, בניית רמפות ושירות מתמשך.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-accent shadow-glow hover:opacity-90">
                  <Link to="/about#contact">השאירו פרטים</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
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

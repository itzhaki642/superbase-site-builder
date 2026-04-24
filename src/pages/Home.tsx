import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Wrench, Clock, Award, Snowflake, DoorOpen, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import heroImage from "@/assets/hero-cold-storage.jpg";
import doorImage from "@/assets/cold-door-detail.jpg";
import serviceImage from "@/assets/service-image.jpg";

const values = [
  { icon: Award, title: "איכות מוכחת", desc: "מוצרים מהיצרנים המובילים בעולם" },
  { icon: Shield, title: "אמינות מלאה", desc: "שנים של ניסיון בשוק התעשייתי" },
  { icon: Wrench, title: "שירות מקצועי", desc: "צוות טכנאים מיומן ומנוסה" },
  { icon: Clock, title: "זמינות גבוהה", desc: "תגובה מהירה לקריאות שירות" },
];

const services = [
  {
    icon: DoorOpen,
    title: "דלתות קירור",
    desc: "מגוון רחב של דלתות קירור תעשייתיות - דלתות הזזה, דלתות שאלה, דלתות אוטומטיות ועוד",
    image: doorImage,
    link: "/catalog",
  },
  {
    icon: Snowflake,
    title: "חדרי קירור",
    desc: "התקנה, תחזוקה ושיפוץ של חדרי קירור והקפאה לכלל ענפי התעשייה",
    image: heroImage,
    link: "/about",
  },
  {
    icon: Wrench,
    title: "שירות ותחזוקה",
    desc: "שירות מקצועי, תיקונים, חלפי חילוף ותחזוקה שוטפת לחדרי קירור קיימים",
    image: serviceImage,
    link: "/about",
  },
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
              פתרונות קירור תעשייתיים
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white text-balance md:text-6xl lg:text-7xl">
              דלתות קירור ושירות לחדרי קירור
              <span className="mt-2 block text-gradient-primary">ברמה הגבוהה ביותר</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              נאור אדיר בע״מ - מומחים בייבוא, מכירה והתקנה של דלתות קירור תעשייתיות,
              ובמתן שירות מקצועי לחדרי קירור עבור לקוחות תעשייתיים בכל הארץ.
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

      {/* SERVICES */}
      <section className="concrete-texture py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">תחומי הפעילות שלנו</div>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
              פתרונות מקיפים לעולם הקירור התעשייתי
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              מהדלת הראשונה ועד התחזוקה השוטפת - אנחנו לצדכם בכל שלב
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
                מייעוץ ראשוני ועד התקנה מלאה ושירות מתמשך.
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
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">+15</div>
                    <div className="mt-1 text-sm text-white/70">שנות ניסיון</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">+500</div>
                    <div className="mt-1 text-sm text-white/70">פרויקטים</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">24/7</div>
                    <div className="mt-1 text-sm text-white/70">זמינות שירות</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary-glow lg:text-5xl">100%</div>
                    <div className="mt-1 text-sm text-white/70">מקצועיות</div>
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

import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight, DoorOpen, Phone, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import doorImage from "@/assets/cold-door-detail.jpg";

const services = [
  "בניית דלתות קירור מא׳ עד ת׳",
  "דלתות כנף לחדרי קירור",
  "דלתות קירור מתרוממות",
  "דלתות קירור נגררות",
  "התקנת דלתות מהירות ווילונות מהירים",
  "שיפוץ וחידוש דלתות קירור קיימות",
  "בניית חדרי קירור ברמת ביצוע גבוהה ובהתאמה לדרישת הלקוח",
];

const productTypes = [
  "דלת חדר קירור",
  "דלת קירור נגררת",
  "ידיות פתיחה חיצוניות ופנימיות",
  "עיניים, מיקרו־סוויצ׳ים וחלקי חשמל",
  "מנגנונים חשמליים לדלתות נגררות",
  "פרזול מקצועי לדלתות קירור",
  "אביזרים לקבלנים ולאנשי מקצוע",
  "מוצרי Fermod Seul",
];

const CoolingDoors = () => {
  return (
    <PublicLayout>
      <section className="border-b border-border bg-gradient-dark py-8 md:py-12">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-primary-glow">בית</Link>
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span className="text-white">דלתות קירור</span>
          </nav>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                <DoorOpen className="h-4 w-4" />
                דלתות קירור לתעשייה
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                שיווק, התקנה ושירות לדלתות קירור מכל הסוגים
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                אחד מתחומי ההתמחות המרכזיים של נאור אדיר בע״מ הוא שיווק, התקנה ומתן שירות לדלתות קירור לסוגיהן השונים. החברה משווקת את מוצרי Fermod Seul, חברה מובילה בתחום פתרונות הפרזול והמנגנונים לדלתות קירור.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">
                עם מעל 25 שנות ניסיון בתחום הקירור התעשייתי, החברה מקפידה על דייקנות מלאה בביצוע, סדר וניקיון באתר העבודה ושירות אדיב ומקצועי לכל לקוח.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-accent shadow-glow hover:opacity-90">
                  <Link to="/about#contact">
                    <Phone className="ml-1 h-4 w-4" />
                    קבלת הצעת מחיר
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/catalog">
                    לקטלוג המוצרים
                    <ArrowLeft className="mr-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src={doorImage}
                alt="דלת קירור תעשייתית"
                className="aspect-[4/3] w-full object-cover"
                width={900}
                height={675}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="concrete-texture py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-border/60 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-extrabold text-foreground">השירותים בתחום הקירור</h2>
              </div>
              <div className="mt-6 grid gap-3">
                {services.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-border/60 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-extrabold text-foreground">מוצרים ורכיבים משלימים</h2>
              </div>
              <div className="mt-6 grid gap-3">
                {productTypes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default CoolingDoors;
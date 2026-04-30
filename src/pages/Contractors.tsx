import { Link } from "react-router-dom";
import {
  ArrowLeft,
  DoorOpen,
  GraduationCap,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";

const wholesaleCategories = [
  "דלתות קירור ודלתות מהירות",
  "תריסי גלילה ופתרונות סגירה",
  "רמפות, משווי גובה ואביזרי העמסה",
  "חלקי חילוף, פרזול וציוד משלים",
];

const advantages = [
  { icon: Truck, title: "רכישה סיטונאית", text: "מחירים ותנאים המותאמים לקבלנים, מתקינים וספקים שעובדים באופן שוטף." },
  { icon: PackageCheck, title: "מבחר במקום אחד", text: "אביזרי קירור, תריסים, דלתות, רמפות וחלקים משלימים לפרויקטים תעשייתיים." },
  { icon: GraduationCap, title: "הכוונה טכנית", text: "עזרה בבחירת מוצר מתאים לפי מפתח, שימוש, עומסים ותנאי שטח." },
  { icon: ShieldCheck, title: "ידע מהשטח", text: "שילוב בין יבוא, ייצור, התקנות ושירות שמאפשר להבין מה באמת עובד בפרויקט." },
];

const processSteps = [
  "שולחים דרישה או רשימת ציוד לפרויקט",
  "מקבלים התאמה מקצועית ומענה על זמינות",
  "אוספים או מתאמים אספקה לפי הצורך",
];

const faqs = [
  {
    question: "האם קבלנים יכולים לקנות בלי התקנה?",
    answer: "כן. ניתן לרכוש סחורה, אביזרים וחלקי חילוף בצורה סיטונאית גם ללא שירות התקנה מטעמנו.",
  },
  {
    question: "אילו מוצרים אפשר לרכוש?",
    answer: "דלתות קירור, דלתות מהירות, תריסים, רמפות, משווי גובה, חלקי חילוף, אביזרי קירור וציוד משלים לפי צורך הפרויקט.",
  },
  {
    question: "האם יש ליווי בבחירת מוצר מתאים?",
    answer: "כן. אנחנו מסייעים לקבלנים להבין התאמה טכנית, מידות, שימושים ועומסים כדי לצמצם טעויות בשטח.",
  },
  {
    question: "האם ניתן לקבל מחירון קבלנים?",
    answer: "אפשר ליצור קשר ולציין שמדובר בקבלן או ספק. נבין את היקף העבודה ונתאים מענה מסחרי מתאים.",
  },
];

const Contractors = () => {
  return (
    <PublicLayout>
      <SEO
        title="קבלנים | רכישה סיטונאית לאביזרי קירור"
        description="עמוד לקבלנים לרכישה סיטונאית של אביזרי קירור, תריסים, דלתות, רמפות, חלקי חילוף וציוד משלים לפרויקטים."
        path="/contractors"
      />

      <section className="border-b border-border bg-gradient-dark py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-glow">
              <Snowflake className="h-4 w-4" />
              לקבלנים, מתקינים וספקים
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              רכישה סיטונאית של אביזרי קירור, תריסים, דלתות ורמפות
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              נאור אדיר מרכזת לקבלנים מקור מקצועי אחד לרכישת ציוד, חלקים ופתרונות תעשייתיים — עם ידע טכני שמגיע מהתקנות ותחזוקה בשטח.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full bg-gradient-accent shadow-glow hover:opacity-90 sm:w-auto">
                <Link to="/about#contact">
                  לקבלת מחירון קבלנים
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                <Link to="/catalog">לצפייה במוצרים</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">מה אפשר לרכוש</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                מלאי מקצועי לפרויקטים בקירור ותעשייה
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                במקום לפצל ספקים, קבלנים יכולים לקבל אצלנו מענה רחב לציוד מרכזי ולחלקים משלימים.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {wholesaleCategories.map((category) => (
                <div key={category} className="flex min-h-20 items-center gap-3 border-r-4 border-primary bg-card p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <DoorOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold leading-tight text-foreground">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">יתרונות לקבלנים</div>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              פחות ריצות, יותר ודאות בפרויקט
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
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
      </section>

      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                תהליך עבודה פשוט לקבלנים
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                המטרה היא לתת מענה מהיר, מקצועי וברור — כדי שתוכלו להתקדם באתר בלי עיכובים מיותרים.
              </p>
            </div>
            <div className="grid gap-0 divide-y divide-border border-y border-border">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 py-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="text-base font-bold leading-relaxed text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">שאלות נפוצות</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                תשובות לפני שמתחילים
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full border-y border-border">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-right text-base font-extrabold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-gradient-dark py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              עובדים כקבלנים? דברו איתנו על רכישה סיטונאית
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              שלחו דרישה, רשימת ציוד או פרטי פרויקט ונחזור עם מענה מותאם.
            </p>
            <Button asChild size="lg" className="mt-7 bg-gradient-accent shadow-glow hover:opacity-90">
              <Link to="/about#contact">יצירת קשר לקבלנים</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Contractors;

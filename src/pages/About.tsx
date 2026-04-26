import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Award, Shield, Snowflake, Wrench, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "שם חייב להכיל לפחות 2 תווים").max(100, "שם ארוך מדי"),
  phone: z.string().trim().min(7, "מספר טלפון לא תקין").max(30, "טלפון ארוך מדי"),
  email: z.string().trim().email("כתובת אימייל לא תקינה").max(255, "אימייל ארוך מדי"),
  message: z.string().trim().min(5, "הודעה חייבת להכיל לפחות 5 תווים").max(2000, "הודעה ארוכה מדי"),
});

const values = [
  { icon: Award, title: "איכות מוכחת", desc: "מוצרים מהיצרנים המובילים בעולם" },
  { icon: Shield, title: "אמינות מלאה", desc: "שנים של ניסיון בשוק התעשייתי" },
  { icon: Wrench, title: "שירות מקצועי", desc: "צוות טכנאים מיומן ומנוסה" },
  { icon: Snowflake, title: "התמחות", desc: "מומחים ייעודיים בעולם הקירור" },
];

const About = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const productName = searchParams.get("product");
    if (productName) {
      setForm((f) => ({ ...f, message: `מתעניין במוצר: ${productName}\n\n` }));
    }
    if (window.location.hash === "#contact") {
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "שגיאה בטופס",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { name, phone, email, message } = result.data;
    const { error } = await supabase.from("contact_messages").insert({ name, phone, email, message });
    setLoading(false);

    if (error) {
      toast({
        title: "אירעה שגיאה",
        description: "לא הצלחנו לשלוח את הפנייה. אנא נסו שוב.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "הפנייה התקבלה!",
      description: "נחזור אליכם בהקדם האפשרי. תודה!",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <PublicLayout>
      {/* About */}
      <section className="border-b border-border bg-gradient-dark py-16 md:py-24">
        <div className="container">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">אודות החברה</div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            נאור אדיר בע״מ
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            חברת נאור אדיר בע״מ משווקת, מתקינה ומתחזקת את כל סוגי דלתות הקירור,
            המקררים והמקפיאים המסחריים והתעשייתיים. החברה בעלת וותק של שנים רבות בתחום
            ומספקת דלתות קירור כנף, דלתות מתרוממות, דלתות נגררות, שירותי שיפוץ וחידוש
            לדלתות קירור קיימות, שיפוץ וחידוש רמפות, ועוד - תוך שמירה על דייקנות,
            סדר וניקיון.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
            בנוסף, החברה מציעה שירותי בניית חדרי קירור ומערכות קירור ברמה מקצועית גבוהה,
            על פי דרישת הלקוח.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="concrete-texture border-b border-border py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">הערכים שמובילים אותנו</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="border-border/60 bg-card p-6 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-accent">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">צור קשר</div>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
                בואו נדבר על הפרויקט שלכם
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                השאירו פרטים ונחזור אליכם בהקדם, או צרו קשר ישיר באחד מהאמצעים הבאים:
              </p>

              <div className="mt-8 space-y-4">
                <a href="tel:050-000-0000" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">טלפון</div>
                    <div className="font-bold text-foreground" dir="ltr">050-000-0000</div>
                  </div>
                </a>

                <a href="mailto:info@naor-adir.co.il" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">אימייל</div>
                    <div className="font-bold text-foreground" dir="ltr">info@naor-adir.co.il</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">כתובת</div>
                    <div className="font-bold text-foreground">אזור התעשייה, ישראל</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">שעות פעילות</div>
                    <div className="font-bold text-foreground">א׳-ה׳ 8:00-17:00 | שירות חירום 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <Card className="border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground">השאירו פרטים</h3>
              <p className="mt-1 text-sm text-muted-foreground">נחזור אליכם בהקדם האפשרי</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">שם מלא *</Label>
                  <Input
                    id="name"
                    aria-required="true"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="ישראל ישראלי"
                    maxLength={100}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      aria-required="true"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="050-0000000"
                      maxLength={30}
                      required
                      className="mt-1.5"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">אימייל *</Label>
                    <Input
                      id="email"
                      type="email"
                      aria-required="true"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      maxLength={255}
                      required
                      className="mt-1.5"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">הודעה *</Label>
                  <Textarea
                    id="message"
                    aria-required="true"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="ספרו לנו במה אנחנו יכולים לעזור..."
                    maxLength={2000}
                    required
                    rows={5}
                    className="mt-1.5 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  size="lg"
                  className="w-full bg-gradient-accent shadow-glow hover:opacity-90"
                >
                  <Send className="ml-1 h-4 w-4" />
                  {loading ? "שולח..." : "שלח פנייה"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;

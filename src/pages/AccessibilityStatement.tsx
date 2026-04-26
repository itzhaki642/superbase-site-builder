import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";

export default function AccessibilityStatement() {
  return (
    <PublicLayout>
      <section className="border-b border-border bg-gradient-dark py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">נגישות</div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">הצהרת נגישות</h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            נאור אדיר בע״מ פועלת להנגשת האתר לכלל הציבור, לרבות אנשים עם מוגבלות, בהתאם לעקרונות תקן ישראלי 5568 המבוסס על WCAG 2.1 ברמה AA.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container max-w-4xl space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-extrabold text-foreground">התאמות שבוצעו באתר</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>מבנה כותרות וסמנטיקה המיועדים לסיוע בניווט ובקריאה.</li>
              <li>אפשרות ניווט באמצעות מקלדת ופוקוס חזותי ברור.</li>
              <li>קישור דילוג לתוכן המרכזי בתחילת העמוד.</li>
              <li>טקסטים חלופיים לתמונות ותוויות שדות בטפסים.</li>
              <li>תפריט נגישות הכולל הגדלת טקסט, ניגודיות גבוהה, הדגשת קישורים ועצירת אנימציות.</li>
              <li>התאמה למסכים ניידים ולשימוש בהגדלת תצוגה בדפדפן.</li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-extrabold text-foreground">שימוש בתפריט הנגישות</h2>
            <p className="leading-relaxed text-muted-foreground">
              בכל עמוד באתר מופיע כפתור נגישות צף. לחיצה עליו מאפשרת להגדיל את הכתב, להפעיל ניגודיות גבוהה, להדגיש קישורים, לצמצם תנועה באתר ולאפס את ההגדרות.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-extrabold text-foreground">חריגים ופניות בנושא נגישות</h2>
            <p className="leading-relaxed text-muted-foreground">
              אנו ממשיכים לשפר את נגישות האתר. אם נתקלתם בקושי בגלישה, בתוכן שאינו נגיש או בבקשה להתאמה פרטנית, נשמח שתעדכנו אותנו ונפעל לטפל בכך בהקדם האפשרי.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="tel:050-000-0000" className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-card-foreground transition-colors hover:border-primary">
                <Phone className="h-5 w-5 text-primary" />
                <span dir="ltr">050-000-0000</span>
              </a>
              <a href="mailto:info@naor-adir.co.il" className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-card-foreground transition-colors hover:border-primary">
                <Mail className="h-5 w-5 text-primary" />
                <span dir="ltr">info@naor-adir.co.il</span>
              </a>
            </div>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-extrabold text-foreground">פרטי ההצהרה</h2>
            <p className="leading-relaxed text-muted-foreground">
              הצהרה זו עודכנה לאחרונה בתאריך {new Date().toLocaleDateString("he-IL")}. מומלץ לעדכן את פרטי רכז הנגישות, מספר הטלפון והאימייל בהתאם לפרטי החברה הרשמיים.
            </p>
            <Link to="/about#contact" className="inline-flex font-semibold text-primary hover:text-primary-dark">
              מעבר לטופס יצירת קשר
            </Link>
          </article>
        </div>
      </section>
    </PublicLayout>
  );
}
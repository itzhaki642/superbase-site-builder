import { useEffect, useState } from "react";
import { Eye, Link as LinkIcon, Pause, RotateCcw, Type, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FontSize = "normal" | "large" | "larger";

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    document.documentElement.classList.toggle("a11y-high-contrast", highContrast);
    document.documentElement.classList.toggle("a11y-highlight-links", highlightLinks);
    document.documentElement.classList.toggle("a11y-reduce-motion", reduceMotion);
    document.documentElement.dataset.a11yFontSize = fontSize;
  }, [highContrast, highlightLinks, reduceMotion, fontSize]);

  const reset = () => {
    setHighContrast(false);
    setHighlightLinks(false);
    setReduceMotion(false);
    setFontSize("normal");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[90] print:hidden">
      {open && (
        <section
          className="mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg"
          aria-label="אפשרויות נגישות"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-bold">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="סגירת תפריט נגישות"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 grid gap-2">
            <WidgetButton active={fontSize !== "normal"} onClick={() => setFontSize(fontSize === "normal" ? "large" : fontSize === "large" ? "larger" : "normal")}>
              <Type className="h-4 w-4" />
              {fontSize === "normal" ? "הגדלת כתב" : fontSize === "large" ? "כתב גדול יותר" : "כתב רגיל"}
            </WidgetButton>
            <WidgetButton active={highContrast} onClick={() => setHighContrast((value) => !value)}>
              <Eye className="h-4 w-4" />
              ניגודיות גבוהה
            </WidgetButton>
            <WidgetButton active={highlightLinks} onClick={() => setHighlightLinks((value) => !value)}>
              <LinkIcon className="h-4 w-4" />
              הדגשת קישורים
            </WidgetButton>
            <WidgetButton active={reduceMotion} onClick={() => setReduceMotion((value) => !value)}>
              <Pause className="h-4 w-4" />
              עצירת אנימציות
            </WidgetButton>
            <WidgetButton onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              איפוס הגדרות
            </WidgetButton>
          </div>
        </section>
      )}

      <Button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
        aria-label={open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות"}
        aria-expanded={open}
      >
        <Eye className="h-6 w-6" />
      </Button>
    </div>
  );
}

function WidgetButton({ active, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "flex min-h-11 w-full items-center justify-start gap-3 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10",
        active && "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        className,
      )}
      aria-pressed={active}
      {...props}
    />
  );
}
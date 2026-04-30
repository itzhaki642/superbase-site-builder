import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Snowflake, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/admin");
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Clean invisible/whitespace chars that often come from paste
    const cleanEmail = email.replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "").trim().toLowerCase();
    const cleanPassword = password.replace(/[\u200B-\u200D\uFEFF]/g, "");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: cleanPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
          data: { full_name: fullName },
        },
      });
      setLoading(false);
      if (error) {
        toast({ title: "שגיאה ברישום", description: error.message, variant: "destructive" });
        return;
      }
      toast({
        title: "החשבון נוצר!",
        description: "כדי לקבל הרשאות מנהל, פנו למנהל קיים שיעניק לך הרשאה.",
      });
      navigate("/admin");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password: cleanPassword });
      setLoading(false);
      if (error) {
        toast({ title: "שגיאה בהתחברות", description: error.message, variant: "destructive" });
        return;
      }
      navigate("/admin");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-dark p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-6 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-accent shadow-glow">
            <Snowflake className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="text-white">
            <div className="text-xl font-extrabold">נאור אדיר</div>
            <div className="text-xs uppercase tracking-widest opacity-70">Admin Panel</div>
          </div>
        </Link>

        <Card className="border-white/10 bg-card p-6 md:p-8">
          <h1 className="text-2xl font-extrabold text-foreground">
            {mode === "signin" ? "כניסת מנהלים" : "יצירת חשבון מנהל"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin"
              ? "הזינו את פרטי הכניסה שלכם"
              : "צרו חשבון חדש - הרשאות מנהל יוענקו על ידי מנהל קיים"}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="fullName">שם מלא</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-1.5"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">אימייל</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1.5"
                dir="ltr"
              />
            </div>

            <div>
              <Label htmlFor="password">סיסמה</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="mt-1.5"
                dir="ltr"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-gradient-accent shadow-glow">
              <LogIn className="ml-1 h-4 w-4" />
              {loading ? "טוען..." : mode === "signin" ? "התחבר" : "צור חשבון"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary hover:underline"
            >
              {mode === "signin" ? "אין לי חשבון - הרשמה" : "יש לי חשבון - התחברות"}
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-xs text-muted-foreground hover:text-primary">
              ← חזרה לאתר
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;

import { useEffect, useState } from "react";
import { Mail, Phone, Trash2, CheckCircle2, Circle } from "lucide-react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  is_handled: boolean;
  created_at: string;
}

const AdminMessages = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "new" | "handled">("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    if (data) setItems(data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const toggleHandled = async (m: Message) => {
    const { error } = await supabase.from("contact_messages").update({ is_handled: !m.is_handled }).eq("id", m.id);
    if (error) toast({ title: "שגיאה", variant: "destructive" });
    else load();
  };

  const remove = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", deleteId);
    if (error) toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    else { toast({ title: "הפנייה נמחקה" }); load(); }
    setDeleteId(null);
  };

  const filtered = items.filter((m) => {
    if (filter === "new") return !m.is_handled;
    if (filter === "handled") return m.is_handled;
    return true;
  });

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">פניות לקוחות</h1>
        <p className="mt-1 text-sm text-muted-foreground">פניות שהתקבלו דרך טופס יצירת קשר באתר</p>
      </div>

      <div className="mt-6 flex gap-2">
        {[
          { v: "all" as const, label: `הכל (${items.length})` },
          { v: "new" as const, label: `חדשות (${items.filter((m) => !m.is_handled).length})` },
          { v: "handled" as const, label: `טופלו (${items.filter((m) => m.is_handled).length})` },
        ].map((opt) => (
          <Button
            key={opt.v}
            variant={filter === opt.v ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(opt.v)}
            className={filter === opt.v ? "bg-gradient-accent" : ""}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {loading ? (
        <div className="mt-6 p-8 text-center text-muted-foreground">טוען...</div>
      ) : filtered.length === 0 ? (
        <Card className="mt-6 p-12 text-center text-muted-foreground">אין פניות להצגה.</Card>
      ) : (
        <div className="mt-6 space-y-4">
          {filtered.map((m) => (
            <Card key={m.id} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    {m.is_handled ? (
                      <Badge variant="secondary"><CheckCircle2 className="ml-1 h-3 w-3" /> טופלה</Badge>
                    ) : (
                      <Badge className="bg-primary"><Circle className="ml-1 h-3 w-3" /> חדשה</Badge>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <a href={`tel:${m.phone}`} className="flex items-center gap-1 hover:text-primary" dir="ltr">
                      <Phone className="h-3.5 w-3.5" /> {m.phone}
                    </a>
                    <a href={`mailto:${m.email}`} className="flex items-center gap-1 hover:text-primary" dir="ltr">
                      <Mail className="h-3.5 w-3.5" /> {m.email}
                    </a>
                    <span>{new Date(m.created_at).toLocaleString("he-IL")}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => toggleHandled(m)}>
                    {m.is_handled ? "סמן כחדשה" : "סמן כטופלה"}
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => setDeleteId(m.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 whitespace-pre-line rounded-md bg-muted/50 p-4 text-sm">
                {m.message}
              </div>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>מחיקת פנייה</AlertDialogTitle>
            <AlertDialogDescription>פעולה זו אינה ניתנת לביטול.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>ביטול</AlertDialogCancel>
            <AlertDialogAction onClick={remove} className="bg-destructive">מחק</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default AdminMessages;

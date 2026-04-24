import { useEffect, useState } from "react";
import { UserPlus, ShieldCheck, Trash2 } from "lucide-react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface AdminRow {
  user_id: string;
  email: string | null;
  full_name: string | null;
  role_id: string;
}

const AdminAdmins = () => {
  const { toast } = useToast();
  const { user: currentUser } = useAuth();
  const [admins, setAdmins] = useState<AdminRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [adding, setAdding] = useState(false);
  const [removeRoleId, setRemoveRoleId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data: roles } = await supabase
      .from("user_roles")
      .select("id, user_id")
      .eq("role", "admin");

    if (!roles?.length) {
      setAdmins([]);
      setLoading(false);
      return;
    }

    const userIds = roles.map((r) => r.user_id);
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, email, full_name")
      .in("id", userIds);

    const merged: AdminRow[] = roles.map((r) => {
      const p = profiles?.find((pp) => pp.id === r.user_id);
      return {
        user_id: r.user_id,
        email: p?.email ?? null,
        full_name: p?.full_name ?? null,
        role_id: r.id,
      };
    });
    setAdmins(merged);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const addAdmin = async () => {
    if (!email.trim()) return;
    setAdding(true);
    // Find user by email in profiles
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email.trim())
      .maybeSingle();

    if (!profile) {
      setAdding(false);
      toast({
        title: "המשתמש לא נמצא",
        description: "המשתמש צריך להירשם לאתר תחילה דרך עמוד ההתחברות.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("user_roles").insert({ user_id: profile.id, role: "admin" });
    setAdding(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "המשתמש כבר מנהל" });
      } else {
        toast({ title: "שגיאה", description: error.message, variant: "destructive" });
      }
      return;
    }
    toast({ title: "המנהל נוסף בהצלחה" });
    setEmail("");
    setOpen(false);
    load();
  };

  const removeAdmin = async () => {
    if (!removeRoleId) return;
    const { error } = await supabase.from("user_roles").delete().eq("id", removeRoleId);
    if (error) toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    else { toast({ title: "ההרשאה הוסרה" }); load(); }
    setRemoveRoleId(null);
  };

  return (
    <AdminLayout>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold md:text-3xl">מנהלים</h1>
          <p className="mt-1 text-sm text-muted-foreground">ניהול הרשאות מנהל באתר</p>
        </div>
        <Button onClick={() => setOpen(true)} className="bg-gradient-accent">
          <UserPlus className="ml-1 h-4 w-4" /> הוסף מנהל
        </Button>
      </div>

      <Card className="mt-6">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">טוען...</div>
        ) : admins.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">אין מנהלים מוגדרים.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">שם</TableHead>
                <TableHead className="text-right">אימייל</TableHead>
                <TableHead className="text-right">סטטוס</TableHead>
                <TableHead className="text-right">פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins.map((a) => (
                <TableRow key={a.role_id}>
                  <TableCell className="font-medium">{a.full_name ?? "—"}</TableCell>
                  <TableCell className="text-muted-foreground" dir="ltr">{a.email ?? "—"}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      <ShieldCheck className="h-3 w-3" /> Admin
                    </span>
                  </TableCell>
                  <TableCell>
                    {a.user_id === currentUser?.id ? (
                      <span className="text-xs text-muted-foreground">(זה אתה)</span>
                    ) : (
                      <Button size="icon" variant="ghost" onClick={() => setRemoveRoleId(a.role_id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>הוספת מנהל</DialogTitle>
            <DialogDescription>
              המשתמש חייב קודם להירשם לאתר דרך עמוד ההתחברות. לאחר מכן הזינו כאן את האימייל שלו.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label>אימייל</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              dir="ltr"
              className="mt-1.5"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>ביטול</Button>
            <Button onClick={addAdmin} disabled={adding} className="bg-gradient-accent">
              {adding ? "מוסיף..." : "הוסף מנהל"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!removeRoleId} onOpenChange={() => setRemoveRoleId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>הסרת הרשאת מנהל</AlertDialogTitle>
            <AlertDialogDescription>המשתמש לא יוכל יותר לגשת לפאנל הניהול.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>ביטול</AlertDialogCancel>
            <AlertDialogAction onClick={removeAdmin} className="bg-destructive">הסר</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default AdminAdmins;

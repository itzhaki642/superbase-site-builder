import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Category {
  id: string;
  name: string;
  description: string | null;
  display_order: number;
}

const AdminCategories = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", description: "", display_order: 0 });

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("categories").select("*").order("display_order");
    if (data) setItems(data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ name: "", description: "", display_order: items.length });
    setOpen(true);
  };

  const openEdit = (c: Category) => {
    setEditing(c);
    setForm({ name: c.name, description: c.description ?? "", display_order: c.display_order });
    setOpen(true);
  };

  const save = async () => {
    if (!form.name.trim()) {
      toast({ title: "חסר שם", variant: "destructive" });
      return;
    }
    const payload = {
      name: form.name.trim(),
      description: form.description.trim() || null,
      display_order: form.display_order,
    };
    const { error } = editing
      ? await supabase.from("categories").update(payload).eq("id", editing.id)
      : await supabase.from("categories").insert(payload);

    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: editing ? "הקטגוריה עודכנה" : "הקטגוריה נוספה" });
    setOpen(false);
    load();
  };

  const remove = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("categories").delete().eq("id", deleteId);
    if (error) {
      toast({ title: "שגיאה במחיקה", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "הקטגוריה נמחקה" });
      load();
    }
    setDeleteId(null);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold md:text-3xl">קטגוריות</h1>
          <p className="mt-1 text-sm text-muted-foreground">ניהול קטגוריות המוצרים</p>
        </div>
        <Button onClick={openNew} className="bg-gradient-accent">
          <Plus className="ml-1 h-4 w-4" /> קטגוריה חדשה
        </Button>
      </div>

      <Card className="mt-6">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">טוען...</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            אין עדיין קטגוריות. לחצו על "קטגוריה חדשה" כדי להתחיל.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">סדר</TableHead>
                <TableHead className="text-right">שם</TableHead>
                <TableHead className="text-right">תיאור</TableHead>
                <TableHead className="text-right">פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-mono text-xs">{c.display_order}</TableCell>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-muted-foreground">{c.description ?? "—"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => openEdit(c)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => setDeleteId(c.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      {/* Edit/Create Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "עריכת קטגוריה" : "קטגוריה חדשה"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>שם *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
            </div>
            <div>
              <Label>תיאור</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1.5" />
            </div>
            <div>
              <Label>סדר תצוגה</Label>
              <Input
                type="number"
                value={form.display_order}
                onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })}
                className="mt-1.5"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>ביטול</Button>
            <Button onClick={save} className="bg-gradient-accent">שמור</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>מחיקת קטגוריה</AlertDialogTitle>
            <AlertDialogDescription>
              פעולה זו תמחק את הקטגוריה לצמיתות. מוצרים המשויכים יישארו ללא קטגוריה.
            </AlertDialogDescription>
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

export default AdminCategories;

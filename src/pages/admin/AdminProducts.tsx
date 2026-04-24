import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Upload, X, Search, Package } from "lucide-react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Category { id: string; name: string; }
interface Product {
  id: string;
  name: string;
  category_id: string | null;
  short_description: string | null;
  full_description: string | null;
  specifications: string | null;
  images: string[];
  is_active: boolean;
}

const emptyForm = {
  name: "",
  category_id: "",
  short_description: "",
  full_description: "",
  specifications: "",
  images: [] as string[],
  is_active: true,
};

const AdminProducts = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    const [p, c] = await Promise.all([
      supabase.from("products").select("*").order("created_at", { ascending: false }),
      supabase.from("categories").select("id, name").order("display_order"),
    ]);
    if (p.data) setProducts(p.data);
    if (c.data) setCategories(c.data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setOpen(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({
      name: p.name,
      category_id: p.category_id ?? "",
      short_description: p.short_description ?? "",
      full_description: p.full_description ?? "",
      specifications: p.specifications ?? "",
      images: p.images ?? [],
      is_active: p.is_active,
    });
    setOpen(true);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    const uploadedUrls: string[] = [];
    for (const file of files) {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("product-images").upload(path, file);
      if (error) {
        toast({ title: "שגיאה בהעלאה", description: error.message, variant: "destructive" });
        continue;
      }
      const { data: urlData } = supabase.storage.from("product-images").getPublicUrl(path);
      uploadedUrls.push(urlData.publicUrl);
    }
    setForm((f) => ({ ...f, images: [...f.images, ...uploadedUrls] }));
    setUploading(false);
    e.target.value = "";
  };

  const removeImage = (idx: number) => {
    setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
  };

  const save = async () => {
    if (!form.name.trim()) {
      toast({ title: "חסר שם מוצר", variant: "destructive" });
      return;
    }
    const payload = {
      name: form.name.trim(),
      category_id: form.category_id || null,
      short_description: form.short_description.trim() || null,
      full_description: form.full_description.trim() || null,
      specifications: form.specifications.trim() || null,
      images: form.images,
      is_active: form.is_active,
    };
    const { error } = editing
      ? await supabase.from("products").update(payload).eq("id", editing.id)
      : await supabase.from("products").insert(payload);

    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: editing ? "המוצר עודכן" : "המוצר נוסף" });
    setOpen(false);
    load();
  };

  const remove = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("products").delete().eq("id", deleteId);
    if (error) toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    else { toast({ title: "המוצר נמחק" }); load(); }
    setDeleteId(null);
  };

  const filtered = products.filter((p) =>
    !search || p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const catName = (id: string | null) => categories.find((c) => c.id === id)?.name ?? "—";

  return (
    <AdminLayout>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold md:text-3xl">מוצרים</h1>
          <p className="mt-1 text-sm text-muted-foreground">ניהול קטלוג המוצרים</p>
        </div>
        <Button onClick={openNew} className="bg-gradient-accent">
          <Plus className="ml-1 h-4 w-4" /> מוצר חדש
        </Button>
      </div>

      <div className="mt-6 relative max-w-md">
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="חיפוש מוצר..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10"
        />
      </div>

      {loading ? (
        <div className="mt-6 p-12 text-center text-muted-foreground">טוען...</div>
      ) : filtered.length === 0 ? (
        <Card className="mt-6 p-12 text-center text-muted-foreground">
          {products.length === 0 ? "אין עדיין מוצרים. הוסיפו מוצר חדש כדי להתחיל." : "לא נמצאו תוצאות."}
        </Card>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-muted">
                {p.images?.[0] ? (
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Package className="h-12 w-12 text-muted-foreground/40" />
                  </div>
                )}
                {!p.is_active && (
                  <div className="absolute right-2 top-2 rounded bg-destructive px-2 py-1 text-xs text-destructive-foreground">
                    מוסתר
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-xs text-muted-foreground">{catName(p.category_id)}</div>
                <h3 className="mt-1 font-bold">{p.name}</h3>
                {p.short_description && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.short_description}</p>
                )}
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => openEdit(p)}>
                    <Pencil className="ml-1 h-3.5 w-3.5" /> ערוך
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => setDeleteId(p.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Form Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editing ? "עריכת מוצר" : "מוצר חדש"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>שם המוצר *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
            </div>

            <div>
              <Label>קטגוריה</Label>
              <Select value={form.category_id || "none"} onValueChange={(v) => setForm({ ...form, category_id: v === "none" ? "" : v })}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="בחר קטגוריה" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">ללא קטגוריה</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>תיאור קצר</Label>
              <Textarea value={form.short_description} onChange={(e) => setForm({ ...form, short_description: e.target.value })} className="mt-1.5" rows={2} />
            </div>

            <div>
              <Label>תיאור מלא</Label>
              <Textarea value={form.full_description} onChange={(e) => setForm({ ...form, full_description: e.target.value })} className="mt-1.5" rows={4} />
            </div>

            <div>
              <Label>מפרט טכני</Label>
              <Textarea value={form.specifications} onChange={(e) => setForm({ ...form, specifications: e.target.value })} className="mt-1.5" rows={4} placeholder="ניתן להזין מפרט בשורות נפרדות" />
            </div>

            <div>
              <Label>תמונות</Label>
              <div className="mt-1.5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {form.images.map((url, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-md border">
                    <img src={url} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Upload className="h-5 w-5" />
                  <span className="text-xs">{uploading ? "טוען..." : "העלה"}</span>
                  <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" disabled={uploading} />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-md border p-3">
              <Label htmlFor="active">מוצר פעיל (מוצג באתר)</Label>
              <Switch id="active" checked={form.is_active} onCheckedChange={(v) => setForm({ ...form, is_active: v })} />
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
            <AlertDialogTitle>מחיקת מוצר</AlertDialogTitle>
            <AlertDialogDescription>פעולה זו תמחק את המוצר לצמיתות.</AlertDialogDescription>
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

export default AdminProducts;

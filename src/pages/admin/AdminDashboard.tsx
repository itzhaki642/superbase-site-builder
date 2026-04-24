import { useEffect, useState } from "react";
import { Package, Tags, MessageSquare, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ products: 0, categories: 0, messages: 0, newMessages: 0 });

  useEffect(() => {
    const load = async () => {
      const [p, c, m, nm] = await Promise.all([
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("categories").select("id", { count: "exact", head: true }),
        supabase.from("contact_messages").select("id", { count: "exact", head: true }),
        supabase.from("contact_messages").select("id", { count: "exact", head: true }).eq("is_handled", false),
      ]);
      setStats({
        products: p.count ?? 0,
        categories: c.count ?? 0,
        messages: m.count ?? 0,
        newMessages: nm.count ?? 0,
      });
    };
    load();
  }, []);

  const cards = [
    { label: "מוצרים", value: stats.products, icon: Package, color: "text-primary bg-primary/10" },
    { label: "קטגוריות", value: stats.categories, icon: Tags, color: "text-purple-600 bg-purple-100" },
    { label: "סך פניות", value: stats.messages, icon: MessageSquare, color: "text-amber-600 bg-amber-100" },
    { label: "פניות חדשות", value: stats.newMessages, icon: TrendingUp, color: "text-green-600 bg-green-100" },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-extrabold text-foreground md:text-3xl">דשבורד</h1>
        <p className="mt-1 text-sm text-muted-foreground">סקירה כללית של פעילות האתר</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Card key={c.label} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-muted-foreground">{c.label}</div>
                <div className="mt-2 text-3xl font-extrabold text-foreground">{c.value}</div>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-md ${c.color}`}>
                <c.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6">
        <h2 className="text-lg font-bold text-foreground">ברוכים הבאים לפאנל הניהול</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          מכאן אפשר לנהל את כל תוכן האתר - מוצרים, קטגוריות, ולעקוב אחר פניות לקוחות.
          לכל פעולה לחצו על אחת הלשוניות בתפריט הצד.
        </p>
      </Card>
    </AdminLayout>
  );
};

export default AdminDashboard;

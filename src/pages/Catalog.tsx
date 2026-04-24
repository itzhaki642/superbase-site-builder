import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Package, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  display_order: number;
}

interface Product {
  id: string;
  name: string;
  short_description: string | null;
  images: string[];
  category_id: string | null;
}

const Catalog = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const [catRes, prodRes] = await Promise.all([
        supabase.from("categories").select("*").order("display_order"),
        supabase.from("products").select("*").eq("is_active", true).order("created_at", { ascending: false }),
      ]);
      if (catRes.data) setCategories(catRes.data);
      if (prodRes.data) setProducts(prodRes.data);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = products.filter((p) => {
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.short_description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchCat = !activeCategory || p.category_id === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <PublicLayout>
      {/* Header */}
      <section className="border-b border-border bg-gradient-dark py-16 md:py-20">
        <div className="container">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">קטלוג מוצרים</div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">דלתות קירור תעשייתיות</h1>
          <p className="mt-3 max-w-2xl text-base text-white/80 md:text-lg">
            מגוון רחב של דלתות קירור איכותיות מהיצרנים המובילים בעולם
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 py-4 backdrop-blur-md md:top-20">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="חיפוש לפי שם מוצר או תיאור..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                !activeCategory
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50",
              )}
            >
              הכל
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-background py-12 md:py-16">
        <div className="container">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-80 animate-pulse rounded-lg bg-muted" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Package className="h-16 w-16 text-muted-foreground/50" />
              <h3 className="mt-4 text-xl font-bold text-foreground">לא נמצאו מוצרים</h3>
              <p className="mt-2 text-muted-foreground">
                {products.length === 0
                  ? "המנהלים עדיין לא הוסיפו מוצרים. חזרו בקרוב!"
                  : "נסו לשנות את החיפוש או הסינון"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Link key={p.id} to={`/product/${p.id}`}>
                  <Card
                    className="group h-full overflow-hidden border-border/60 bg-card hover-lift"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      {p.images?.[0] ? (
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Package className="h-16 w-16 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {p.name}
                      </h3>
                      {p.short_description && (
                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.short_description}</p>
                      )}
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        לפרטים נוספים
                        <ChevronLeft className="h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Catalog;

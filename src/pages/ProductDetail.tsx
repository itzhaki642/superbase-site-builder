import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Phone, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  short_description: string | null;
  full_description: string | null;
  specifications: string | null;
  images: string[];
  category_id: string | null;
}

interface Category {
  id: string;
  name: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      const { data } = await supabase.from("products").select("*").eq("id", id).maybeSingle();
      if (data) {
        setProduct(data);
        if (data.category_id) {
          const { data: cat } = await supabase
            .from("categories")
            .select("id, name")
            .eq("id", data.category_id)
            .maybeSingle();
          if (cat) setCategory(cat);
        }
      }
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <PublicLayout>
        <SEO title="טוען מוצר | נאור אדיר בע״מ" description="טוען פרטי מוצר מקטלוג נאור אדיר בע״מ." path={`/product/${id ?? ""}`} noindex />
        <div className="container py-20">
          <div className="h-96 animate-pulse rounded-lg bg-muted" />
        </div>
      </PublicLayout>
    );
  }

  if (!product) {
    return (
      <PublicLayout>
        <SEO title="המוצר לא נמצא | נאור אדיר בע״מ" description="המוצר שחיפשתם לא נמצא בקטלוג." path={`/product/${id ?? ""}`} noindex />
        <div className="container py-20 text-center">
          <Package className="mx-auto h-16 w-16 text-muted-foreground/50" />
          <h2 className="mt-4 text-2xl font-bold">המוצר לא נמצא</h2>
          <Button asChild className="mt-6">
            <Link to="/catalog">חזרה לקטלוג</Link>
          </Button>
        </div>
      </PublicLayout>
    );
  }

  const images = product.images?.length ? product.images : [];

  return (
    <PublicLayout>
      <SEO
        title={`${product.name} | נאור אדיר בע״מ`}
        description={product.short_description || "פרטי מוצר מקטלוג נאור אדיר בע״מ לדלתות קירור, חלקי חילוף ופתרונות לתעשייה."}
        path={`/product/${product.id}`}
        type="product"
        image={images[0]}
      />
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">בית</Link>
          <ChevronRight className="h-4 w-4 rotate-180" />
          <Link to="/catalog" className="hover:text-primary">קטלוג</Link>
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
              {images[activeImage] ? (
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Package className="h-24 w-24 text-muted-foreground/40" />
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                      i === activeImage ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {category && (
              <div className="text-xs font-bold uppercase tracking-widest text-primary">
                {category.name}
              </div>
            )}
            <h1 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">{product.name}</h1>

            {product.short_description && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {product.short_description}
              </p>
            )}

            {product.full_description && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-foreground">תיאור מפורט</h2>
                <div className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground/90">
                  {product.full_description}
                </div>
              </div>
            )}

            {product.specifications && (
              <div className="mt-8 rounded-lg border border-border bg-muted/50 p-5">
                <h2 className="text-lg font-bold text-foreground">מפרט טכני</h2>
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/80">
                  {product.specifications}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-accent shadow-glow hover:opacity-90">
                <Link to={`/about#contact?product=${encodeURIComponent(product.name)}`}>
                  <Phone className="ml-1 h-4 w-4" />
                  צור קשר לפרטים נוספים
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/catalog">חזרה לקטלוג</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ProductDetail;

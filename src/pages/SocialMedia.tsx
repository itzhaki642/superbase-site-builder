import { useEffect } from "react";
import { ExternalLink, Music2, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { TIKTOK_URL, YOUTUBE_URL } from "@/lib/contact";

const youtubeVideos = [
  { id: "CoGui_rkZE4", title: "סרטון עבודות נאור אדיר בע״מ" },
  { id: "HerB3-Oa_dk", title: "התקנות ושירות בשטח" },
  { id: "nAJPFY1AhmM", title: "פתרונות קירור ודלתות לתעשייה" },
  { id: "-kj9ITRYP4M", title: "עבודות רמפות ודלתות" },
];

const SocialMedia = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://www.tiktok.com/embed.js"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <PublicLayout>
      <SEO
        title="אנחנו ברשתות החברתיות | נאור אדיר"
        description="צפו בסרטונים של נאור אדיר בע״מ מתוך TikTok ו-YouTube: עבודות, התקנות, שירות ופתרונות קירור לתעשייה."
        path="/social"
      />

      <section className="border-b border-border bg-gradient-dark py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">נאור אדיר ברשת</div>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              אנחנו ברשתות החברתיות
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              כאן אפשר לצפות בסרטונים מהשטח, התקנות, עבודות שירות ופתרונות קירור — ישירות מהעמודים שלנו ב־TikTok וב־YouTube.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-gradient-accent shadow-glow hover:opacity-90">
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                  <Music2 className="ml-2 h-4 w-4" />
                  TikTok
                  <ExternalLink className="mr-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                  <Youtube className="ml-2 h-4 w-4" />
                  YouTube
                  <ExternalLink className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">TikTok</div>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground md:text-4xl">סרטונים מהשטח</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card p-3 shadow-sm md:p-6">
            <blockquote
              className="tiktok-embed mx-auto"
              cite="https://www.tiktok.com/@nati.levi37"
              data-unique-id="nati.levi37"
              data-embed-type="creator"
              style={{ maxWidth: "780px", minWidth: "288px" }}
            >
              <section>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                  @nati.levi37
                </a>
              </section>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">YouTube</div>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground md:text-4xl">סרטוני YouTube</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <div className="aspect-video bg-muted">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default SocialMedia;
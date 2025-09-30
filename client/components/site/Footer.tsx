import { cn } from "@/lib/utils";
import Logo from "@/components/site/Logo";

const cols = [
  {
    title: "Sektörel Çözümler",
    links: [
      { label: "FMCG", href: "#" },
      { label: "E-Ticaret", href: "#" },
      { label: "Kozmetik ve Güzellik", href: "#" },
      { label: "Tekstil ve Moda", href: "#" },
      { label: "Gıda", href: "#" },
      { label: "Otomotiv", href: "#" },
      { label: "Bankacılık ve Finans", href: "#" },
      { label: "Perakende", href: "#" },
      { label: "Tüketici Ürünleri", href: "#" },
      { label: "Medya ve Telekomünikasyon", href: "#" },
      { label: "Mobil Uygulama", href: "#" },
      { label: "Tatil ve Seyahat", href: "#" },
    ],
  },
  {
    title: "Influencer Servisleri",
    links: [
      { label: "Influencerlar için Mobil Uygulama", href: "#" },
      { label: "Clique Topluluğunu Keşfedin", href: "#" },
    ],
  },
  {
    title: "Marka Çözümleri",
    links: [
      { label: "Platform", href: "#" },
      { label: "Fiyatlandırma", href: "#fiyat" },
      { label: "Özellikler", href: "#ozellikler" },
      { label: "İş Birlikleri", href: "#is-birlikleri" },
    ],
  },
  {
    title: "Şirketimiz",
    links: [
      { label: "Hakkımızda", href: "/about" },
      { label: "Gizlilik Politikası", href: "/privacy" },
      { label: "Kullanım Koşulları", href: "/terms" },
      { label: "Kariyer", href: "/careers" },
    ],
  },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t bg-gradient-to-b from-background to-secondary/30",
        className,
      )}
    >
      <div className="container py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 font-extrabold text-2xl"
          >
            <Logo />
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Instagram ve TikTok'ta zahmetsizce viral olun. Doğru influencerlarla
            gerçek büyüme sağlayın; kampanyalarınızı uçtan uca yönetin.
          </p>

          <div className="mt-4 text-sm text-muted-foreground">
            <div>
              <strong>Web:</strong>{" "}
              <a href="https://sociads.com.tr" className="hover:underline">
                sociads.com.tr
              </a>
            </div>
            <div>
              <strong>VKN:</strong> 089 078 4772
            </div>
            <div>
              <strong>Telefon:</strong> 0 850 307 70 61
            </div>
            <div>
              <strong>E-posta:</strong>{" "}
              <a href="mailto:info@sociads.com.tr" className="hover:underline">
                info@sociads.com.tr
              </a>
            </div>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h4 className="font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-sm">
              {c.links.map((l: any) => (
                <li key={l.label}>
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lion Innovate · Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Gizlilik
            </a>
            <a href="#" className="hover:text-foreground">
              Çerezler
            </a>
            <a href="#" className="hover:text-foreground">
              Güvenlik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

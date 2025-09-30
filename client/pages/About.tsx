import React from "react";
import SmartImage from "@/components/ui/SmartImage";
import { ABOUT_IMAGES } from "@/lib/images";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-20 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sociads, markaların Instagram ve TikTok'ta anlamlı büyüme elde
            etmesi için influencer pazarlama çözümleri geliştiren bir ajanstır.
            Veri odaklı yaklaşımlarımız ve yaratıcı ekiplerimizle kampanyaları
            baştan sona yönetiyoruz.
          </p>

          <h3 className="mt-6 font-semibold">Misyonumuz</h3>
          <p className="text-muted-foreground">
            Markalara sürdürülebilir büyüme sağlamak, organik ve dönüşüm odaklı
            içeriklerle bağ kurmalarına yardımcı olmak.
          </p>

          <h3 className="mt-4 font-semibold">Vizyonumuz</h3>
          <p className="text-muted-foreground">
            Bölgesel lider olarak influencer ekosisteminde güvenilir ve
            yenilikçi çözümler sunmak.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold">İletişim</h4>
            <div className="text-sm text-muted-foreground mt-2">
              <div>
                Web:{" "}
                <a className="hover:underline" href="https://sociads.com.tr">
                  sociads.com.tr
                </a>
              </div>
              <div>Telefon: 0 850 307 70 61</div>
              <div>
                E-posta:{" "}
                <a
                  href="mailto:info@sociads.com.tr"
                  className="hover:underline"
                >
                  info@sociads.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SmartImage
            src={`https://images.unsplash.com/${ABOUT_IMAGES.hero}?auto=format&fit=crop&w=1200&h=800&q=80&ixlib=rb-4.0.3`}
            alt="office"
            className="w-full rounded-lg object-cover shadow-md"
            fallbackId={ABOUT_IMAGES.team[0]}
          />
        </div>
      </section>

      <section className="py-12 container">
        <h2 className="text-2xl font-semibold">Değerlerimiz</h2>
        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
          <li>Şeffaflık ve hesap verebilirlik</li>
          <li>Yaratıcılık ve veri odaklı kararlar</li>
          <li>Müşteri odaklı iş süreçleri</li>
        </ul>
      </section>

      <section className="py-12 container">
        <h2 className="text-2xl font-semibold">Ekibimiz</h2>
        <p className="text-muted-foreground mt-2">
          Kreatif, performans ve teknoloji ekiplerimizle kampanyalara uçtan uca
          destek veriyoruz.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ABOUT_IMAGES.team.map((id, i) => (
            <div key={id} className="rounded-2xl border p-4 bg-card">
              <SmartImage
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=600&q=80&ixlib=rb-4.0.3`}
                alt={`team-${i}`}
                className="w-full h-48 object-cover rounded-md"
                fallbackId={ABOUT_IMAGES.team[0]}
              />
              <h3 className="mt-3 font-semibold">
                {["Merve Yılmaz", "Can Demir", "Elif Kaya"][i] ||
                  `Team ${i + 1}`}
              </h3>
              <div className="text-sm text-muted-foreground">
                {["Head of Creative", "Head of Growth", "Product & Tech"][i] ||
                  "Team"}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Kısa biyografi: Deneyimli pazarlama profesyoneli, kreatif
                kampanya yönetimi ve veri analizinde uzman.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 container">
        <h2 className="text-2xl font-semibold">Son 1.4 Yıl - Yol Haritası</h2>
        <p className="text-muted-foreground mt-2">
          Son 16 ay içinde ürün ve hizmetlerimizde yaptığımız ana iyileştirmeler
          ve kilometre taşları.
        </p>
        <ol className="mt-4 space-y-4">
          <li className="p-4 border rounded-lg bg-card">
            <div className="flex justify-between items-start">
              <div>
                <strong>2024 Haziran</strong>
                <div className="text-sm text-muted-foreground">
                  AI Eşleştirme Beta: Yapay zeka tabanlı influencer eşleştirme
                  motorumuz beta aşamasına geçti ve ilk pilot markalarda %30
                  daha iyi hedef uyumu gösterdi.
                </div>
              </div>
              <div className="text-sm font-medium">Beta lansman</div>
            </div>
          </li>

          <li className="p-4 border rounded-lg bg-card">
            <div className="flex justify-between items-start">
              <div>
                <strong>2024 Ekim</strong>
                <div className="text-sm text-muted-foreground">
                  Platform v2: Kullanıcı arayüzü revizyonu, gelişmiş raporlama
                  ve takım işbirliği özellikleri eklendi.
                </div>
              </div>
              <div className="text-sm font-medium">Platform güncellemesi</div>
            </div>
          </li>

          <li className="p-4 border rounded-lg bg-card">
            <div className="flex justify-between items-start">
              <div>
                <strong>2025 Şubat</strong>
                <div className="text-sm text-muted-foreground">
                  Çok kanallı kampanya yönetimi ve otomatik kreatif öneriler
                  pilotu başlatıldı.
                </div>
              </div>
              <div className="text-sm font-medium">Kanal genişleme</div>
            </div>
          </li>

          <li className="p-4 border rounded-lg bg-card">
            <div className="flex justify-between items-start">
              <div>
                <strong>2025 Ağustos</strong>
                <div className="text-sm text-muted-foreground">
                  Kurumsal paket ve güvenlik sertifikaları: SSO, gelişmiş
                  denetim günlükleri ve kurumsal SLA lansmanı.
                </div>
              </div>
              <div className="text-sm font-medium">Kurumsal özellikler</div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}

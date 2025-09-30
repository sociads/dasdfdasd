import React from "react";

type Lang = "tr" | "en" | "de";

const translations: Record<string, Record<Lang, string>> = {
  // Brand
  brand: { tr: "SociAds", en: "SociAds", de: "SociAds" },
  "brand.tagline": { tr: "beyond ads", en: "beyond ads", de: "beyond ads" },

  // Nav
  "nav.sektorel": {
    tr: "Sektörel Çözümler",
    en: "Industry Solutions",
    de: "Branchenlösungen",
  },
  "nav.nasil": {
    tr: "Nasıl Çalışır",
    en: "How it Works",
    de: "Wie es funktioniert",
  },
  "nav.isbirlik": {
    tr: "İş Birlikleri",
    en: "Collaborations",
    de: "Zusammenarbeiten",
  },
  "nav.blog": { tr: "Blog", en: "Blog", de: "Blog" },
  "nav.iletisim": { tr: "İletişim", en: "Contact", de: "Kontakt" },
  "nav.markaGiris": { tr: "Marka Giriş", en: "Brand Login", de: "Markenlogin" },
  "nav.menu": { tr: "Menüyü Aç", en: "Open menu", de: "Menü öffnen" },

  // Hero / CTAs
  "hero.title": {
    tr: "Yapay Zeka Destekli Influencer Pazarlama Platformu",
    en: "AI-powered Influencer Marketing Platform",
    de: "KI-gestützte Influencer-Marketing-Plattform",
  },
  "hero.subtitle": {
    tr: "Markaları doğru influencerlarla buluşturun, kampanya ve pazarlama operasyonlarını tek yerden yönetin.",
    en: "Connect brands with the right influencers and manage campaigns in one place.",
    de: "Vernetzen Sie Marken mit den richtigen Influencern und verwalten Sie Kampagnen an einem Ort.",
  },
  "hero.security": {
    tr: "Kurumsal markalar için güvenli altyapı",
    en: "Enterprise-grade infrastructure for brands",
    de: "Enterprise-taugliche Infrastruktur für Marken",
  },

  "cta.hemenDene": { tr: "Hemen Dene", en: "Try Now", de: "Jetzt testen" },
  "cta.toplanti": {
    tr: "Toplantı Talep Et",
    en: "Request Meeting",
    de: "Meeting anfragen",
  },
  "cta.try.title": {
    tr: "Teamfluencer için Tüm Özellikleri Keşfedin",
    en: "Explore all Teamfluencer features",
    de: "Entdecke alle Teamfluencer-Funktionen",
  },
  "cta.try.desc": {
    tr: "Platformu deneyin, ekibinizle paylaşın ve dakikalar içinde ilk kampanyanızı başlatın.",
    en: "Try the platform, share with your team, and launch your first campaign in minutes.",
    de: "Teste die Plattform, teile sie mit deinem Team und starte deine erste Kampagne in Minuten.",
  },
  "cta.tryNow": { tr: "Şimdi Deneyin", en: "Try Now", de: "Jetzt testen" },
  "cta.freeStart": {
    tr: "Ücretsiz Başlayın",
    en: "Start Free",
    de: "Kostenlos starten",
  },
  "cta.demo": {
    tr: "Canlı Demo İzleyin",
    en: "Watch Live Demo",
    de: "Live-Demo ansehen",
  },

  // Trust / Brands
  "trust.heading": {
    tr: "Güvenen markalar",
    en: "Trusted by",
    de: "Vertrauenswürdige Marken",
  },
  "brands.list": {
    tr: "Apexora|Lumina|Northpeak|Velora|Globex|Harmonia|Kinsta Labs|Vanta|Alphary|Zerion|Nebula|Altura",
    en: "Apexora|Lumina|Northpeak|Velora|Globex|Harmonia|Kinsta Labs|Vanta|Alphary|Zerion|Nebula|Altura",
    de: "Apexora|Lumina|Northpeak|Velora|Globex|Harmonia|Kinsta Labs|Vanta|Alphary|Zerion|Nebula|Altura",
  },

  // How it works
  "how.title": {
    tr: "Nasıl Çalışır",
    en: "How it Works",
    de: "Wie es funktioniert",
  },
  "how.subtitle": {
    tr: "Üç adımda hedef kitlenize ulaşın ve kampanyanızı büyütün.",
    en: "Reach your audience and grow your campaign in three steps.",
    de: "Erreichen Sie Ihre Zielgruppe und skalieren Sie Ihre Kampagne in drei Schritten.",
  },
  "how.step1.title": {
    tr: "Kampanyanı Oluştur",
    en: "Create your campaign",
    de: "Kampagne erstellen",
  },
  "how.step1.desc": {
    tr: "Hedeflerinizi ve KPI’larınızı tanımlayın, bütçenizi belirleyin.",
    en: "Define goals, KPIs and budget.",
    de: "Ziele, KPIs und Budget festlegen.",
  },
  "how.step2.title": {
    tr: "Doğru Influencerları Keşfet",
    en: "Discover the right influencers",
    de: "Die richtigen Influencer finden",
  },
  "how.step2.desc": {
    tr: "Yapay zeka destekli eşleştirme ile en uygun profilleri bulun.",
    en: "Find optimal profiles via AI-powered matching.",
    de: "Mit KI die besten Profile finden.",
  },
  "how.step3.title": {
    tr: "Performansı Anlık Takip Et",
    en: "Track performance in real-time",
    de: "Leistung in Echtzeit verfolgen",
  },
  "how.step3.desc": {
    tr: "Gerçek zamanlı raporlarla sonuçları izleyin ve optimize edin.",
    en: "Monitor and optimize with real-time reports.",
    de: "Ergebnisse mit Echtzeitberichten überwachen und optimieren.",
  },

  // Features
  "features.title": {
    tr: "Tüm özellikleri keşfedin",
    en: "Explore all features",
    de: "Entdecken Sie alle Funktionen",
  },
  "features.kampanya": {
    tr: "Kampanyanızı Oluşturun",
    en: "Create your campaign",
    de: "Erstellen Sie Ihre Kampagne",
  },
  "features.kesfet": {
    tr: "Doğru Influencerları Keşfedin ve İş Birliğine Başlayın",
    en: "Discover the right influencers and start collaborations",
    de: "Die richtigen Influencer entdecken und zusammenarbeiten",
  },
  "features.performans": {
    tr: "Kampanya Performansınızı Anlık Takip Edin",
    en: "Track your campaign performance live",
    de: "Kampagnenleistung live verfolgen",
  },

  // Collaborations / Carousel
  "collabs.title": {
    tr: "İş Birlikleri ve Influencer İçerikleri",
    en: "Collaborations & Influencer Content",
    de: "Zusammenarbeiten & Influencer-Inhalte",
  },
  "collabs.subtitle": {
    tr: "Gerçek kampanyalardan seçkiler.",
    en: "Selections from real campaigns.",
    de: "Auswahl echter Kampagnen.",
  },
  creative: { tr: "Kreatif", en: "Creative", de: "Kreativ" },
  "carousel.previous": {
    tr: "Önceki slayt",
    en: "Previous slide",
    de: "Vorherige Folie",
  },
  "carousel.next": {
    tr: "Sonraki slayt",
    en: "Next slide",
    de: "Nächste Folie",
  },

  // Sectors
  "sectors.title": {
    tr: "Sektörel Çözümlerimizi Keşfedin",
    en: "Explore our industry solutions",
    de: "Entdecken Sie unsere Branchenlösungen",
  },
  "sectors.subtitle": {
    tr: "Farklı sektörlere özel akıllı çözümler.",
    en: "Smart solutions tailored for different industries.",
    de: "Intelligente Lösungen für verschiedene Branchen.",
  },
  "sector.list": {
    tr: "FMCG|E-Ticaret|Kozmetik ve Güzellik|Tekstil ve Moda|Gıda|Otomotiv|Finans|Perakende",
    en: "FMCG|E-Commerce|Beauty & Cosmetics|Textile & Fashion|Food|Automotive|Finance|Retail",
    de: "FMCG|E-Commerce|Kosmetik & Schönheit|Textil & Mode|Lebensmittel|Automobil|Finanzen|Einzelhandel",
  },
  "sector.desc": {
    tr: "Hedef kitlenize uygun içerik stratejileri.",
    en: "Content strategies tailored to your audience.",
    de: "Content-Strategien, die auf Ihre Zielgruppe zugeschnitten sind.",
  },
  "solutions.title": {
    tr: "Firmanız İçin Özel Çözümler",
    en: "Custom solutions for your business",
    de: "Maßgeschneiderte Lösungen für Ihr Unternehmen",
  },
  "solutions.desc": {
    tr: "Her markanın farklı bir hikayesi ve hedefi var. Toplantı talep ederek markanıza özel çözümlere hızlıca ulaşın.",
    en: "Every brand has a unique story and goals. Request a meeting to get tailored solutions for your company.",
    de: "Jede Marke hat eine eigene Geschichte und Ziele. Fordern Sie ein Meeting an, um maßgeschneiderte Lösungen für Ihr Unternehmen zu erhalten.",
  },

  // Pricing
  "pricing.title": { tr: "Fiyatlandırma", en: "Pricing", de: "Preise" },
  "pricing.plan.starter": { tr: "Starter", en: "Starter", de: "Starter" },
  "pricing.plan.growth": { tr: "Growth", en: "Growth", de: "Growth" },
  "pricing.plan.enterprise": {
    tr: "Enterprise",
    en: "Enterprise",
    de: "Enterprise",
  },
  "pricing.feature.1": {
    tr: "10 içerik analizi",
    en: "10 content analyses",
    de: "10 Inhaltsanalysen",
  },
  "pricing.feature.2": {
    tr: "Temel raporlama",
    en: "Basic reporting",
    de: "Basisberichte",
  },
  "pricing.feature.3": {
    tr: "E-posta destek",
    en: "Email support",
    de: "E-Mail-Support",
  },

  // Success stories
  "success.heading": {
    tr: "Başarı Hikayelerini İnceleyin",
    en: "Explore Success Stories",
    de: "Erfolgsgeschichten ansehen",
  },
  "success.desc": {
    tr: "İlham alabileceğiniz geçmiş kampanyalarımıza göz atın.",
    en: "Browse past campaigns for inspiration.",
    de: "Schauen Sie sich vergangene Kampagnen zur Inspiration an.",
  },
  "case.increase": {
    tr: "Dönüşüm odaklı kreatif strateji ile %38 etkileşim artışı.",
    en: "38% engagement uplift with conversion-focused creative strategy.",
    de: "38% Engagement-Steigerung durch conversion-orientierte Kreativ-Strategie.",
  },

  // Campaign & generic
  campaign: { tr: "Kampanya", en: "Campaign", de: "Kampagne" },

  // Blog
  "blog.heading": {
    tr: "Son Gelişmeleri İnceleyin",
    en: "Read our latest",
    de: "Neueste Beiträge",
  },
  "blog.desc": {
    tr: "Blog ve kütüphanemizdeki kaynaklar.",
    en: "Articles and resources in our library.",
    de: "Artikel und Ressourcen in unserer Bibliothek.",
  },

  // Blog posts
  "blog.post.1.title": {
    tr: "UGC: Kullanıcı Ürettiği İçeriklerin Gücü",
    en: "UGC: The power of user-generated content",
    de: "UGC: Die Kraft nutzergenerierter Inhalte",
  },
  "blog.post.2.title": {
    tr: "Influencer Pazarlamada AI",
    en: "AI in Influencer Marketing",
    de: "KI im Influencer-Marketing",
  },
  "blog.post.3.title": {
    tr: "Kreatiflerle Çalışma Kültürü",
    en: "Working with creatives",
    de: "Arbeiten mit Kreativen",
  },

  // FAQ
  "faq.heading": {
    tr: "Sık Sorulan Sorular",
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen",
  },
  "faq.desc": {
    tr: "Kafanıza takılanlar için hızlı yanıtlar.",
    en: "Quick answers to common questions.",
    de: "Schnelle Antworten auf häufige Fragen.",
  },
  "faq.q1": {
    tr: "Platformu denemek ücretsiz mi?",
    en: "Is it free to try the platform?",
    de: "Ist die Plattform kostenlos testbar?",
  },
  "faq.a1": {
    tr: "Evet. Ücretsiz plan ile temel özellikleri sınırlı olarak deneyebilirsiniz.",
    en: "Yes. You can try basic features with the free plan.",
    de: "Ja. Mit dem Gratisplan können Sie grundlegende Funktionen testen.",
  },
  "faq.q2": {
    tr: "AI eşleştirme nasıl çalışır?",
    en: "How does AI matching work?",
    de: "Wie funktioniert das KI-Matching?",
  },
  "faq.a2": {
    tr: "İçerik, kitle ve geçmiş performans sinyallerini kullanarak uygun profilleri puanlarız.",
    en: "We score profiles using content, audience and past performance signals.",
    de: "Wir bewerten Profile anhand von Inhalt, Zielgruppe und vergangener Leistung.",
  },
  "faq.q3": {
    tr: "Kurumsal güvenlik sağlıyor musunuz?",
    en: "Do you provide enterprise-grade security?",
    de: "Bieten Sie Enterprise-Sicherheit?",
  },
  "faq.a3": {
    tr: "Rol tabanlı erişim, denetim kayıtları ve SSO desteği sunuyoruz.",
    en: "We offer RBAC, audit logs and SSO.",
    de: "Wir bieten RBAC, Audit-Logs und SSO.",
  },

  // Scheduler / modal
  "select.date": { tr: "Tarih seçin", en: "Select a date", de: "Datum wählen" },
  "select.time": {
    tr: "Saat seçin",
    en: "Select a time",
    de: "Uhrzeit wählen",
  },
  "no.slots": {
    tr: "Boş slot yok - lütfen tarih seçin",
    en: "No slots available - choose a date",
    de: "Keine verfügbaren Slots - wählen Sie ein Datum",
  },
  next: { tr: "İleri", en: "Next", de: "Weiter" },
  back: { tr: "Geri", en: "Back", de: "Zurück" },
  cancel: { tr: "İptal", en: "Cancel", de: "Abbrechen" },
  "confirm.slot": {
    tr: "Seçili zaman",
    en: "Selected time",
    de: "Ausgewählte Zeit",
  },
  "form.name": { tr: "Adınız", en: "Name", de: "Name" },
  "form.email": { tr: "E‑posta", en: "Email", de: "E‑Mail" },
  "form.brand": { tr: "Marka Adı?", en: "Brand name?", de: "Markenname?" },
  "form.sector": {
    tr: "Marka Sektörü?",
    en: "Brand sector?",
    de: "Markensektor?",
  },
  "form.website": {
    tr: "Website Linki?",
    en: "Website link?",
    de: "Website-Link?",
  },
  "form.phone": {
    tr: "Telefon Numaranız?",
    en: "Phone number?",
    de: "Telefonnummer?",
  },
  "form.notes": {
    tr: "Toplantı için yardımcı olacak bilgiler",
    en: "Please share anything that will help prepare for our meeting.",
    de: "Bitte teilen Sie alles mit, was bei der Vorbereitung des Treffens hilft.",
  },
  "form.terms": {
    tr: "İlerlemeden önce Calendly'nin Hüküm ve Koşulları ve Gizlilik Bildirimi'ni okudum.",
    en: "By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and Privacy Notice.",
    de: "Mit dem Fortfahren bestätigen Sie, dass Sie Calendlys Nutzungsbedingungen und Datenschutzhinweise gelesen haben.",
  },
  loading: { tr: "Yükleniyor...", en: "Loading...", de: "Wird geladen..." },
  schedule: {
    tr: "Randevu Oluştur",
    en: "Schedule Event",
    de: "Termin planen",
  },
  "join.meeting": {
    tr: "Toplantıya Katıl",
    en: "Join meeting",
    de: "Meeting beitreten",
  },
  "demo.created": {
    tr: "Demo toplantı oluşturuldu",
    en: "Demo meeting created",
    de: "Demo-Meeting erstellt",
  },

  // Footer
  "footer.col1.title": {
    tr: "Sektörel Çözümler",
    en: "Industry Solutions",
    de: "Branchenlösungen",
  },
  "footer.col1.items": {
    tr: "FMCG|E-Ticaret|Kozmetik ve Güzellik|Tekstil ve Moda|Gıda|Otomotiv|Bankacılık ve Finans|Perakende|Tüketici Ürünleri|Medya ve Telekomünikasyon|Mobil Uygulama|Tatil ve Seyahat",
    en: "FMCG|E-Commerce|Beauty|Textile & Fashion|Food|Automotive|Banking & Finance|Retail|Consumer Goods|Media & Telecom|Mobile Apps|Travel & Hospitality",
    de: "FMCG|E-Commerce|Kosmetik & Schönheit|Textil & Mode|Lebensmittel|Automobil|Banken & Finanzen|Einzelhandel|Konsumgüter|Medien & Telekommunikation|Mobile Apps|Reisen & Gastgewerbe",
  },
  "footer.col2.title": {
    tr: "Influencer Servisleri",
    en: "Influencer Services",
    de: "Influencer-Services",
  },
  "footer.col2.items": {
    tr: "Influencerlar için Mobil Uygulama|Clique Topluluğunu Keşfedin",
    en: "Mobile app for influencers|Discover the Clique community",
    de: "Mobile App für Influencer|Entdecke die Clique-Community",
  },
  "footer.col3.title": {
    tr: "Marka Çözümleri",
    en: "Brand Solutions",
    de: "Markenlösungen",
  },
  "footer.col3.items": {
    tr: "Platform|Fiyatlandırma|Özellikler|İş Birlikleri",
    en: "Platform|Pricing|Features|Collaborations",
    de: "Plattform|Preise|Funktionen|Zusammenarbeiten",
  },
  "footer.col4.title": { tr: "Şirketimiz", en: "Company", de: "Unternehmen" },
  "footer.col4.items": {
    tr: "Hakkımızda|Gizlilik Politikası|Kullanım Koşulları|Blog",
    en: "About|Privacy Policy|Terms of Use|Blog",
    de: "Über uns|Datenschutzrichtlinie|Nutzungsbedingungen|Blog",
  },
};

export const LanguageContext = React.createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
} | null>(null);

export const LanguageProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = React.useState<Lang>(() => {
    try {
      return (localStorage.getItem("lang") as Lang) || "tr";
    } catch (e) {
      return "tr";
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang]);

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry.tr ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

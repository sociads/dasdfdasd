import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SmartImage from "@/components/ui/SmartImage";
import { CAREER_IMAGES } from "@/lib/images";

export default function Careers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // prefill position from query param
  React.useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const pos = params.get("position");
      if (pos) {
        setPosition(pos);
        // scroll to form section
        setTimeout(() => {
          const el = document.getElementById("apply");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } catch (e) {}
  }, []);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "career",
          name,
          email,
          subject: position,
          message,
          meta: { resume },
        }),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">Kariyer - Lion Innovate</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Yaratıcı, veri odaklı ve hızlı büyümeyi seven bir ekipte yer almak
              ister misiniz? Ekibimize katılın; yeteneklerinizi
              geliştirebileceğiniz, proje sahiplenebileceğiniz ve eğitim
              fırsatları bulabileceğiniz bir çalışma ortamı sunuyoruz.
            </p>
            <ul className="mt-6 space-y-3 list-disc list-inside text-sm text-muted-foreground">
              <li>Rekabetçi maaş ve yan haklar</li>
              <li>Uzaktan çalışma ve esnek saat</li>
              <li>Kariyer gelişimi ve eğitim bütçesi</li>
              <li>Çeşitlilik ve kapsayıcılık odaklı kültür</li>
            </ul>
          </div>
          <div>
            <SmartImage
              src={`https://images.unsplash.com/${CAREER_IMAGES[0]}?auto=format&fit=crop&w=1200&h=800&q=80&ixlib=rb-4.0.3`}
              alt="team"
              className="w-full rounded-lg object-cover shadow-md"
              fallbackId={CAREER_IMAGES[1]}
            />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold">Açık Pozisyonlar</h2>
        <p className="text-muted-foreground mt-2">
          Ekip büyüyor — aşağıdaki rollere başvurabilirsiniz. İlginizi çeken bir
          pozisyon yoksa genel başvuru da gönderebilirsiniz.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Influencer Pazarlama Uzmanı",
              loc: "Istanbul / Remote",
              desc: "Influencer kampanya yönetimi, kreatif brief hazırlama, influencer iletişimi ve performans takibi.",
            },
            {
              title: "Growth Marketing",
              loc: "Istanbul / Remote",
              desc: "Trafik, dönüşüm ve kanal optimizasyonu; A/B testleri ve veri analizi.",
            },
            {
              title: "Creative Lead",
              loc: "Istanbul / Remote",
              desc: "Video ve görsel kreatiflerin üretiminde liderlik; ajanslarla koordinasyon.",
            },
            {
              title: "Frontend Engineer",
              loc: "Remote",
              desc: "Performant ve ölçeklenebilir kullanıcı arayüzleri geliştirme, React/TypeScript uzmanı.",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border p-6 bg-card">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="text-sm text-muted-foreground">{p.loc}</div>
                </div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() =>
                    (window.location.href =
                      "/careers?position=" + encodeURIComponent(p.title))
                  }
                >
                  Başvur
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="container py-12">
        <h2 className="text-2xl font-bold">Başvuru Formu</h2>
        <p className="text-muted-foreground mt-2">
          Aşağıdaki formu doldurarak doğrudan İnsan Kaynakları'na
          başvurabilirsiniz. Dosyalarınızı paylaşmak için bir Google
          Drive/Dropbox linki de gönderebilirsiniz.
        </p>

        <form onSubmit={submit} className="mt-6 grid gap-4 max-w-2xl">
          <label className="grid">
            <span className="text-sm text-muted-foreground">Adınız *</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">E-posta *</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">Pozisyon *</span>
            <input
              required
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Özgeçmiş / Portfolyo Linki
            </span>
            <input
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Kısa Tanıtım - Neden uygun olduğunuzu anlatın
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
              rows={6}
            />
          </label>

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Başvur"}
            </Button>
          </div>

          {sent && (
            <div className="text-green-600">
              Başvurunuz alındı. İnsan Kaynakları sizi izleyecektir.
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

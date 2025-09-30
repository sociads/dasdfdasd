import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/LanguageProvider";

export default function InfluencerModal() {
  const { t } = useLanguage();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [handle, setHandle] = React.useState("");
  const [platforms, setPlatforms] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [bio, setBio] = React.useState("");

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "influencer_application",
          name,
          email,
          phone,
          meta: { handle, platforms, followers, bio },
        }),
      });
      if (res.ok) setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Influencer Başvurusu</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Influencer Başvurusu</DialogTitle>
          <DialogDescription>
            Influencer olmak istiyorsanız aşağıdaki formu doldurarak başvurunuzu
            gönderin.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="grid gap-3">
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
            <span className="text-sm text-muted-foreground">Telefon</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Sosyal medya kullanıcı adı / profil linki *
            </span>
            <input
              required
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Platformlar (Instagram, TikTok vb.)
            </span>
            <input
              value={platforms}
              onChange={(e) => setPlatforms(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Takipçi sayısı
            </span>
            <input
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
            />
          </label>

          <label className="grid">
            <span className="text-sm text-muted-foreground">
              Kısa bio / içerik türleri
            </span>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 rounded-md border px-3 py-2 bg-background"
              rows={4}
            />
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Başvur"}{" "}
            </Button>
          </div>

          {success && (
            <div className="text-sm text-green-600">
              Başvurunuz alındı. Teşekkürler!
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

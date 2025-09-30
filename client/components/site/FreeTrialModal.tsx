import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FreeTrialModal() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "free_trial",
          name,
          company,
          phone,
          email,
          website,
          message,
          subject: "Ücretsiz Başlangıç Talebi",
        }),
      });
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Hemen Dene</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ücretsiz Başlangıç Talebi</DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="text-green-600">
            Talebiniz alındı. En kısa sürede iletişime geçilecektir.
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            <label className="grid">
              <span className="text-sm text-muted-foreground">Ad Soyad *</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>
            <label className="grid">
              <span className="text-sm text-muted-foreground">
                Firma / Marka *
              </span>
              <input
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>
            <label className="grid">
              <span className="text-sm text-muted-foreground">Telefon *</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              <span className="text-sm text-muted-foreground">
                Website / Sosyal
              </span>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>
            <label className="grid">
              <span className="text-sm text-muted-foreground">
                Kısaca Proje / Beklenti
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
                rows={4}
              />
            </label>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Kapat
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

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

export default function ChatSupport() {
  const [open, setOpen] = React.useState(false);
  const [stage, setStage] = React.useState<"form" | "chat">("form");
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    influencer: false,
    handle: "",
    platforms: "",
    phone: "",
    email: "",
  });
  const [messages, setMessages] = React.useState<
    { from: "user" | "bot"; text: string }[]
  >([]);

  const startChat = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setStage("chat");
    setMessages([
      {
        from: "bot",
        text: `Merhaba ${form.name || ""}, size nasıl yardımcı olabilirim?`,
      },
    ]);
    // send initial payload to server (non-blocking)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "live_chat_start",
          name: form.name,
          email: form.email,
          phone: form.phone,
          meta: form,
        }),
      });
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    // naive echo bot (placeholder for integration)
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: `Bot: ${text.slice(0, 200)} (otomatik yanıt)` },
      ]);
    }, 700);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setStage("form");
          setMessages([]);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white"
        >
          Canlı Destek
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[480px] max-w-full">
        <DialogHeader>
          <DialogTitle>Canlı Destek</DialogTitle>
          <DialogDescription>
            {stage === "form"
              ? "Lütfen bilgilerinizi paylaşın, ardından sohbet başlasın."
              : "Sohbet penceresi"}
          </DialogDescription>
        </DialogHeader>

        {stage === "form" ? (
          <form onSubmit={startChat} className="grid gap-3">
            <label className="grid">
              <span className="text-sm text-muted-foreground">Ad Soyad *</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                Firma / Influencer adı *
              </span>
              <input
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.influencer}
                onChange={(e) =>
                  setForm({ ...form, influencer: e.target.checked })
                }
              />
              <span className="text-sm text-muted-foreground">
                Ben influencer'im
              </span>
            </label>

            {form.influencer && (
              <>
                <label className="grid">
                  <span className="text-sm text-muted-foreground">
                    Sosyal medya kullanıcı adı / linkler (Instagram, TikTok,
                    Twitter...)
                  </span>
                  <input
                    value={form.handle}
                    onChange={(e) =>
                      setForm({ ...form, handle: e.target.value })
                    }
                    className="mt-1 rounded-md border px-3 py-2 bg-background"
                  />
                </label>
                <label className="grid">
                  <span className="text-sm text-muted-foreground">
                    Platformlar
                  </span>
                  <input
                    value={form.platforms}
                    onChange={(e) =>
                      setForm({ ...form, platforms: e.target.value })
                    }
                    className="mt-1 rounded-md border px-3 py-2 bg-background"
                  />
                </label>
              </>
            )}

            <label className="grid">
              <span className="text-sm text-muted-foreground">Telefon</span>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">E-posta</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Kapat
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Başlatılıyor..." : "Sohbete Başla"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <div
              className="h-64 overflow-auto p-2 border rounded bg-background"
              id="chat-log"
            >
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-md ${m.from === "bot" ? "bg-muted-foreground/10 self-start" : "bg-primary/10 self-end"}`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = (e.target as HTMLFormElement).elements.namedItem(
                  "msg",
                ) as HTMLInputElement;
                sendMessage(el.value);
                el.value = "";
              }}
              className="flex gap-2"
            >
              <input
                name="msg"
                placeholder="Mesajınızı yazın..."
                className="flex-1 rounded-md border px-3 py-2 bg-background"
              />
              <Button type="submit">Gönder</Button>
            </form>
            <div className="text-xs text-muted-foreground">
              Not: Bu sohbet demo amaçlıdır.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

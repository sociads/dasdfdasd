import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/LanguageProvider";

function generateTimeSlots(dateIso: string) {
  // generate 30-min slots from 09:00 to 17:00 local time for selected date
  const slots: string[] = [];
  if (!dateIso) return slots;
  const date = new Date(dateIso);
  date.setHours(9, 0, 0, 0);
  for (let i = 0; i < 16; i++) {
    const s = new Date(date.getTime() + i * 30 * 60 * 1000);
    slots.push(s.toISOString());
  }
  return slots;
}

export default function ScheduleModal() {
  const { t } = useLanguage();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [selectedSlot, setSelectedSlot] = React.useState<string>("");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<null | {
    join_url?: string;
    demo?: boolean;
  }>(null);

  const slots = React.useMemo(
    () => generateTimeSlots(selectedDate),
    [selectedDate],
  );

  const proceedToForm = () => {
    if (!selectedSlot) return;
    setStep(2);
  };

  const backToSlots = () => setStep(1);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/zoom/create-meeting", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          topic: `${name || "Toplantı"} - ${brand || "Firma"}`,
          start_time: selectedSlot,
          duration: 30,
          name,
          email,
          meta: { brand, sector, website, phone, notes },
        }),
      });
      const data = await res.json();
      setResult(data);

      // notify internal inbox about the scheduled meeting
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            type: "meeting",
            name,
            email,
            subject: `Toplantı: ${name || brand}`,
            message: `Meeting scheduled ${data.join_url || "demo"}`,
            meta: { meeting: data },
          }),
        });
      } catch (err) {
        console.warn("failed to notify via email", err);
      }
    } catch (err) {
      console.error(err);
      setResult({ demo: true });

      // still notify about attempted meeting
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            type: "meeting",
            name,
            email,
            subject: `Toplantı (hata) - ${name}`,
            message: `Demo or failed meeting attempt`,
            meta: {},
          }),
        });
      } catch (e) {
        console.warn("failed to notify via email", e);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">{t("cta.toplanti")}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("cta.toplanti")}</DialogTitle>
          <DialogDescription>
            {t("cta.try.desc") || "Schedule a meeting with our team."}
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="grid gap-4">
            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("select.date") || "Select date"}
              </span>
              <input
                type="date"
                value={
                  selectedDate
                    ? new Date(selectedDate).toISOString().slice(0, 10)
                    : ""
                }
                onChange={(e) => {
                  const d = e.target.value;
                  if (!d) return setSelectedDate("");
                  // preserve time at 09:00
                  const iso = new Date(`${d}T09:00:00`).toISOString();
                  setSelectedDate(iso);
                  setSelectedSlot("");
                }}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <div>
              <div className="text-sm text-muted-foreground mb-2">
                {t("select.time") || "Select a time"}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {slots.length === 0 ? (
                  <div className="text-sm text-muted-foreground">
                    {t("no.slots") || "Choose a date to see available times"}
                  </div>
                ) : (
                  slots.map((s) => {
                    const dt = new Date(s);
                    const label = dt.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        className={`rounded-md border px-3 py-2 text-sm ${selectedSlot === s ? "bg-primary text-primary-foreground" : ""}`}
                      >
                        {label}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedDate("");
                  setSelectedSlot("");
                }}
              >
                {t("cancel") || "Cancel"}
              </Button>
              <Button onClick={proceedToForm} disabled={!selectedSlot}>
                {t("next") || "Next"}
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4">
            <div className="text-sm text-muted-foreground">
              {t("confirm.slot") || "Selected"}:{" "}
              {selectedSlot ? new Date(selectedSlot).toLocaleString() : ""}
            </div>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.name") || "Name"} *
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.email") || "Email"} *
              </span>
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
                {t("form.brand") || "Marka Adı?"} *
              </span>
              <input
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.sector") || "Marka Sektörü?"}
              </span>
              <input
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.website") || "Website Linki?"}
              </span>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.phone") || "Telefon Numaranız?"}
              </span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
              />
            </label>

            <label className="grid">
              <span className="text-sm text-muted-foreground">
                {t("form.notes") ||
                  "Please share anything that will help prepare for our meeting."}
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 bg-background"
                rows={4}
              />
            </label>

            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground max-w-sm">
                {t("form.terms") ||
                  "By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and Privacy Notice."}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={backToSlots}>
                  {t("back") || "Back"}
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading
                    ? t("loading") || "Loading"
                    : t("schedule") || "Schedule Event"}
                </Button>
              </div>
            </div>

            {result && (
              <div className="mt-2 text-sm">
                {result.join_url ? (
                  <a
                    href={result.join_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    {t("join.meeting") || "Join meeting"}
                  </a>
                ) : (
                  <span>{t("demo.created") || "Demo meeting created"}</span>
                )}
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

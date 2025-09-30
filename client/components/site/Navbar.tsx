import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScheduleModal from "@/components/site/ScheduleModal";
import InfluencerModal from "@/components/site/InfluencerModal";
import { useLanguage } from "@/components/LanguageProvider";
import Logo from "@/components/site/Logo";

const links = [
  { href: "#sektorel", key: "nav.sektorel" },
  { href: "#nasil-calisir", key: "nav.nasil" },
  { href: "#is-birlikleri", key: "nav.isbirlik" },
  { href: "#blog", key: "nav.blog" },
  { href: "#iletisim", key: "nav.iletisim" },
  { href: "/careers", key: "nav.kariyer", label: "Kariyer" },
];

export function Navbar({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b",
        className,
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <a
          href="#hero"
          className="group inline-flex items-center gap-3 font-extrabold text-2xl"
        >
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label ? l.label : t(l.key)}
            </a>
          ))}
          <a
            href="#marka-giris"
            className="text-muted-foreground hover:text-foreground"
          >
            {t("nav.markaGiris")}
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("tr")}
              aria-label="Türkçe"
              className={`px-2 py-1 rounded ${lang === "tr" ? "ring-2 ring-primary" : ""}`}
            >
              🇹🇷
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className={`px-2 py-1 rounded ${lang === "en" ? "ring-2 ring-primary" : ""}`}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLang("de")}
              aria-label="Deutsch"
              className={`px-2 py-1 rounded ${lang === "de" ? "ring-2 ring-primary" : ""}`}
            >
              🇩🇪
            </button>
          </div>
          <Button asChild variant="ghost">
            <a href="#hemen-dene">{t("cta.hemenDene")}</a>
          </Button>
          <InfluencerModal />
          <ScheduleModal />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const { t, lang, setLang } = useLanguage();

  return (
    <details className="relative">
      <summary className="list-none">
        <span className="sr-only">{t("nav.menu") || "Open menu"}</span>
        <div className="w-8 h-8 grid place-items-center rounded-md border md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25c0-.414.336-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </summary>
      <div className="absolute right-0 mt-3 w-[88vw] max-w-xs rounded-lg border bg-background p-4 shadow-xl">
        <nav className="grid gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded px-2 py-2 hover:bg-accent"
            >
              {l.label ? l.label : t(l.key)}
            </a>
          ))}
          <a href="#marka-giris" className="rounded px-2 py-2 hover:bg-accent">
            {t("nav.markaGiris")}
          </a>

          <div className="flex gap-2 pt-2">
            <Button asChild variant="ghost" className="flex-1">
              <a href="#hemen-dene">{t("cta.hemenDene")}</a>
            </Button>
            <Button asChild className="flex-1">
              <a href="#toplanti">{t("cta.toplanti")}</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-3">
            <button
              onClick={() => setLang("tr")}
              className={`px-2 py-1 rounded ${lang === "tr" ? "ring-2 ring-primary" : ""}`}
            >
              🇹🇷
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded ${lang === "en" ? "ring-2 ring-primary" : ""}`}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 rounded ${lang === "de" ? "ring-2 ring-primary" : ""}`}
            >
              🇩🇪
            </button>
          </div>
        </nav>
      </div>
    </details>
  );
}

export default Navbar;

import { cn } from "@/lib/utils";

import { useLanguage } from "@/components/LanguageProvider";

export function Marquee({ className }: { className?: string }) {
  const { t } = useLanguage();
  const brands = (t('brands.list') || '').split('|').filter(Boolean);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex gap-12 animate-[scroll_40s_linear_infinite] will-change-transform" aria-hidden>
        {[...brands, ...brands].map((b, i) => (
          <span
            key={b + i}
            className="shrink-0 text-muted-foreground/80 tracking-wide text-sm bg-secondary/60 rounded-full px-4 py-2 border"
          >
            {b}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

export default Marquee;

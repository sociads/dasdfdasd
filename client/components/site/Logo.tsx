import React from "react";
import { cn } from "@/lib/utils";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-md">
        <img src="https://cdn.builder.io/api/v1/image/assets%2F47eb497cb18a488d874012b74b0422a3%2F53c06cd2fb9149b59fdfa5851a9c2037?format=webp&width=800" alt="SociAds" className="w-10 h-10 object-contain" />
      </div>
      <div className="leading-none">
        <div className="text-lg font-extrabold tracking-tight">Soci<span className="text-accent">Ads</span></div>
        <div className="text-xs text-muted-foreground">beyond ads</div>
      </div>
    </div>
  );
}

import { ShieldCheck, Lock, Globe, BadgeCheck, Landmark, Fingerprint } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Regulated by the Bank of Canada & FINTRAC" },
  { icon: Lock, text: "256-bit Encryption" },
  { icon: Globe, text: "Trusted by Businesses Worldwide" },
  { icon: BadgeCheck, text: "SOC 2 Type II Certified" },
  { icon: Landmark, text: "FinCEN Registered MSB" },
  { icon: Fingerprint, text: "Bank-Level Security" },
];

export function TrustBanner() {
  return (
    <section className="py-6 bg-surface-lowest/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-on-background/40 whitespace-nowrap"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-surface-lowest">
                  <Icon className="size-3.5 text-primary-brand/60 shrink-0" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

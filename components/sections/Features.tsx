"use client";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { FadeUp } from "@/components/shared/FadeUp";
import { ArrowRight, RefreshCw, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    headline: "One account for 56 currencies around the world.",
    description:
      "Open local accounts in USD, EUR, GBP, and more — instantly. Receive funds like a local business, hold balances without hidden fees, and exchange at real-time interbank rates.",
    cta: "Explore Multi-Currency Accounts",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    imageAlt: "Financial analysis on desk",
    reverse: false,
    overlay: "rates",
  },
  {
    headline: "Send money to 150+ countries. Without the wait.",
    description:
      "Pay suppliers, contractors, and partners anywhere in the world using local payment rails. Bypass the slow SWIFT network — and save more money with lower fees and full transparency on every transaction.",
    cta: "Explore Global Payout",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    imageAlt: "Modern office building",
    reverse: true,
    overlay: "speed",
  },
  {
    headline: "Put your financial operations on autopilot.",
    description:
      "Automatically convert currencies when target rates are hit, route incoming funds, and trigger payouts based on your own business rules — so your team spends less time on admin and more time on growth.",
    cta: "Explore Payment Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    imageAlt: "Data dashboard analytics",
    reverse: false,
    overlay: "auto",
  },
];

function OverlayRates() {
  return (
    <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 rounded-2xl bg-white p-4 atmospheric-shadow-lg z-10 min-w-[180px]">
      <p className="text-[10px] uppercase tracking-wider text-on-background/40 font-semibold mb-2">Real-Time Rates</p>
      <div className="space-y-2">
        {[
          { pair: "USD/EUR", rate: "0.9241", up: true },
          { pair: "GBP/USD", rate: "1.2673", up: false },
          { pair: "EUR/GBP", rate: "0.8592", up: true },
        ].map((r) => (
          <div key={r.pair} className="flex items-center justify-between text-sm">
            <span className="font-medium text-on-background">{r.pair}</span>
            <span className={`font-semibold ${r.up ? "text-emerald-600" : "text-rose-500"}`}>
              {r.rate}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1 text-[10px] text-on-background/40">
        <RefreshCw className="size-2.5" /> Updated just now
      </div>
    </div>
  );
}

function OverlaySpeed() {
  return (
    <div className="absolute -top-4 -left-4 md:top-4 md:-left-8 rounded-2xl bg-white p-4 atmospheric-shadow-lg z-10 min-w-[160px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center">
          <Zap className="size-3.5 text-emerald-600" />
        </div>
        <span className="text-sm font-semibold text-on-background">Instant</span>
      </div>
      <p className="text-[10px] text-on-background/50">Payment to Berlin delivered</p>
      <p className="text-xs font-bold text-emerald-600 mt-1">€4,200 — 2.3 seconds</p>
    </div>
  );
}

function OverlayAuto() {
  return (
    <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 rounded-2xl bg-white p-4 atmospheric-shadow-lg z-10 min-w-[180px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-7 w-7 rounded-lg bg-primary-brand/10 flex items-center justify-center">
          <TrendingUp className="size-3.5 text-primary-brand" />
        </div>
        <span className="text-sm font-semibold text-on-background">Auto-Convert</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-on-background/50">Target rate hit</span>
          <span className="font-semibold text-primary-brand">1.0842</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-on-background/50">Converted</span>
          <span className="font-semibold text-emerald-600">$25,000</span>
        </div>
      </div>
    </div>
  );
}

const overlays: Record<string, () => React.ReactNode> = {
  rates: OverlayRates,
  speed: OverlaySpeed,
  auto: OverlayAuto,
};

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-20">
            <SectionLabel>Why Plaude</SectionLabel>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
              Everything you need to go global.
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, i) => {
            const Overlay = overlays[feature.overlay];
            return (
              <FadeUp key={i}>
                <div
                  className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${feature.reverse ? "md:[direction:rtl]" : ""}`}
                >
                  <div className={feature.reverse ? "md:[direction:ltr]" : ""}>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-on-background mb-5 leading-tight">
                      {feature.headline}
                    </h3>
                    <p className="text-base text-on-background/60 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-11 px-6 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-brand/20"
                    >
                      {feature.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>

                  <div className={`relative ${feature.reverse ? "md:[direction:ltr]" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden atmospheric-shadow-lg">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                    </div>
                    {/* Floating UI overlay */}
                    {Overlay && <Overlay />}
                    {/* Ambient glow */}
                    <div className="absolute -inset-8 -z-10 rounded-3xl bg-primary-brand/[0.04] blur-3xl" />
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

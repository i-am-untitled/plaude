"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { target: 10, prefix: "$", suffix: "B+", label: "Volume Processed" },
  { target: 10000, prefix: "", suffix: "+", label: "Global Businesses" },
  { target: 150, prefix: "", suffix: "+", label: "Countries Supported" },
  { target: 99, prefix: "", suffix: ".999%", label: "Uptime" },
];

export function StatsBar() {
  return (
    <section className="relative py-20 sm:py-24 bg-primary-brand overflow-hidden grain-overlay">
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-white/[0.04] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-white/[0.03] rounded-full blur-3xl" />

      <FadeUp>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="relative">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-primary tracking-tight">
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm text-on-primary/60 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

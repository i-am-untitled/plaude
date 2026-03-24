"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Briefcase, ShieldCheck, Lightbulb } from "lucide-react";
import Image from "next/image";

const philosophy = [
  { icon: ShieldCheck, title: "Institutional Trust", description: "We build systems our users' livelihoods depend on. Trust is earned through reliability, transparency, and rigorous standards." },
  { icon: Lightbulb, title: "Radical Precision", description: "Every pixel, every transaction, every interaction is considered. We sweat the details because our customers' money is on the line." },
  { icon: Globe, title: "Global Literacy", description: "We build for a world without borders. Our team reflects the diversity of the global markets we serve." },
];

const openPositions = [
  { title: "Senior Distributed Systems Engineer", team: "Remote / Europe", dept: "Engineering" },
  { title: "Principal Product Designer", team: "Toronto / Hybrid", dept: "Design" },
  { title: "Head of Global Compliance", team: "Toronto", dept: "Legal" },
  { title: "Editorial Content Director", team: "Remote", dept: "Marketing" },
  { title: "Treasury Operations Analyst", team: "Dublin / London", dept: "Operations" },
];

const filterTabs = ["All", "Engineering", "Product", "Marketing", "Finance", "Operations"];

const perks = [
  { title: "Equity & Growth", description: "Meaningful equity so you grow with the company." },
  { title: "Health & Wellness", description: "Comprehensive health coverage for you and your family." },
  { title: "Learning Fund", description: "Annual budget for courses, conferences, and books." },
  { title: "Remote Office", description: "Stipend for your ideal home office setup." },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Join the Team</SectionLabel>
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-on-background leading-[1.08] tracking-[-0.02em]">
                  Come build the future of global finance with us
                </h1>
                <p className="mt-6 text-on-background/60 leading-relaxed">
                  We&apos;re a team of builders, thinkers, and problem solvers who believe
                  geography should never be a barrier to business. If that excites you —
                  you&apos;ll fit right in.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                    alt="Modern office"
                    width={600}
                    height={400}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                {/* Remote-first badge */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-primary-brand p-4 atmospheric-shadow text-on-primary">
                  <p className="text-xs font-semibold uppercase tracking-wider text-on-primary/60">Work</p>
                  <p className="text-lg font-bold">Remote First</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                What drives us.
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-8 md:grid-cols-3 items-center">
            {philosophy.map((item, i) => {
              const Icon = item.icon;
              const isCenter = i === 1;
              return (
                <FadeUpItem key={i}>
                  <div className={`rounded-3xl p-8 h-full text-center transition-all duration-300 ${
                    isCenter
                      ? "bg-primary-brand text-on-primary atmospheric-shadow-lg scale-105"
                      : "bg-surface-lowest hover:bg-surface-low"
                  }`}>
                    <div className={`mx-auto mb-5 inline-flex items-center justify-center rounded-2xl p-4 ${
                      isCenter ? "bg-on-primary/10" : "bg-white"
                    }`}>
                      <Icon className={`size-7 ${isCenter ? "text-on-primary" : "text-primary-brand"}`} />
                    </div>
                    <h3 className={`text-lg font-semibold ${isCenter ? "text-on-primary" : "text-on-background"}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isCenter ? "text-on-primary/70" : "text-on-background/60"}`}>
                      {item.description}
                    </p>
                  </div>
                </FadeUpItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 sm:py-32 bg-surface-lowest/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Open Positions</SectionLabel>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background mb-8">
              Find your role.
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {filterTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 ? "bg-primary-brand text-on-primary" : "bg-surface-lowest text-on-background/60 hover:bg-surface-low"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-3">
              {openPositions.map((pos, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl bg-white p-5 sm:p-6 atmospheric-shadow hover:atmospheric-shadow-lg transition-all group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-brand">{pos.dept}</span>
                    <h3 className="text-base font-semibold text-on-background mt-0.5 group-hover:text-primary-brand transition-colors">
                      {pos.title}
                    </h3>
                    <p className="text-sm text-on-background/50">{pos.team}</p>
                  </div>
                  <Button className="rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-9 px-5 text-sm font-medium shrink-0">
                    Apply <ArrowRight className="size-3.5 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <SectionLabel>Benefits</SectionLabel>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                  Built for the long haul.
                </h2>
              <p className="mt-3 text-on-background/60">
                We believe in taking care of our team so they can take care of our users.
              </p>
              </div>
              {/* Team collaboration photo */}
              <div className="rounded-3xl overflow-hidden atmospheric-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <FadeUpItem key={i}>
                <div className="rounded-3xl bg-surface-lowest p-7 h-full">
                  <h3 className="text-base font-semibold text-on-background">{perk.title}</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">{perk.description}</p>
                </div>
              </FadeUpItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

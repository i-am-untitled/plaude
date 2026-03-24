"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const leaders = [
  { name: "Tomiwa Adeyemo", title: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" },
  { name: "Sarah Oyelaran", title: "Chief Operating Officer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face" },
  { name: "Michael Chen", title: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" },
  { name: "David Kruger", title: "VP, Strategic Alliances", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — left text, right cityscape photo */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Our Story</SectionLabel>
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-[3rem] font-bold text-on-background leading-[1.08] tracking-[-0.02em]">
                  Building the future of global banking.
                </h1>
                <p className="mt-6 text-on-background/60 leading-relaxed">
                  We started Plaude with a simple belief — moving money across borders
                  should be as easy, fast, and secure as sending an email. Today we power
                  thousands of global businesses.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                    alt="Modern cityscape"
                    width={600}
                    height={400}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary-brand/[0.04] blur-3xl" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission — text-focused with small accent card */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
              <div className="max-w-3xl">
                <SectionLabel>Our Mission</SectionLabel>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-[2rem] font-light text-on-background leading-[1.3]">
                  On a mission to make{" "}
                  <span className="font-bold text-primary-brand">global financial infrastructure</span>{" "}
                  accessible to every business — regardless of where they&apos;re based.
                </h2>
                <p className="mt-6 text-on-background/60 leading-relaxed">
                  Geography should never be a barrier to business. We exist to
                  make cross-border payments as simple and secure as sending an
                  email — for any business, anywhere.
                </p>

                {/* Small value indicators below text */}
                <div className="flex items-center gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary-brand" />
                    <span className="text-xs font-medium text-on-background/50">Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary-brand" />
                    <span className="text-xs font-medium text-on-background/50">Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary-brand" />
                    <span className="text-xs font-medium text-on-background/50">Transparent</span>
                  </div>
                </div>
              </div>

              {/* Small accent card */}
              <div className="hidden md:block rounded-2xl bg-secondary-brand/10 p-5 min-w-[140px]">
                <p className="text-3xl font-bold text-secondary-brand">150+</p>
                <p className="text-xs text-on-background/50 mt-1">Countries served</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CEO Message — B&W photo left, purple card right */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden atmospheric-shadow-lg">
              {/* Left — B&W editorial photo */}
              <div className="bg-white flex items-center justify-center p-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                  alt="Tomiwa Adeyemo, CEO"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover aspect-[4/5] grayscale"
                />
              </div>
              {/* Right — purple quote card */}
              <div className="bg-primary-brand p-8 md:p-12 flex flex-col justify-center grain-overlay relative">
                <div className="relative z-10">
                  <SectionLabel>Message from the CEO</SectionLabel>
                  <p className="mt-6 text-lg md:text-xl text-on-primary/90 leading-relaxed italic">
                    &ldquo;This section is reserved for a personal note from our
                    CEO. The more specific and honest, the better. Authentic
                    founder notes convert better than polished marketing copy.&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold text-on-primary">Tomiwa V. Plaude</p>
                    <p className="text-sm text-on-primary/50">CEO &amp; Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Leadership — CEO large on left + city photo with teal accent on right, then row of others below */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <SectionLabel>Meet the Leadership</SectionLabel>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                Meet the leadership.
              </h2>
              <p className="mt-4 text-on-background/60">
                A diverse team of engineers, financial experts, and product builders
                dedicated to your success.
              </p>
            </div>
          </FadeUp>

          {/* Top row — CEO large + cityscape with teal accent */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
                <Image
                  src={leaders[0].image}
                  alt={leaders[0].name}
                  width={600}
                  height={700}
                  className="w-full aspect-[4/5] object-cover grayscale"
                />
              </div>
              <div className="rounded-3xl overflow-hidden atmospheric-shadow relative">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700&fit=crop"
                  alt="Cityscape"
                  width={600}
                  height={700}
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Teal accent overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-secondary-brand/40 to-transparent h-1/3" />
              </div>
            </div>
          </FadeUp>

          {/* Bottom row — other leaders */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <FadeUpItem key={i}>
                <div className="text-center">
                  <div className={`rounded-2xl overflow-hidden atmospheric-shadow mb-4 ${i === 1 ? "ring-2 ring-secondary-brand/20" : ""}`}>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={300}
                      height={375}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-on-background">{leader.name}</h3>
                  <p className="text-xs text-primary-brand font-medium mt-0.5">{leader.title}</p>
                </div>
              </FadeUpItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — "Join the Revolution" */}
      <section className="relative py-24 sm:py-32 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-on-primary leading-[1.08] tracking-[-0.02em]">
              Join the Revolution
            </h2>
            <p className="mt-6 text-lg text-on-primary/70 max-w-2xl mx-auto">
              Join thousands of businesses managing their global finances with Plaude.
            </p>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-[15px] font-semibold rounded-full transition-all"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

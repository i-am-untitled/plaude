"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search, Rocket, CreditCard, Shield, Code, Lock, Building,
  MessageCircle, Phone, ArrowRight, Mail, Share2,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  { q: "How does Plaude ensure the security of my funds?", a: "Plaude utilizes multi-party computation (MPC) combined with hardware security modules (HSMs) to protect your portfolio. No single point of failure exists within our security architecture, ensuring robust protection of your assets." },
  { q: "What are the international transfer fees?", a: "Our fee structure is transparent and competitive. Contact us for detailed pricing based on your business volume." },
  { q: "Can I integrate Plaude with my existing business tools?", a: "We're actively building integrations with popular accounting platforms. Contact us for the latest on our integration roadmap." },
  { q: "How long does it take to open a Plaude account?", a: "Setup takes less than 10 minutes. Once your business is verified you can start sending and receiving payments immediately." },
  { q: "Which currencies does Plaude support?", a: "Plaude supports 56 currencies for holding and 50+ currencies for payouts — including USD, EUR, GBP, CAD, AUD, JPY and more." },
  { q: "Is my money safe with Plaude?", a: "Yes. Plaude is regulated by the Bank of Canada and FINTRAC. Your funds are protected by end-to-end 256-bit encryption and we are SOC 2 Type II and ISO 27001 certified." },
];

export default function HelpCenterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-background tracking-[-0.02em]">
              How can we <span className="text-primary-brand underline decoration-primary-brand/20 decoration-4 underline-offset-4">support</span> you?
            </h1>
            <div className="mt-8 max-w-lg mx-auto relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-on-background/30 group-focus-within:text-primary-brand transition-colors" />
              <input
                type="text"
                placeholder="Find answers and guides"
                className="w-full h-14 rounded-full pl-13 pr-6 bg-surface-lowest text-on-background placeholder:text-on-background/40 focus:outline-none focus:ring-2 focus:ring-primary-brand/30 text-base atmospheric-shadow transition-all"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Categories — Bento grid matching Figma */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="space-y-4">
              {/* Row 1: Getting Started (wide) + Payments & Transfers (mint green) */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-3 cursor-pointer rounded-3xl bg-surface-lowest p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/60 p-3">
                    <Rocket className="size-6 text-primary-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-background">Getting Started</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">
                    Everything you need to know about setting up your Plaude account and navigating your new financial dashboard.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-4 group-hover:gap-2 transition-all">
                    Explore Guides <ArrowRight className="size-3.5" />
                  </Link>
                </div>

                <div className="md:col-span-2 cursor-pointer rounded-3xl bg-[#a7f3d0] p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/60 p-3">
                    <CreditCard className="size-6 text-secondary-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-background">Payments & Transfers</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">
                    Manage domestic and international transfers with professional precision.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-on-background/60 mt-4 group-hover:gap-2 transition-all">
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Row 2: Account & Security (purple) + Technical & API (white) + Bank-Level Security (peach) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="cursor-pointer rounded-3xl bg-primary-brand p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-on-primary/10 p-3">
                    <Shield className="size-6 text-on-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-primary">Account & Security</h3>
                  <p className="mt-2 text-sm text-on-primary/60 leading-relaxed">
                    Protecting your assets with MFA and enterprise-grade authentication.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-on-primary/60 mt-4 group-hover:gap-2 transition-all">
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

                <div className="cursor-pointer rounded-3xl bg-surface-lowest p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/60 p-3">
                    <Code className="size-6 text-primary-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-background">Technical & API</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">
                    Integration documentation for developers and institutional partners.
                  </p>
                </div>

                <div className="cursor-pointer rounded-3xl bg-[#fed7aa] p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/60 p-3">
                    <Building className="size-6 text-tertiary-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-background">Bank-Level Security</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">
                    Learn about our sovereign-grade vault architecture and compliance.
                  </p>
                </div>
              </div>

              {/* Row 3: Encryption & Data (partial width) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="cursor-pointer rounded-3xl bg-surface-lowest p-7 transition-all duration-300 hover:atmospheric-shadow group">
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/60 p-3">
                    <Lock className="size-6 text-primary-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-background">Encryption & Data</h3>
                  <p className="mt-2 text-sm text-on-background/60 leading-relaxed">
                    Your data, sovereign and encrypted with AES-256 standards.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-24 bg-surface-lowest/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-2xl px-6 atmospheric-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-on-background hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-on-background/60 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* Contact — deep purple bg, left text+buttons, right glass cards */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp>
            <div className="rounded-3xl bg-primary-brand p-8 sm:p-12 grain-overlay relative overflow-hidden">
              {/* Subtle radial glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />

              <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
                {/* Left: text + buttons */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-on-primary mb-3">
                    Still need assistance?
                  </h2>
                  <p className="text-on-primary/60 mb-8 leading-relaxed text-sm">
                    Our sovereign support team is available 24/7 to ensure your
                    financial operations remain uninterrupted and secure.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="rounded-full text-on-primary hover:bg-on-primary/10 text-sm gap-2 border-white/60 bg-transparent">
                      <MessageCircle className="size-4" /> Live Chat
                    </Button>
                    <Button variant="outline" className="rounded-full text-on-primary hover:bg-on-primary/10 text-sm gap-2 border-white/60 bg-transparent">
                      <Phone className="size-4" /> Call Team
                    </Button>
                  </div>
                </div>

                {/* Right: frosted glass cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-on-primary/[0.08] backdrop-blur-sm p-5 text-on-primary">
                    <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-on-primary/10 p-2.5">
                      <Share2 className="size-5 text-on-primary" />
                    </div>
                    <p className="text-sm font-semibold">Social Connect</p>
                    <p className="text-xs text-on-primary/50 mt-1">Join our community</p>
                  </div>
                  <div className="rounded-2xl bg-on-primary/[0.08] backdrop-blur-sm p-5 text-on-primary">
                    <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-on-primary/10 p-2.5">
                      <Mail className="size-5 text-on-primary" />
                    </div>
                    <p className="text-sm font-semibold">Email Desk</p>
                    <p className="text-xs text-on-primary/50 mt-1">Ticketed support</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

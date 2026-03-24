"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Getting Started", "Multi-Currency Accounts", "Sending & Receiving Payments", "Payment Automation", "Account & Security"];

const videos = [
  { category: "Getting Started", title: "Onboarding Essentials", duration: "3:24", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
  { category: "Multi-Currency Accounts", title: "Global Multi-Currency", duration: "4:12", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop" },
  { category: "Payment Automation", title: "Automated Workflows", duration: "5:08", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
  { category: "Sending & Receiving Payments", title: "Real-Time Settlements", duration: "3:45", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop" },
  { category: "Account & Security", title: "Security Architecture", duration: "4:30", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop" },
  { category: "Technical & API", title: "Developer Sandbox", duration: "3:56", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop" },
];

export default function VideoTutorialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-brand via-primary-brand to-primary-brand/90" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Learning Hub</SectionLabel>
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-[3rem] font-bold text-on-primary leading-[1.08] tracking-[-0.02em]">
                  Master your{" "}
                  <span className="italic">financial flow.</span>
                </h1>
                <p className="mt-6 text-on-primary/70 leading-relaxed">
                  Visual guides designed to help you navigate the future of sovereign finance. From basic setup to complex payment automation.
                </p>
              </div>

              {/* Featured video thumbnail */}
              <div className="relative group cursor-pointer">
                <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Featured video"
                    width={600}
                    height={400}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-on-primary/90 backdrop-blur-sm p-5 group-hover:scale-110 transition-transform atmospheric-shadow">
                    <Play className="size-8 text-primary-brand ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary-brand text-on-primary rounded-full px-3 py-1 text-xs font-medium">
                    Featured Video
                  </Badge>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-primary-brand text-on-primary"
                      : "bg-surface-lowest text-on-background/60 hover:bg-surface-low"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <FadeUpItem key={i}>
                <div className="cursor-pointer group">
                  <div className="relative rounded-3xl overflow-hidden atmospheric-shadow">
                    <Image
                      src={video.image}
                      alt={video.title}
                      width={400}
                      height={250}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-on-primary/80 backdrop-blur-sm p-4 group-hover:scale-110 transition-transform">
                        <Play className="size-6 text-primary-brand ml-0.5" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-primary-brand text-on-primary rounded-full px-3 py-1 text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                      {video.category}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-on-background group-hover:text-primary-brand transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </FadeUpItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-on-background/40">
            More tutorials coming soon. We&apos;re adding new videos regularly.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 sm:py-24 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-on-primary">
              Still have questions?
            </h2>
            <p className="mt-4 text-on-primary/70 leading-relaxed">
              Our support team is ready to help or browse our Help &amp; Support
              articles for step-by-step written guides.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn/help-center"
                className="inline-flex items-center justify-center gap-2 bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 rounded-full text-sm font-semibold transition-all"
              >
                Visit Help Center
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-transparent text-on-primary hover:bg-on-primary/10 h-12 px-8 rounded-full text-sm font-medium transition-all"
              >
                Chat With Us
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

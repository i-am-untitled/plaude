"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetailPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-primary-brand overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp>
            <Link href="/learn/blog" className="inline-flex items-center gap-1.5 text-sm text-on-primary/60 hover:text-on-primary transition-colors mb-8">
              <ArrowLeft className="size-4" />
              Back to Journal
            </Link>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-on-primary/60 mb-4">
              Think Pieces
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-primary leading-[1.08] tracking-[-0.02em]">
              The Future of Cross-Border Liquidity in a Post-Digital Era
            </h1>
            <p className="mt-6 text-on-primary/60 leading-relaxed">
              Unpacking the geopolitical shifts in global capital flow as legacy networks meet decentralised ecosystems.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-10 w-10 rounded-full bg-on-primary/10 flex items-center justify-center text-sm font-bold text-on-primary">
                DK
              </div>
              <div>
                <p className="text-sm font-medium text-on-primary">David Kruger</p>
                <p className="text-xs text-on-primary/50">VP, Strategic Alliances &middot; Mar 8, 2026 &middot; 7 min read</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-lg max-w-none text-on-background/80">
              <p className="text-lg leading-relaxed">
                The infrastructure of global finance is undergoing a seismic shift.
                For decades, correspondent banking networks and slow-moving settlement
                systems have defined the speed at which capital crosses borders.
              </p>

              <h2 className="text-2xl font-semibold text-on-background mt-12 mb-4">
                The Fragmentation Paradox
              </h2>
              <p>
                As traditional banking networks evolve, we&apos;re witnessing a fragmentation
                paradox — more rails, more options, but also more complexity. The businesses
                that win will be those that can navigate this landscape without adding operational overhead.
              </p>

              {/* Inline image */}
              <div className="my-10 rounded-2xl overflow-hidden atmospheric-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop"
                  alt="Global financial networks"
                  width={800}
                  height={400}
                  className="w-full aspect-[2/1] object-cover"
                />
              </div>

              {/* Pull quote */}
              <blockquote className="my-12 pl-6 py-6 bg-surface-lowest rounded-2xl">
                <p className="text-xl font-semibold text-on-background italic leading-snug">
                  &ldquo;The next decade won&apos;t be about the speed of the transaction,
                  but the intelligence of the asset being moved.&rdquo;
                </p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-on-background mt-12 mb-4">
                The Rise of Sovereign Digital Assets
              </h2>
              <p>
                Central Bank Digital Currencies (CBDCs) represent perhaps the most
                significant shift in global payments infrastructure since the advent
                of SWIFT. As more nations pilot and launch their own digital currencies,
                the implications for cross-border settlement are profound.
              </p>

              {/* Inline image */}
              <div className="my-10 rounded-2xl overflow-hidden atmospheric-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                  alt="Modern architecture"
                  width={800}
                  height={400}
                  className="w-full aspect-[2/1] object-cover"
                />
              </div>

              <p>
                For platforms like Plaude, this means building infrastructure that is
                agnostic to the rail — whether it&apos;s traditional banking, blockchain-based
                settlement, or CBDC networks. The future belongs to the platforms that
                can abstract away this complexity.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-on-primary">
              Stay ahead of the curve.
            </h2>
            <p className="mt-4 text-on-primary/70 leading-relaxed">
              Weekly perspectives on global finance, directly to your inbox. No noise, just signal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 h-12 rounded-full px-5 bg-white/10 text-on-primary placeholder:text-on-primary/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm backdrop-blur-sm"
              />
              <Button className="rounded-full bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-sm font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Recommended */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-on-background mb-8">Recommended for You</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { title: "The 2026 Outlook: Algorithmic Arbitrage in Frontier Markets", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop" },
                { title: "An Introduction: Anti-Fintech Behavioral Financing?", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
                { title: "Deconstructing Programmable Money", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop" },
              ].map((post, i) => (
                <Link key={i} href="/learn/blog" className="group">
                  <div className="rounded-2xl overflow-hidden atmospheric-shadow">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-on-background group-hover:text-primary-brand transition-colors leading-snug">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

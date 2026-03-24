'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Globe, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Platform', href: '/' },
    ],
  },
  {
    label: 'Learn',
    links: [
      { title: 'Blog', href: '/learn/blog' },
      { title: 'Help Center', href: '/learn/help-center' },
      { title: 'Video Tutorials', href: '/learn/video-tutorials' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '/company/about' },
      { title: 'Careers', href: '/company/careers' },
      { title: 'The Plaude Circle', href: '/company/plaude-circle' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'LinkedIn', href: '#', icon: Globe },
      { title: 'Instagram', href: '#', icon: ExternalLink },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-[3rem] px-6 py-12 lg:py-16 bg-surface-lowest/40">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur bg-primary-brand/20" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Image
            src="/brand/logo-light.svg"
            alt="Plaude"
            width={120}
            height={34}
            className="h-8 w-auto"
          />
          <p className="text-on-background/60 mt-8 text-sm md:mt-0 max-w-xs leading-relaxed">
            The smarter way for businesses to send, receive, and manage money
            globally.
          </p>
          <p className="text-on-background/40 text-xs">
            &copy; {new Date().getFullYear()} Plaude Technologies Inc. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-on-background/40">
                  {section.label}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-on-background/60 hover:text-primary-brand inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1.5 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Compliance */}
      <AnimatedContainer delay={0.5} className="w-full mt-12 pt-8">
        <div className="section-rule mb-6" />
        <details className="group">
          <summary className="cursor-pointer text-xs text-on-background/25 hover:text-on-background/40 transition-colors select-none">
            Regulatory & compliance information
          </summary>
          <p className="mt-3 text-xs leading-relaxed text-on-background/20 max-w-4xl">
            Plaude Inc. is registered in the United States as a Money Services
            Business (MSB) with the United States Financial Crimes Enforcement
            Network (FinCEN) under the Bank Secrecy Act (BSA). MSB Registration
            Number: 31000289167537. Plaude Canada Inc. is registered and
            regulated in Canada by the Financial Transactions and Reports
            Analysis Centre of Canada (FINTRAC) as a Money Services Business
            (MSB). MSB Registration Number: C100000338. Our registration
            authorizes us to provide foreign exchange, money transfer, and
            payment service provider (PSP) activities in Canada.
          </p>
        </details>
      </AnimatedContainer>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

import {
  RadixAccordion,
  RadixAccordionContent,
  RadixAccordionItem,
  RadixAccordionTrigger,
} from "@/components/ui/radix-accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface AccordionFeatureSectionProps {
  features: FeatureItem[];
}

const AccordionFeatureSection = ({ features }: AccordionFeatureSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <RadixAccordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <RadixAccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="border-b border-outline-variant/15"
                >
                  <RadixAccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition hover:!no-underline"
                  >
                    <h6
                      className={`text-xl font-semibold transition-colors ${
                        tab.id === activeTabId
                          ? "text-on-background"
                          : "text-on-background/40"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </RadixAccordionTrigger>
                  <RadixAccordionContent>
                    <p className="mt-3 text-on-background/60 leading-relaxed">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        width={600}
                        height={450}
                        className="h-full max-h-80 w-full rounded-2xl object-cover"
                      />
                    </div>
                  </RadixAccordionContent>
                </RadixAccordionItem>
              ))}
            </RadixAccordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-3xl bg-surface-lowest md:block">
            <Image
              src={activeImage}
              alt="Feature preview"
              width={800}
              height={600}
              className="aspect-[4/3] rounded-2xl object-cover p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AccordionFeatureSection };

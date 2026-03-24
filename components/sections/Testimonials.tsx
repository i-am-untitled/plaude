"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Plaude cut our cross-border payment costs by 40%. The multi-currency accounts alone saved us thousands each quarter.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Chen",
    role: "E-commerce, Toronto",
  },
  {
    text: "We used to wait 3\u20135 days for international transfers. With Plaude, our contractors get paid the same day. It\u2019s transformed how we operate.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marcus Okafor",
    role: "SaaS, Lagos",
  },
  {
    text: "The automation features are a game changer. We set our target rates and Plaude handles the conversions. Our finance team focuses on strategy now, not admin.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Elena Rodriguez",
    role: "Agency, Barcelona",
  },
  {
    text: "Moving to Plaude was the best financial decision we made this year. The transparency on fees and exchange rates is unmatched.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "James Whitfield",
    role: "Enterprise, London",
  },
  {
    text: "Our team in six countries all get paid on time, every time. Plaude made what felt impossible into something effortless.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Priya Sharma",
    role: "Tech Startup, Bangalore",
  },
  {
    text: "As a freelancer working with clients across Europe and Asia, Plaude lets me receive payments like a local bank in each market.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Tobias M\u00fcller",
    role: "Freelancer, Berlin",
  },
  {
    text: "The real-time dashboard gives us complete visibility into our global cash flow. No more spreadsheet chaos.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Aisha Patel",
    role: "CFO, Dubai",
  },
  {
    text: "Switching from our legacy bank to Plaude saved us over $50K in the first quarter alone. The ROI was immediate.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "David Nguyen",
    role: "Operations, Singapore",
  },
  {
    text: "What I love most is the simplicity. Complex international payments now take minutes instead of days.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Lisa Park",
    role: "Founder, Seoul",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <SectionLabel>Testimonials</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mt-5 text-center text-on-background">
              What our users say
            </h2>
            <p className="text-center mt-5 text-on-background/60">
              Here&apos;s what businesses using Plaude are saying.
            </p>
          </motion.div>
        </FadeUp>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

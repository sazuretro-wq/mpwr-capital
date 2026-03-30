"use client";

import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const pillars = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "Learn the business from the inside — operations, customers, teams, and culture.",
  },
  {
    number: "02",
    title: "Partner on Execution",
    description:
      "Strengthen operations, professionalize systems, and improve performance where it matters most.",
  },
  {
    number: "03",
    title: "Scale Thoughtfully",
    description:
      "Growth driven by disciplined execution, operational efficiency, and customer retention.",
  },
  {
    number: "04",
    title: "Build Enduring Value",
    description:
      "Create durable businesses with strong foundations and long-term relevance.",
  },
];

export default function InvestmentApproach() {
  return (
    <>
      <PageHero
        title="Investment Approach"
        description="When MPWR partners with a business, we commit capital, time, and operational attention."
      />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <AnimatedSection>
            <p className="mx-auto max-w-[650px] text-center text-[15px] leading-[1.8] text-mpwr-text-secondary">
              We work alongside leadership to strengthen systems, improve
              performance, and support long-term growth while preserving what
              already works.
            </p>
          </AnimatedSection>

          <div className="mt-16 space-y-4">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.number} delay={i * 0.08}>
                <div className="surface-card group flex items-start gap-6 rounded-lg p-7 md:p-8">
                  <span className="font-heading text-3xl font-light text-mpwr-gray-200 transition-colors duration-300 group-hover:text-mpwr-red md:text-4xl">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-mpwr-text-secondary md:text-[15px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-14 text-center">
              <MagneticButton href="/contact">Contact</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

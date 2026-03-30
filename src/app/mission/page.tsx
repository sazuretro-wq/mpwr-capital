"use client";

import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const focusAreas = [
  {
    title: "Home Services",
    emphasis: "Pest control",
    description:
      "Essential, recurring revenue businesses where operational improvement directly drives growth.",
  },
  {
    title: "Building Services",
    emphasis: "Commercial landscaping & facility services",
    description:
      "Adjacent facility services with strong recurring revenue and operational scalability.",
  },
];

export default function Mission() {
  return (
    <>
      <PageHero
        title="MPWRING Improbable Possibilities"
        subtitle="Our Mission"
      />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <AnimatedSection>
            <p className="mx-auto max-w-[650px] text-center font-heading text-2xl leading-relaxed font-medium md:text-3xl">
              We Partner With Proven Service Businesses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mx-auto mt-6 max-w-[650px] text-center text-[15px] leading-[1.8] text-mpwr-text-secondary">
              MPWR invests in established service companies where execution,
              culture, and operational discipline matter more than financial
              engineering.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {focusAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1}>
                <div className="surface-card rounded-lg p-8">
                  <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                    {area.title}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold">
                    {area.emphasis}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mpwr-text-secondary">
                    {area.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-14 text-center">
              <MagneticButton href="/contact">Contact</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

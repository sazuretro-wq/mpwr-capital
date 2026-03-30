"use client";

import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

export default function About() {
  return (
    <>
      <PageHero
        title="About MPWR Capital"
        subtitle="Operators who invest. Partners who execute."
      />
      <section className="py-24">
        <div className="mx-auto max-w-[750px] px-6 lg:px-8">
          <AnimatedSection>
            <p className="font-heading text-2xl leading-relaxed font-medium md:text-3xl">
              MPWR Capital Management is an operator-led investment firm focused
              on home and building services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-[15px] leading-[1.8] text-mpwr-text-secondary">
              We partner with founders and management teams to build stronger,
              more durable businesses through hands-on operational leadership.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="divider my-14" />
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <blockquote className="border-l-[3px] border-mpwr-red pl-6">
              <p className="font-heading text-xl leading-relaxed font-medium md:text-2xl">
                We believe the best outcomes come from operators investing
                capital, not investors learning to operate.
              </p>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-14 text-center">
              <MagneticButton href="/contact">Contact Us</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

"use client";

import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

export default function InvestmentCriteria() {
  return (
    <>
      <PageHero title="Investment Criteria" />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <AnimatedSection direction="left">
              <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                Who We Partner With
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">
                Founders who build with purpose
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-mpwr-text-secondary">
                Founders and owners who have built strong service businesses and
                care about customers, employees, and legacy. Whether seeking
                growth, partial liquidity, or a thoughtful transition — we
                structure partnerships that preserve continuity while enabling
                the next chapter.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="surface-card flex h-full flex-col justify-center rounded-lg p-8">
                <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                  Our Belief
                </p>
                <blockquote className="mt-3">
                  <p className="font-heading text-xl leading-relaxed font-medium md:text-2xl">
                    Capital alone does not build great service businesses.
                  </p>
                  <p className="mt-1 font-heading text-xl font-semibold text-mpwr-red md:text-2xl">
                    Execution does.
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 text-center">
              <MagneticButton href="/contact">Contact Us</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

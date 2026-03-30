"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const affiliations = [
  "YPO (Young Presidents' Organization)",
  "Goldman Sachs 10,000 Small Businesses",
  "Ernst & Young Entrepreneur Access Network",
  "MOSB Task Force, Dept. of Government Services",
];

export default function Leadership() {
  return (
    <>
      <PageHero title="Leadership" subtitle="Alazar Asmamaw" />
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
            {/* Photo */}
            <AnimatedSection direction="left">
              <Image
                src="/images/alazar.jpg"
                alt="Alazar Asmamaw"
                width={600}
                height={720}
                className="rounded-lg"
              />
            </AnimatedSection>

            {/* Bio */}
            <div>
              <AnimatedSection direction="right">
                <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                  Investor | Business Builder | Partner to Founders
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.08}>
                <p className="mt-5 text-[15px] leading-[1.8] text-mpwr-text-secondary">
                  I love building businesses. There&apos;s nothing more
                  rewarding than helping founders scale, unlock value, and
                  achieve the big exit they&apos;ve always envisioned.
                  That&apos;s why I co-founded MPWR Capital Management—to be the
                  kind of investor I wish more founders had: hands-on, aligned,
                  and focused on long-term success.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <p className="mt-5 text-[15px] leading-[1.8] text-mpwr-text-secondary">
                  At MPWR, we partner with business owners to take their
                  companies to the next level. Whether it&apos;s streamlining
                  operations, expanding through acquisitions, or unlocking new
                  growth opportunities, we bring the resources, expertise, and
                  strategic thinking that help founders turn strong businesses
                  into industry leaders.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="surface-card rounded-lg p-5 text-center">
                    <span className="font-heading text-3xl font-bold text-mpwr-red">
                      20x
                    </span>
                    <p className="mt-1 text-[14px] text-mpwr-text-secondary">
                      Revenue growth in under 5 years
                    </p>
                  </div>
                  <div className="surface-card rounded-lg p-5 text-center">
                    <span className="font-heading text-3xl font-bold text-mpwr-red">
                      18
                    </span>
                    <p className="mt-1 text-[14px] text-mpwr-text-secondary">
                      Multifamily acquisitions led
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Additional bio */}
          <div className="mt-16 max-w-[750px]">
            <AnimatedSection>
              <p className="text-[15px] leading-[1.8] text-mpwr-text-secondary">
                I stay deeply connected to the founder and entrepreneurial
                community, working with organizations like YPO, Goldman
                Sachs&apos; 10,000 Small Businesses, and Ernst &amp;
                Young&apos;s Entrepreneur Access Network. I also serve on the
                Minority-Owned Small Businesses (MOSB) task force under the
                Department of Government Services (DGS) because I believe in
                creating opportunities for more founders to build something
                great.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {affiliations.map((aff, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-mpwr-red" />
                    <span className="text-[14px] text-mpwr-text-secondary">
                      {aff}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="mt-8 text-[15px] leading-[1.8] text-mpwr-text-secondary">
                Before launching MPWR Capital Management, I spent years honing
                my value investment framework in real estate, where I learned
                firsthand what it takes to identify opportunities, structure
                deals, and create long-term value.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <blockquote className="mt-8 border-l-[3px] border-mpwr-red pl-6">
                <p className="font-heading text-xl leading-relaxed font-medium">
                  My goal is simple: helping business owners build lasting
                  success, create generational wealth for their families, and
                  enjoy the second bite of the apple when the big exit comes.
                </p>
              </blockquote>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-14">
              <MagneticButton href="/contact">
                Let&apos;s Connect
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

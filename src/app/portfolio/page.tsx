"use client";

import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const companies = [
  {
    name: "Everpark Integrated Services",
    website: "www.everpark.com",
    description:
      "A technology enabled facilities services platform delivering integrated solutions across parking, janitorial, maintenance, and site operations. Serves large scale venues and complex environments with a focus on operational excellence, logistics coordination, and consistent service delivery for institutional and public sector clients.",
  },
  {
    name: "Republic Facilities",
    website: "www.republicfacilities.com",
    description:
      "A tech-enabled facility services partner specializing in large-scale, mission-critical environments including airports, hospitals, universities, and government campuses. Delivers integrated operations across parking, shuttles, janitorial, maintenance, and emergency response, combining technology and operational expertise to scale reliably for institutional clients.",
  },
];

export default function Portfolio() {
  return (
    <>
      <PageHero
        title="Portfolio"
        description="Companies we partner with to build enduring value."
      />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {companies.map((company, i) => (
              <AnimatedSection key={company.name} delay={i * 0.1}>
                <div className="surface-card group flex h-full flex-col rounded-lg p-8">
                  <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                    Portfolio Company
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {company.name}
                  </h3>
                  <a
                    href={`https://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block cursor-pointer text-[14px] text-mpwr-text-muted transition-colors duration-300 hover:text-mpwr-red"
                  >
                    {company.website} &rarr;
                  </a>
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-mpwr-text-secondary">
                    {company.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-14 text-center">
              <MagneticButton href="/contact">Contact Us</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

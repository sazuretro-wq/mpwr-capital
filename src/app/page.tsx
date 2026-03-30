"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
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

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed centered, Voy-style */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-mpwr-dark">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "75% center" }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Uniform cinematic overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl font-semibold leading-[1.1em] tracking-tight text-white md:text-6xl lg:text-[72px]"
            >
              Operators who invest. Partners who{" "}
              <span className="text-mpwr-red">execute.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65 md:text-base"
          >
            An operator-led investment firm focused on home services and building services.
          </motion.p>

          {/* Two glass pill CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a
              href="/contact"
              className="rounded-full bg-mpwr-red px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-mpwr-red-dark"
            >
              Get in Touch
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              Learn More
            </a>
          </motion.div>

          {/* 10T+ stat */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="mt-14"
          >
            <AnimatedCounter value="10T+" label="Economic Opportunity" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[13px] tracking-widest text-white/30 uppercase">Scroll</span>
            <div className="h-6 w-px bg-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* Approach Section — light */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
              Our Approach
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
              How we create value
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.number} delay={i * 0.08}>
                <div className="surface-card group h-full rounded-lg p-7">
                  <span className="font-heading text-3xl font-light text-mpwr-gray-200">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-heading text-[16px] font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mpwr-text-secondary">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-14 text-center">
              <MagneticButton href="/investment-approach" variant="outline">
                View Full Approach
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

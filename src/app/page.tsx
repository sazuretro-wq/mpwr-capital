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
      {/* Hero — dark section with video-ready background */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-mpwr-dark">
        {/* Background video — shifted right to show roads behind text */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "right 50%" }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-mpwr-dark/90 via-mpwr-dark/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 lg:px-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 h-[2px] bg-mpwr-red"
          />

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Operators who invest.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Partners who{" "}
              <span className="text-mpwr-red">execute.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60 md:text-base"
          >
            An operator-led investment firm focused on home services and building
            services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton href="/contact" variant="primary">
              Get in Touch
            </MagneticButton>
            <MagneticButton href="/about" variant="outline" className="!border-white/20 !text-white hover:!border-white/40 hover:!bg-white/5">
              Learn More
            </MagneticButton>
          </motion.div>

          {/* 10T+ stat */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-12"
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
            <span className="text-[14px] tracking-wider text-white/30">
              Scroll
            </span>
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

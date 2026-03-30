"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-mpwr-dark pb-16 pt-36">
      {/* Subtle gradient orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-1/3 right-[-10%] h-[600px] w-[600px] rounded-full bg-mpwr-red"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-[14px] font-medium tracking-wide text-mpwr-red"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

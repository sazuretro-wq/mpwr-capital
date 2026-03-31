"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "hero-primary" | "hero-glass";
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.12);
    y.set((e.clientY - centerY) * 0.12);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const variantStyles: Record<string, string> = {
    primary: "bg-mpwr-red text-white hover:bg-mpwr-red-dark",
    outline: "border border-mpwr-gray-200 text-mpwr-text hover:border-mpwr-text hover:bg-mpwr-off-white",
    "hero-primary": "bg-mpwr-red text-white hover:bg-mpwr-red-dark",
    "hero-glass": "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20",
  };
  const baseStyles = variantStyles[variant];

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        href={href}
        className={`inline-block cursor-pointer rounded-full px-7 py-3.5 text-[14px] font-semibold transition-all duration-300 ${baseStyles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

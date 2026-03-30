"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="inline-flex items-center gap-4">
      <span className="font-heading text-4xl font-bold text-white md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="text-[14px] font-medium leading-tight text-white/50">
        Economic<br />Opportunity
      </span>
    </div>
  );
}

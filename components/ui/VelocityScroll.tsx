import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useInView,
} from "framer-motion";
import { cn } from "../../lib/utils";

interface VelocityScrollProps {
  defaultVelocity?: number;
  className?: string;
  children?: React.ReactNode;
}

interface ParallaxProps {
  children?: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Performance: Only run animation logic when in view
  const isInView = useInView(containerRef);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        // Ensure we have enough copies to fill screen + buffer
        const newRepetitions = Math.max(2, Math.ceil(containerWidth / textWidth) + 2);
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = React.useRef<number>(1);
  useAnimationFrame((t, delta) => {
    if (!isInView) return; // Stop animation loop when off-screen

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      ref={containerRef}
    >
      <motion.div className={cn("inline-block", className)} style={{ x, willChange: "transform" }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null} className="inline-block">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  children,
  defaultVelocity = 5,
  className,
}: VelocityScrollProps) {
  return (
    <section className="relative w-full space-y-12">
      <ParallaxText baseVelocity={defaultVelocity} className={className}>
        {children}
      </ParallaxText>
      <ParallaxText baseVelocity={-defaultVelocity} className={className}>
        {children}
      </ParallaxText>
    </section>
  );
}
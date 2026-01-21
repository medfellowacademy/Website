'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.26_0.06_252)] via-[oklch(0.62_0.11_196)] to-[oklch(0.76_0.12_70)] z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}

'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(
  options: ParallaxOptions = {}
): [React.RefObject<HTMLDivElement | null>, MotionValue<string>] {
  const { speed = 0.5, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${multiplier * -50 * speed}%`, `${multiplier * 50 * speed}%`]
  );

  return [ref, y];
}

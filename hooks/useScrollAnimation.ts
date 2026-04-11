'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return { ref, inView: triggerOnce ? hasAnimated : inView };
}

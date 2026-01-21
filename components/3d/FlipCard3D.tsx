'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCard3DProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  cardClassName?: string;
  autoFlipDuration?: number;
}

export default function FlipCard3D({
  frontContent,
  backContent,
  className = '',
  cardClassName = '',
  autoFlipDuration,
}: FlipCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`group perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={`relative preserve-3d ${cardClassName}`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}

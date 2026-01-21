='use client';

import { ReactNode, useRef } from 'react';
import Tilt from 'react-parallax-tilt';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
  transitionSpeed?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  glarePosition?: 'top' | 'right' | 'bottom' | 'left' | 'all';
  glareBorderRadius?: string;
}

export default function Card3D({
  children,
  className = '',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.05,
  transitionSpeed = 400,
  glareEnable = true,
  glareMaxOpacity = 0.2,
  glareColor = '#ffffff',
  glarePosition = 'all',
  glareBorderRadius = '1rem',
}: Card3DProps) {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={transitionSpeed}
      glareEnable={glareEnable}
      glareMaxOpacity={glareMaxOpacity}
      glareColor={glareColor}
      glarePosition={glarePosition}
      glareBorderRadius={glareBorderRadius}
    >
      {children}
    </Tilt>
  );
}

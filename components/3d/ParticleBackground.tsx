'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  preset?: 'medical' | 'dna' | 'molecules' | 'network';
  className?: string;
}

export default function ParticleBackground({
  preset = 'medical',
  className = '',
}: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // console.log('Particles loaded', container);
  }, []);

  const getConfig = () => {
    const configs: Record<string, any> = {
      medical: {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#0066cc', '#00a896', '#f4a261'] },
          shape: {
            type: ['circle', 'triangle', 'edge'],
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1 },
          },
          size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.3 },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#0066cc',
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
          },
        },
        retina_detect: true,
      },
      dna: {
        particles: {
          number: { value: 40 },
          color: { value: '#00a896' },
          shape: { type: 'circle' },
          opacity: { value: 0.6 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#0066cc',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'top',
            out_mode: 'out',
          },
        },
      },
      molecules: {
        particles: {
          number: { value: 80 },
          color: { value: ['#0066cc', '#f4a261', '#00a896'] },
          shape: { type: 'circle' },
          opacity: { value: 0.4, random: true },
          size: { value: 5, random: true },
          line_linked: {
            enable: true,
            distance: 120,
            color: '#0066cc',
            opacity: 0.3,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
      },
      network: {
        particles: {
          number: { value: 50 },
          color: { value: '#0066cc' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 2.5 },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00a896',
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      },
    };

    return configs[preset];
  };

  if (!init) return null;

  return (
    <Particles
      id={`particles-${preset}`}
      className={`absolute inset-0 ${className}`}
      particlesLoaded={particlesLoaded}
      options={getConfig()}
    />
  );
}

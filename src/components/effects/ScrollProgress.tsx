import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'var(--c-amber)',
        transformOrigin: '0%',
        scaleX: x,
        zIndex: 10000,
        pointerEvents: 'none',
      }}
      aria-hidden
    />
  );
}

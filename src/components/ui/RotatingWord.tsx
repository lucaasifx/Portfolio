import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface Props {
  words: readonly string[];
  intervalMs?: number;
  color?: string;
}

export function RotatingWord({ words, intervalMs = 2500, color = 'var(--c-amber)' }: Props) {
  const [i, setI] = useState(0);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words.length, intervalMs, reduce]);

  return (
    <span style={{ display: 'inline-block', position: 'relative', minWidth: '7ch' }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={reduce ? { opacity: 1 } : { y: '0.5em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: '-0.5em', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            display: 'inline-block',
            fontFamily: 'var(--ff-display)',
            fontStyle: 'italic',
            fontWeight: 500,
            color,
          }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

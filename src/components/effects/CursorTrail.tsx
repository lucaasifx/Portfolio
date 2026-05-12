import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// soft amber cursor trail — desktop only, off when reduced motion
export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === 'undefined') return;
    // skip on touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const onDown = () => {
      if (ringRef.current) {
        ringRef.current.style.transform += ' scale(0.7)';
      }
    };
    const onUp = () => {
      // reflow back via raf
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 6,
          height: 6,
          background: 'var(--c-amber)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 28,
          height: 28,
          border: '1px solid rgba(224, 136, 32, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          mixBlendMode: 'screen',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
}

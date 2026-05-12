import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'motion/react';
import { useLocale } from '@/i18n/LocaleContext';
import { Marquee } from '@/components/ui/Marquee';
import { RotatingWord } from '@/components/ui/RotatingWord';
import { PixelAvatar } from '@/components/ui/PixelAvatar';
import { CoffeeCup } from '@/components/ui/CoffeeCup';
import classes from './Hero.module.css';

gsap.registerPlugin(useGSAP);

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(`.${classes.eyebrow}`, { y: 20, opacity: 0, duration: 0.6 })
        .from(
          `.${classes.firstName} .char, .${classes.lastName} .char`,
          {
            y: 60,
            opacity: 0,
            rotateZ: 2,
            duration: 0.9,
            stagger: 0.035,
            ease: 'power4.out',
          },
          '-=0.2',
        )
        .from(`.${classes.tagline}`, { opacity: 0, y: 12, duration: 0.5 }, '-=0.3')
        .from(`.${classes.metaLeft}, .${classes.metaRight}`, { opacity: 0, y: 12, duration: 0.5, stagger: 0.1 }, '-=0.2')
        .from(
          `.${classes.avatarFrame}`,
          { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', clearProps: 'transform' },
          '-=0.6',
        )
        .from(
          `.${classes.cupCard}`,
          { opacity: 0, y: 16, duration: 0.6, clearProps: 'transform' },
          '-=0.4',
        )
        .from(
          `.${classes.cupWrap} .steam path`,
          { opacity: 0, y: 12, duration: 0.6, stagger: 0.15 },
          '-=0.3',
        );

      // continuous steam animation
      gsap.to(`.${classes.cupWrap} .steam path`, {
        y: -10,
        opacity: 0,
        duration: 2.2,
        stagger: { each: 0.3, repeat: -1, yoyo: true },
        repeat: -1,
        ease: 'sine.inOut',
      });

      // parallax stains
      gsap.to(`.${classes.stainA}`, { yPercent: -10, ease: 'none', scrollTrigger: undefined });
    },
    { scope: ref, dependencies: [t] },
  );

  const splitChars = (str: string) =>
    Array.from(str).map((ch, i) => (
      <span key={i} className={classes.charWrap}>
        <span className="char" style={{ display: 'inline-block' }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      </span>
    ));

  return (
    <section id="top" ref={ref} className={classes.hero}>
      <img src="/coffee-stain-1.svg" alt="" aria-hidden className={`${classes.stain} ${classes.stainA}`} />
      <img src="/coffee-stain-2.svg" alt="" aria-hidden className={`${classes.stain} ${classes.stainB}`} />

      <div className={classes.inner}>
        <div className={classes.left}>
          <p className={`mono ${classes.eyebrow}`}>{t.hero.eyebrow}</p>

          <h1 className={classes.heading}>
            <span className={`display ${classes.firstName}`}>{splitChars(t.hero.firstName)}</span>
            <span className={`display ${classes.lastName} ${classes.italic}`}>{splitChars(t.hero.lastName)}</span>
          </h1>

          <p className={classes.tagline}>
            <span className="mono">{`${t.hero.taglinePrefix} `}</span>
            <RotatingWord words={t.hero.taglineWords} />
          </p>

          <div className={classes.metaRow}>
            <span className={`mono ${classes.metaLeft}`}>{t.hero.location}</span>
            <span className={`mono ${classes.metaRight}`}>{t.hero.role}</span>
          </div>

          <motion.a
            href="#contato"
            className={classes.cta}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="mono">→</span> <span>{t.hero.cta}</span>
          </motion.a>
        </div>

        <div className={classes.right}>
          <div className={classes.avatarStack}>
            <motion.div
              className={classes.avatarFloat}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={classes.avatarFrame}>
                <div className={classes.avatarBg} aria-hidden />
                <PixelAvatar size={240} />
              </div>
            </motion.div>

            <div className={classes.cupCard}>
              <div className={classes.cupWrap} aria-hidden>
                <CoffeeCup size={48} />
              </div>
              <div className={classes.cupMeta}>
                <span className={`mono ${classes.cupLabel}`}>// fuel</span>
                <span className={`mono ${classes.cupValue}`}>always brewing · since 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.scrollHint} aria-hidden>
        <span className="mono">{t.hero.scrollHint}</span>
        <span className={classes.scrollLine} />
      </div>

      <div className={classes.marqueeWrap}>
        <Marquee text={t.hero.marquee} speed={50} />
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useLocale, type Locale } from '@/i18n/LocaleContext';
import classes from './LocaleToggle.module.css';

const opts: Locale[] = ['pt', 'en'];

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div className={classes.wrap} role="group" aria-label="Language">
      {opts.map((opt) => {
        const active = opt === locale;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLocale(opt)}
            className={`${classes.btn} mono ${active ? classes.active : ''}`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="locale-pill"
                className={classes.pill}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className={classes.label}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

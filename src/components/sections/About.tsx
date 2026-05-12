import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useLocale } from '@/i18n/LocaleContext';
import { CoffeeCup } from '@/components/ui/CoffeeCup';
import classes from './About.module.css';

function renderWithHighlights(text: string, highlights: string[]): ReactNode {
  // text contains "{{word}}" markers; replace them with highlight spans
  const parts: ReactNode[] = [];
  const regex = /\{\{([^}]+)\}\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const word = match[1];
    if (highlights.includes(word)) {
      parts.push(
        <em key={`h-${idx++}`} className={classes.highlight}>
          {word}
        </em>,
      );
    } else {
      parts.push(word);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function About() {
  const { t } = useLocale();
  const { block1, block2, block3 } = t.about;

  return (
    <section id="sobre" className={`section ${classes.about}`}>
      <header className={classes.head}>
        <span className={`mono ${classes.label}`}>{t.about.label}</span>
        <h2 className={`display ${classes.title}`}>{t.about.title}</h2>
      </header>

      <div className={classes.grid}>
        <motion.article
          className={`${classes.block} ${classes.b1}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className={`mono ${classes.meta}`}>{block1.meta}</span>
          <p className={classes.text}>
            {renderWithHighlights(block1.text, [block1.highlight])}
          </p>
          <img src="/coffee-stain-1.svg" alt="" aria-hidden className={classes.stainBg} />
        </motion.article>

        <motion.article
          className={`${classes.block} ${classes.b2}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className={`mono ${classes.meta}`}>{block2.meta}</span>
          <p className={classes.text}>
            {renderWithHighlights(block2.text, [...block2.highlights])}
          </p>
        </motion.article>

        <motion.article
          className={`${classes.block} ${classes.b3}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className={`mono ${classes.meta}`}>{block3.meta}</span>
          <p className={classes.text}>
            {renderWithHighlights(block3.text, [block3.highlight])}
          </p>
          <div className={classes.cup}>
            <CoffeeCup size={56} withSteam={false} />
          </div>
        </motion.article>
      </div>
    </section>
  );
}

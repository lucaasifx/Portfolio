import { motion } from 'motion/react';
import { useLocale } from '@/i18n/LocaleContext';
import { type Project } from '@/data/projects';
import classes from './ProjectCard.module.css';

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  const { t } = useLocale();
  const flipped = index % 2 === 1;

  return (
    <motion.article
      className={`${classes.card} ${flipped ? classes.flipped : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className={classes.media}>
        <div className={classes.mediaInner} aria-hidden>
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} loading="lazy" />
          ) : (
            <div className={classes.placeholder}>
              <span className="mono">{`/${project.tags[0] ?? 'project'}`}</span>
            </div>
          )}
        </div>
      </div>
      <div className={classes.body}>
        <span className={`mono ${classes.index}`}>{String(index + 1).padStart(2, '0')} /</span>
        <h3 className={`display ${classes.title}`}>{project.title}</h3>
        <p className={classes.desc}>{project.description}</p>
        <ul className={classes.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className="mono">/{tag}</li>
          ))}
        </ul>
        {project.link && (
          <a className={`mono ${classes.cta}`} href={project.link} target="_blank" rel="noreferrer">
            {t.projects.open} <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectSlot({ index }: { index: number }) {
  const { t } = useLocale();
  return (
    <motion.div
      className={classes.slot}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden fill="none">
        <ellipse cx="22" cy="22" rx="10" ry="14" stroke="var(--c-latte)" strokeWidth="1.2" />
        <path d="M22 8c0 6 0 8 0 14s0 6 0 14" stroke="var(--c-latte)" strokeWidth="0.8" />
      </svg>
      <span className={`mono ${classes.slotLabel}`}>{t.projects.emptySlot}</span>
      <span className={`mono ${classes.slotHint}`}>{t.projects.emptyHint}</span>
    </motion.div>
  );
}

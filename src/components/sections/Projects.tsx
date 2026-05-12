import { useLocale } from '@/i18n/LocaleContext';
import { ProjectCard, ProjectSlot } from '@/components/ui/ProjectCard';
import { projects, EMPTY_SLOTS } from '@/data/projects';
import classes from './Projects.module.css';

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projetos" className={`section ${classes.projects}`}>
      <header className={classes.head}>
        <div className={classes.headLeft}>
          <span className={`mono ${classes.label}`}>{t.projects.label}</span>
          <h2 className={`display ${classes.title}`}>{t.projects.title}</h2>
        </div>
        <span className={`mono ${classes.subtitle}`}>{t.projects.subtitle}</span>
      </header>

      <div className={classes.list}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
        <div className={classes.slots}>
          {Array.from({ length: EMPTY_SLOTS }).map((_, i) => (
            <ProjectSlot key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

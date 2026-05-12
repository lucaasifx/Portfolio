import { useLocale } from '@/i18n/LocaleContext';
import classes from './Footer.module.css';

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className={classes.wrap}>
      <div className={classes.line} aria-hidden />
      <div className={classes.row}>
        <span className={`mono ${classes.text}`}>
          {t.footer.compiled} · {year} · {t.footer.location}
        </span>
        <span className={`mono ${classes.text} ${classes.right}`}>
          {`while (alive) { coffee(); code(); }`}
        </span>
      </div>
    </footer>
  );
}

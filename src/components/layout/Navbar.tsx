import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleContext';
import { LocaleToggle } from './LocaleToggle';
import classes from './Navbar.module.css';

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${classes.nav} ${scrolled ? classes.scrolled : ''}`}>
      <a href="#top" className={classes.logo} aria-label="Lucas Ferraz">
        <span className={`mono ${classes.bracket}`}>{'{'}</span>
        <span className={`display ${classes.name}`}>lucas<span className={classes.italic}>f.</span></span>
        <span className={`mono ${classes.bracket}`}>{'}'}</span>
      </a>

      <nav className={classes.links}>
        <a href="#sobre" className={`mono ${classes.link}`}>{t.nav.sobre}</a>
        <a href="#stack" className={`mono ${classes.link}`}>{t.nav.stack}</a>
        <a href="#projetos" className={`mono ${classes.link}`}>{t.nav.projetos}</a>
        <a href="#contato" className={`mono ${classes.link}`}>{t.nav.contato}</a>
      </nav>

      <LocaleToggle />
    </header>
  );
}

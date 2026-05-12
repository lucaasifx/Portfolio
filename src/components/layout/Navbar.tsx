import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleContext';
import { LocaleToggle } from './LocaleToggle';
import classes from './Navbar.module.css';

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`${classes.nav} ${scrolled ? classes.scrolled : ''}`}>
        <a href="#top" className={classes.logo} aria-label="Lucas Ferraz" onClick={close}>
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

        <div className={classes.actions}>
          <LocaleToggle />
          <button
            type="button"
            className={`${classes.hamburger} ${open ? classes.hamburgerOpen : ''}`}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={classes.bar} />
            <span className={classes.bar} />
            <span className={classes.bar} />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${classes.drawer} ${open ? classes.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={classes.drawerNav}>
          <a href="#sobre" className={`mono ${classes.drawerLink}`} onClick={close}>
            <span className={classes.drawerIndex}>01</span>
            {t.nav.sobre}
          </a>
          <a href="#stack" className={`mono ${classes.drawerLink}`} onClick={close}>
            <span className={classes.drawerIndex}>02</span>
            {t.nav.stack}
          </a>
          <a href="#projetos" className={`mono ${classes.drawerLink}`} onClick={close}>
            <span className={classes.drawerIndex}>03</span>
            {t.nav.projetos}
          </a>
          <a href="#contato" className={`mono ${classes.drawerLink}`} onClick={close}>
            <span className={classes.drawerIndex}>04</span>
            {t.nav.contato}
          </a>
        </nav>
      </div>

      <button
        type="button"
        className={`${classes.backdrop} ${open ? classes.backdropOpen : ''}`}
        aria-label="Fechar menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />
    </>
  );
}

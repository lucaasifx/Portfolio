import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { pt, type Dict } from './pt';
import { en } from './en';

export type Locale = 'pt' | 'en';

interface LocaleCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}

const STORAGE_KEY = 'lucasf-locale';
const Ctx = createContext<LocaleCtx | null>(null);

function loadInitial(): Locale {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  const nav = window.navigator.language.toLowerCase();
  return nav.startsWith('pt') ? 'pt' : 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(loadInitial);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const value = useMemo<LocaleCtx>(
    () => ({
      locale,
      setLocale,
      t: locale === 'pt' ? pt : en,
    }),
    [locale, setLocale],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale(): LocaleCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}

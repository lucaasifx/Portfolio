import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/layout/SectionDivider';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { ScrollProgress } from '@/components/effects/ScrollProgress';
import { CursorTrail } from '@/components/effects/CursorTrail';
import { useLocale } from '@/i18n/LocaleContext';

export function App() {
  const { t } = useLocale();

  // easter egg: console.log on load
  useEffect(() => {
    const banner = [
      '%c',
      '       )  (       ',
      '      (    )      ',
      '       )  (       ',
      '      ________    ',
      '   .-\'         \'.',
      "   |  ☕ café  |__",
      '   |             |  )',
      '    \'._________.\'_/',
      '',
      '   oi, dev curioso 👋  ·  hey, curious dev 👋',
      '   abre meu github tá? · go check my github!',
      '',
    ].join('\n');
    // eslint-disable-next-line no-console
    console.log(banner, 'color:#e08820; font-family: monospace; font-size: 12px;');
  }, []);

  // easter egg: tab title changes when window blurs
  useEffect(() => {
    const normalTitle = document.title;
    const onVis = () => {
      document.title = document.hidden ? t.hidden.awayTitle : normalTitle;
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      document.title = normalTitle;
    };
  }, [t.hidden.awayTitle]);

  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider flip />
        <Stack />
        <SectionDivider />
        <Projects />
        <SectionDivider flip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

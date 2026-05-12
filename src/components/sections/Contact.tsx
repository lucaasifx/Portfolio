import { motion } from 'motion/react';
import { notifications } from '@mantine/notifications';
import { useLocale } from '@/i18n/LocaleContext';
import { CoffeeCup } from '@/components/ui/CoffeeCup';
import { contact } from '@/data/contact';
import classes from './Contact.module.css';

export function Contact() {
  const { t } = useLocale();

  const copyEmail = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(contact.email);
      notifications.show({
        message: t.contact.copied,
        autoClose: 2400,
        color: 'amber',
        withBorder: true,
        styles: {
          root: {
            backgroundColor: 'var(--c-bean)',
            borderColor: 'var(--c-amber)',
          },
          description: {
            fontFamily: 'var(--ff-mono)',
            color: 'var(--c-crema)',
          },
        },
      });
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section id="contato" className={`section ${classes.contact}`}>
      <span className={`mono ${classes.label}`}>{t.contact.label}</span>
      <h2 className={`display ${classes.title}`}>
        {t.contact.title}{' '}
        <em className={classes.accent}>{t.contact.titleAccent}</em>
      </h2>
      <p className={classes.text}>{t.contact.text}</p>

      <div className={classes.row}>
        <ContactCup label={t.contact.emailLabel} href={`mailto:${contact.email}`} onClick={copyEmail} caption={contact.email} />
        <ContactCup label={t.contact.githubLabel} href={contact.github} caption="@lucasferraz" />
        <ContactCup label={t.contact.linkedinLabel} href={contact.linkedin} caption="lucas ferraz" />
      </div>
    </section>
  );
}

interface CupProps {
  label: string;
  href: string;
  caption: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function ContactCup({ label, href, caption, onClick }: CupProps) {
  return (
    <motion.a
      className={classes.cup}
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <CoffeeCup size={84} />
      <span className={`mono ${classes.cupLabel}`}>{`// ${label}`}</span>
      <span className={`${classes.cupCaption}`}>{caption}</span>
    </motion.a>
  );
}

import { useLocale } from '@/i18n/LocaleContext';
import { StackIngredient } from '@/components/ui/StackIngredient';
import { CoffeeCup } from '@/components/ui/CoffeeCup';
import classes from './Stack.module.css';

export function Stack() {
  const { t } = useLocale();
  const items = t.stack.items;

  return (
    <section id="stack" className={`section ${classes.stack}`}>
      <header className={classes.head}>
        <div className={classes.headLeft}>
          <span className={`mono ${classes.label}`}>{t.stack.label}</span>
          <h2 className={`display ${classes.title}`}>{t.stack.title}</h2>
        </div>
        <span className={`mono ${classes.subtitle}`}>{t.stack.subtitle}</span>
      </header>

      <div className={classes.recipe}>
        <div className={classes.col}>
          <span className={`mono ${classes.colLabel}`}>{`// ${t.stack.backendLabel}`}</span>
          <StackIngredient name={items.java.name} dose={items.java.dose} desc={items.java.desc} index={0} />
          <StackIngredient name={items.spring.name} dose={items.spring.dose} desc={items.spring.desc} index={1} />
          <StackIngredient name={items.postgres.name} dose={items.postgres.dose} desc={items.postgres.desc} index={2} />
          <StackIngredient name={items.mongo.name} dose={items.mongo.dose} desc={items.mongo.desc} index={3} />
        </div>

        <div className={classes.filterCol} aria-hidden>
          <div className={classes.filterTop}>
            <CoffeeCup size={120} withSteam />
          </div>
          <svg className={classes.filterLine} width="2" height="100%" viewBox="0 0 2 600" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="600" stroke="var(--c-bean-light)" strokeWidth="1.5" strokeDasharray="3 6" />
          </svg>
          <div className={classes.dripDot} />
          <div className={`${classes.dripDot} ${classes.d2}`} />
          <div className={`${classes.dripDot} ${classes.d3}`} />
        </div>

        <div className={`${classes.col} ${classes.colRight}`}>
          <span className={`mono ${classes.colLabel}`}>{`// ${t.stack.frontendLabel}`}</span>
          <StackIngredient name={items.react.name} dose={items.react.dose} desc={items.react.desc} index={4} />
          <StackIngredient name={items.ts.name} dose={items.ts.dose} desc={items.ts.desc} index={5} />
          <p className={`mono ${classes.note}`}>{t.stack.frontendNote}</p>
        </div>
      </div>
    </section>
  );
}

import { useMemo } from 'react';
import classes from './Marquee.module.css';

interface Props {
  text: string;
  speed?: number; // seconds for one full loop
  separator?: string;
}

export function Marquee({ text, speed = 40, separator = ' · ' }: Props) {
  const repeated = useMemo(() => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(text);
    }
    return items.join(separator + '⟶' + separator);
  }, [text, separator]);

  return (
    <div className={classes.wrap} role="presentation" aria-hidden="true">
      <div className={classes.track} style={{ animationDuration: `${speed}s` }}>
        <span className={classes.text}>{repeated}</span>
        <span className={classes.text}>{repeated}</span>
      </div>
    </div>
  );
}

import { type CSSProperties } from 'react';
import classes from './PixelAvatar.module.css';

interface Props {
  size?: number;
  style?: CSSProperties;
}

export function PixelAvatar({ size = 260, style }: Props) {
  return (
    <div
      className={classes.wrap}
      style={{ width: size, height: size, ...style }}
      role="img"
      aria-label="Lucas avatar"
    >
      <img
        src="/avatar.jpeg"
        alt=""
        className={classes.img}
        draggable={false}
      />
    </div>
  );
}

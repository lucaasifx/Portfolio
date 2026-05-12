import { type CSSProperties } from 'react';

interface Props {
  size?: number;
  style?: CSSProperties;
  withSteam?: boolean;
  strokeWidth?: number;
}

export function CoffeeCup({ size = 80, style, withSteam = true, strokeWidth = 1.6 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      {withSteam && (
        <g className="steam">
          <path
            d="M22 12c0 4 4 4 4 8"
            stroke="var(--c-crema)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M32 8c0 5 4 5 4 10"
            stroke="var(--c-crema)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M42 12c0 4 4 4 4 8"
            stroke="var(--c-crema)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>
      )}
      <path
        d="M14 28h32v14a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10V28z"
        stroke="var(--c-amber)"
        strokeWidth={strokeWidth + 0.4}
        strokeLinejoin="round"
      />
      <path
        d="M46 30h4a6 6 0 0 1 0 12h-4"
        stroke="var(--c-amber)"
        strokeWidth={strokeWidth + 0.4}
        strokeLinejoin="round"
      />
      <path
        d="M18 48c4 2 8 2 14 2s10 0 14-2"
        stroke="var(--c-ember)"
        strokeWidth={strokeWidth - 0.2}
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

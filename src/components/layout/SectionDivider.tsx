interface Props {
  flip?: boolean;
}

export function SectionDivider({ flip = false }: Props) {
  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg width="280" height="60" viewBox="0 0 280 60" fill="none">
        <path
          d="M2 30 Q 70 8, 140 30 T 278 30"
          stroke="var(--c-bean-light)"
          strokeWidth="1.2"
          strokeDasharray="2 6"
          fill="none"
        />
        <circle cx="140" cy="30" r="3" fill="var(--c-amber)" />
        <circle cx="20" cy="30" r="1.5" fill="var(--c-latte)" />
        <circle cx="260" cy="30" r="1.5" fill="var(--c-latte)" />
      </svg>
    </div>
  );
}

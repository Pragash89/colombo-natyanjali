/* Line-art emblems evoking Lord Shiva — trident, crescent moon, damaru drum, serpent, third eye, bilva leaf */

type IconProps = { className?: string; style?: React.CSSProperties };

export function Trishul({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M32 58 V22" />
      <path d="M32 22 C 24 16, 22 8, 26 4 C 27 9, 30 13, 32 15 C 34 13, 37 9, 38 4 C 42 8, 40 16, 32 22 Z" />
      <path d="M20 18 C 20 11, 24 6, 30 5" />
      <path d="M44 18 C 44 11, 40 6, 34 5" />
      <path d="M24 58 H40" />
    </svg>
  );
}

export function CrescentMoon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M40 14 A 20 20 0 1 0 40 50 A 16 16 0 1 1 40 14 Z" />
      <circle cx="46" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Damaru({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M16 14 C 16 22, 26 27, 26 32 C 26 37, 16 42, 16 50" />
      <path d="M48 14 C 48 22, 38 27, 38 32 C 38 37, 48 42, 48 50" />
      <ellipse cx="16" cy="14" rx="6" ry="3.4" />
      <ellipse cx="16" cy="50" rx="6" ry="3.4" />
      <ellipse cx="48" cy="14" rx="6" ry="3.4" />
      <ellipse cx="48" cy="50" rx="6" ry="3.4" />
      <path d="M26 32 H38" strokeDasharray="2 3" opacity=".6" />
    </svg>
  );
}

export function SerpentRing({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M32 8 C 46 8, 54 18, 54 30 C 54 44, 42 54, 30 50 C 22 47, 22 39, 28 37 C 33 35, 36 39, 33 42" />
      <path d="M30 50 C 18 50, 10 40, 10 30 C 10 18, 20 8, 32 8" strokeDasharray="0" opacity=".55" />
      <circle cx="33" cy="42" r="1.4" fill="currentColor" stroke="none" />
      <path d="M52 16 l4 -4 M50 14 l3 -4" />
    </svg>
  );
}

export function ThirdEye({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M10 32 C 18 20, 46 20, 54 32 C 46 44, 18 44, 10 32 Z" />
      <circle cx="32" cy="32" r="6" />
      <circle cx="32" cy="32" r="1.4" fill="currentColor" stroke="none" />
      <path d="M32 14 V8" />
    </svg>
  );
}

export function BilvaLeaf({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <path d="M32 6 C 20 18, 20 46, 32 58 C 44 46, 44 18, 32 6 Z" />
      <path d="M16 14 C 8 24, 8 46, 18 56" />
      <path d="M48 14 C 56 24, 56 46, 46 56" />
      <path d="M32 6 V58" opacity=".5" />
    </svg>
  );
}

import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export const ArrowRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export const Phone = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="M6.5 3.5h2.2l1.6 4-2 1.4a12 12 0 0 0 5.8 5.8l1.4-2 4 1.6v2.2a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 4 6.2 2.5 2.5 0 0 1 6.5 3.5Z" />
  </svg>
)

export const MapPin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const Clock = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
)

export const Mail = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7 7.5 5.5L19.5 7" />
  </svg>
)

export const Menu = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} {...props}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
)

export const Close = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} {...props}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
)

export const Waves = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <path d="M3 9c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.8 2" />
    <path d="M3 14c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.8 2" />
    <path d="M3 19c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.8 2" />
  </svg>
)

export const Steam = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <path d="M7 3.5c-1.6 2-.6 3.4.6 4.8 1.3 1.6 1.9 3.1.4 5" />
    <path d="M12 3.5c-1.6 2-.6 3.4.6 4.8 1.3 1.6 1.9 3.1.4 5" />
    <path d="M17 3.5c-1.6 2-.6 3.4.6 4.8 1.3 1.6 1.9 3.1.4 5" />
    <path d="M4 20h16" />
  </svg>
)

export const Dumbbell = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <path d="M3.5 9.5v5M6.5 7.5v9M17.5 7.5v9M20.5 9.5v5" />
    <path d="M6.5 12h11" />
  </svg>
)

export const Ball = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M4 9.5c4.5 1.2 11.5 1.2 16 0" />
    <path d="M4 14.5c4.5-1.2 11.5-1.2 16 0" />
  </svg>
)

export const Sparkles = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
    <path d="m18 16 .8 2.2 2.2.8-2.2.8L18 22l-.8-2.2-2.2-.8 2.2-.8L18 16Z" />
  </svg>
)

export const Users = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c.4-3.4 2.7-5.5 5.5-5.5s5.1 2.1 5.5 5.5" />
    <path d="M16 5.2a3 3 0 0 1 0 5.8" />
    <path d="M17.5 14.6c2.1.5 3.4 2.4 3.7 5.4" />
  </svg>
)

export const Accessibility = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <circle cx="12" cy="4.5" r="1.8" />
    <path d="M7 8.5h10" />
    <path d="M12 8.5V14m0 0-3.5 6M12 14l3.5 6" />
  </svg>
)

export const Ticket = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...props}>
    <path d="M3.5 8.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.2a2.3 2.3 0 0 0 0 4.6v1.2a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-1.2a2.3 2.3 0 0 0 0-4.6Z" />
    <path d="M14 7.5v9" strokeDasharray="2 2.4" />
  </svg>
)

export const Download = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="M12 4v10" />
    <path d="m8 10.5 4 4 4-4" />
    <path d="M5 19h14" />
  </svg>
)

export const Check = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
)

export const ChevronDown = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...base} {...props}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
)

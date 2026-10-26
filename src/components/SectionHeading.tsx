import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  label?: string
  title: string
  intro?: string
  aside?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ label, title, intro, aside, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex flex-wrap gap-6 ${
        align === 'center'
          ? 'flex-col items-center text-center'
          : 'items-end justify-between'
      }`}
    >
      <div className={align === 'center' ? 'max-w-2xl' : ''}>
        {label && <p className="label text-teal">{label}</p>}
        <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.03] text-ink">{title}</h2>
        {intro && (
          <p
            className={`mt-4 text-[15px] leading-relaxed text-ink/60 ${
              align === 'center' ? 'mx-auto max-w-xl' : 'max-w-xl'
            }`}
          >
            {intro}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  )
}

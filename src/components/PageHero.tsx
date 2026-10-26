import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  intro: string
  crumb: string
  image?: { src: string; alt: string }
  children?: ReactNode
}

export function PageHero({ eyebrow, title, intro, crumb, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-field pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="shell pt-10 pb-12 lg:pt-14 lg:pb-16">
        <nav aria-label="Asukoht" className="text-[12.5px] text-ink/60">
          <Link to="/" className="transition-colors hover:text-teal">
            Avaleht
          </Link>
          <span className="mx-2 text-ink/25">/</span>
          <span className="text-ink/70">{crumb}</span>
        </nav>

        <div
          className={`mt-8 grid items-end gap-10 ${image ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}
        >
          <div>
            <Reveal>
              <p className="label text-teal">{eyebrow}</p>
              <h1 className="mt-4 max-w-[19ch] text-[clamp(2.3rem,5.2vw,4rem)] leading-[0.98] text-ink">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/65">{intro}</p>
            </Reveal>
            {children}
          </div>

          {image && (
            <Reveal delay={120} className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-ink/8 bg-mist">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div
                className="pointer-events-none absolute -bottom-4 -left-4 size-24 rounded-full bg-aqua/40 blur-2xl"
                aria-hidden="true"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

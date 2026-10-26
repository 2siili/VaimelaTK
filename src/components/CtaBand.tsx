import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowRight, Phone } from './icons'
import { Reveal } from './Reveal'

type CtaBandProps = {
  label?: string
  title: string
  text: string
  linkTo?: string
  linkLabel?: string
}

export function CtaBand({
  label = 'Tule külla',
  title,
  text,
  linkTo = '/kontakt',
  linkLabel = 'Vaata kontakti',
}: CtaBandProps) {
  return (
    <section className="shell py-16 lg:py-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-deep px-6 py-12 text-cream sm:px-10">
        <div
          className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-aqua/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label text-aqua">{label}</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.03] text-cream">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-cream/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn btn-light">
              <Phone width={16} height={16} />
              {site.phone}
            </a>
            <Link
              to={linkTo}
              className="btn border border-cream/30 text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              {linkLabel}
              <ArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

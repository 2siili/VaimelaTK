import { Link } from 'react-router-dom'
import { documents, formatMinutes, hours, site } from '../data/site'
import { Mail, MapPin, Phone } from './icons'

const serviceLinks = [
  { to: '/ujula', label: 'Ujula' },
  { to: '/saunad', label: 'Saunad' },
  { to: '/jousaal', label: 'Jõusaal' },
  { to: '/sport', label: 'Lauatennis ja squash' },
  { to: '/sport#sunnipaevad', label: 'Laste sünnipäevad' },
  { to: '/sport#solaarium', label: 'Solaarium' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-deep text-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full bg-aqua/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/img/vaimela-mark.png" alt="" className="h-10 w-auto brightness-0 invert" />
              <span className="leading-none">
                <span className="block font-display text-lg tracking-tight">Väimela</span>
                <span className="label mt-1 block text-[8.5px] text-aqua">Tervisekeskus</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-cream/70">
              Ujumine, saun ja treening ühe katuse all — Võru linna lähedal, Väimela alevikus.
              Avatud iga päev.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-aqua hover:text-cream"
            >
              <Phone width={14} height={14} />
              Info ja broneerimine: {site.phone}
            </a>
          </div>

          <nav aria-label="Teenused">
            <h2 className="label text-cream/50">Teenused</h2>
            <ul className="mt-5 space-y-2.5 text-[14.5px]">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-cream/80 transition-colors hover:text-aqua">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-cream/50">Info</h2>
            <ul className="mt-5 space-y-2.5 text-[14.5px]">
              <li>
                <Link to="/hinnakiri" className="text-cream/80 transition-colors hover:text-aqua">
                  Hinnakiri
                </Link>
              </li>
              {documents.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/80 transition-colors hover:text-aqua"
                  >
                    {doc.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.perekaartUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/80 transition-colors hover:text-aqua"
                >
                  Perekaart
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label text-cream/50">Kontakt</h2>
            <ul className="mt-5 space-y-3 text-[14.5px] text-cream/80">
              <li className="flex gap-2.5">
                <MapPin width={16} height={16} className="mt-0.5 shrink-0 text-aqua" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.village}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-aqua">
                  <Phone width={16} height={16} className="shrink-0 text-aqua" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-2.5 hover:text-aqua">
                  <Mail width={16} height={16} className="shrink-0 text-aqua" />
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-cream/15 p-4">
              <h3 className="label text-[9.5px] text-cream/45">Lahtiolekuajad</h3>
              <dl className="mt-3 space-y-1 text-[13px]">
                {hours.map((day) => (
                  <div key={day.weekday} className="flex justify-between gap-4">
                    <dt className="text-cream/60">{day.short}</dt>
                    <dd className="font-medium tabular-nums text-cream/85">
                      {formatMinutes(day.open)}–{formatMinutes(day.close)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-[12.5px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Väimela Tervisekeskus · Registrikood {site.registryCode} · Võru vald
          </p>
          <p>
            Fotod: Pexels · Küsimused ja broneerimine:{' '}
            <a href={site.phoneHref} className="text-cream/70 hover:text-aqua">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

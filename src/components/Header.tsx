import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useOpenState } from '../hooks/useOpenState'
import { site } from '../data/site'
import { Close, Menu, Phone } from './icons'

const navItems = [
  { to: '/', label: 'Avaleht' },
  { to: '/ujula', label: 'Ujula' },
  { to: '/saunad', label: 'Saunad' },
  { to: '/jousaal', label: 'Jõusaal' },
  { to: '/sport', label: 'Sport' },
  { to: '/hinnakiri', label: 'Hinnakiri' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const open = useOpenState()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-deep text-cream">
        <div className="shell flex items-center justify-between gap-4 py-2 text-[12.5px]">
          <p className="flex min-w-0 items-center gap-2">
            <span
              className={`size-1.5 shrink-0 rounded-full ${open.open ? 'bg-aqua' : 'bg-sun'}`}
              aria-hidden="true"
            />
            <span className="truncate font-semibold">{open.text}</span>
            <span className="hidden truncate text-cream/60 sm:inline">· {open.detail}</span>
          </p>
          <div className="flex shrink-0 items-center gap-4 text-cream/80">
            <a
              href={site.emailHref}
              className="hidden transition-colors hover:text-aqua md:inline"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-cream transition-colors hover:text-aqua"
            >
              <Phone width={14} height={14} />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-ink/10 bg-cream/95 shadow-[0_10px_30px_-24px_rgba(8,33,31,0.6)] backdrop-blur-md'
            : 'border-transparent bg-cream'
        }`}
      >
        <div className="shell flex items-center justify-between gap-6 py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Väimela Tervisekeskus, avaleht">
            <img
              src="/img/vaimela-mark.png"
              alt=""
              width={128}
              height={70}
              className="h-9 w-auto"
            />
            <span className="leading-none">
              <span className="block font-display text-[17px] leading-none tracking-tight">
                Väimela
              </span>
              <span className="label mt-1 block text-[8.5px] text-teal">Tervisekeskus</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Peamenüü">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-[14px] font-semibold transition-colors ${
                    isActive ? 'text-deep' : 'text-ink/65 hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-teal transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="btn btn-primary hidden px-4! py-2.5! text-[13px]! sm:inline-flex"
            >
              <Phone width={15} height={15} />
              {site.phone}
            </a>
            <Link
              to="/hinnakiri"
              className="btn btn-outline hidden px-4! py-2.5! text-[13px]! md:inline-flex lg:hidden xl:inline-flex"
            >
              Hinnakiri
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink/15 text-deep lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Sulge menüü' : 'Ava menüü'}
            >
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-0 z-40 h-[100dvh] overflow-y-auto bg-deep text-cream lg:hidden"
      >
        <div className="shell flex h-full flex-col pb-10 pt-4">
          <div className="flex items-center justify-between">
            <span className="label text-aqua">Menüü</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-cream/25"
              aria-label="Sulge menüü"
            >
              <Close />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Mobiilimenüü">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `border-b border-cream/10 py-3 font-display text-[clamp(1.6rem,7vw,2.3rem)] leading-tight tracking-tight transition-colors ${
                    isActive ? 'text-aqua' : 'text-cream/90'
                  }`
                }
              >
                <span className="mr-3 align-middle font-sans text-[11px] font-semibold text-cream/35">
                  0{index + 1}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-10 text-sm">
            <p className="text-cream/70">{open.detail}</p>
            <div className="flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-light">
                <Phone width={16} height={16} />
                {site.phone}
              </a>
              <a href={site.emailHref} className="btn border border-cream/30 text-cream">
                {site.email}
              </a>
            </div>
            <p className="text-[13px] text-cream/55">
              {site.address.street} · {site.address.village}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

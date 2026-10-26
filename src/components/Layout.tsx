import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

const titles: Record<string, string> = {
  '/': 'Väimela Tervisekeskus — ujula, saunad ja jõusaal Võrumaal',
  '/ujula': 'Ujula — Väimela Tervisekeskus',
  '/saunad': 'Saunad — Väimela Tervisekeskus',
  '/jousaal': 'Jõusaal — Väimela Tervisekeskus',
  '/sport': 'Lauatennis, squash ja sünnipäevad — Väimela Tervisekeskus',
  '/hinnakiri': 'Hinnakiri — Väimela Tervisekeskus',
  '/kontakt': 'Kontakt — Väimela Tervisekeskus',
}

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'Väimela Tervisekeskus'

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

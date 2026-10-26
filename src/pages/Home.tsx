import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { OpeningHoursCard } from '../components/PriceList'
import { useOpenState } from '../hooks/useOpenState'
import { events, notices, priceHighlights, site } from '../data/site'
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Ball,
  Check,
  Clock,
  Dumbbell,
  MapPin,
  Phone,
  Sparkles,
  Steam,
  Ticket,
  Waves,
} from '../components/icons'

const services = [
  {
    to: '/ujula',
    title: 'Ujula',
    tag: '25 meetrit · 4 rada',
    text: 'Ujumisbassein ja soe lastebassein, mullivann ning treeneritega ujumistunnid.',
    image: '/img/pool-lanes.jpg',
    icon: Waves,
  },
  {
    to: '/saunad',
    title: 'Saunad',
    tag: 'Puuküte · peresaunad',
    text: 'Rahvasaun laupäeviti, peresaunad ja aurusaun ettetellimisel.',
    image: '/img/sauna.jpg',
    icon: Steam,
  },
  {
    to: '/jousaal',
    title: 'Jõusaal',
    tag: 'Jõud · kardio',
    text: 'Jõumasinad, vabakoormused ja kardiotrenažöörid kahel korrusel.',
    image: '/img/gym.jpg',
    icon: Dumbbell,
  },
  {
    to: '/sport',
    title: 'Lauatennis ja squash',
    tag: 'Mängi · treeni',
    text: 'Lauatennise- ja squashisaal, aeroobikasaal ning laste sünnipäevad.',
    image: '/img/tabletennis.jpg',
    icon: Ball,
  },
]

const marqueeItems = [
  'Ujumisbassein 25 m',
  'Lastebassein 32,5 °C',
  'Mullivann',
  'Puuküttega rahvasaun',
  'Peresaunad',
  'Jõusaal',
  'Lauatennis',
  'Squash',
  'Aeroobikasaal',
  'Solaarium',
]

const stats = [
  { value: '25', unit: 'm', label: 'basseini pikkus' },
  { value: '4', unit: 'rada', label: 'ujumisbasseinis' },
  { value: '27–28', unit: '°C', label: 'vee temperatuur' },
  { value: '7', unit: 'päeva', label: 'avatud nädalas' },
]

export function Home() {
  const open = useOpenState()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="glow-field pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="shell grid gap-12 pt-10 pb-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14 lg:pt-16 lg:pb-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-[12.5px] font-semibold text-teal">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-teal/10">
                  <Waves width={14} height={14} />
                </span>
                Võrumaa · Väimela alevik
              </p>
              <h1 className="mt-6 text-[clamp(2.6rem,5.9vw,4.6rem)] leading-[0.94] text-ink">
                Vesi, soojus ja{' '}
                <span className="relative inline-block text-teal">
                  liikumine
                  <svg
                    viewBox="0 0 300 14"
                    className="absolute -bottom-1 left-0 w-full text-aqua"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9c48-7 96-7 144-2s100 3 152-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                ühe katuse all.
              </h1>
              <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink/65">
                25-meetrine ujumisbassein, soe lastebassein, puuküttega saun ja jõusaal — kõik ühes
                majas, vaid mõne minuti kaugusel Võru kesklinnast.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/hinnakiri" className="btn btn-primary">
                  Vaata hinnakirja
                  <ArrowRight />
                </Link>
                <a href={site.phoneHref} className="btn btn-outline">
                  <Phone width={16} height={16} />
                  Broneeri: {site.phone}
                </a>
              </div>

              <dl className="mt-11 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="font-display text-[1.75rem] leading-none tracking-tight text-deep">
                        {stat.value}
                      </span>
                      <span className="ml-1 text-[13px] font-semibold text-teal">{stat.unit}</span>
                      <span className="mt-1.5 block text-[12px] leading-snug text-ink/60">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-ink/10">
              <img
                src="/img/hero-pool.jpg"
                alt="Väimela Tervisekeskuse sisebassein"
                width={2000}
                height={1250}
                className="aspect-[4/3.6] w-full object-cover sm:aspect-[4/3.1] lg:aspect-[4/4]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-deep/60 via-deep/5 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-cream/90 px-3.5 py-2 text-[11.5px] font-semibold text-deep backdrop-blur">
                <span
                  className={`size-2 rounded-full ${open.open ? 'bg-teal' : 'bg-sun'}`}
                  aria-hidden="true"
                />
                {open.open ? 'Praegu avatud' : 'Praegu suletud'}
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-cream/92 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="label text-[8.5px] text-teal">Täna</p>
                    <p className="mt-1 font-display text-[1.15rem] leading-none tracking-tight text-ink">
                      {open.text}
                    </p>
                    <p className="mt-1.5 text-[11.5px] text-ink/60">{open.detail}</p>
                  </div>
                  <Link
                    to="/kontakt"
                    className="link-arrow rounded-full bg-deep px-4 py-2.5 text-[12.5px] text-cream transition-colors hover:bg-teal"
                  >
                    Tule kohale
                    <ArrowUpRight width={15} height={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Teenuste riba */}
      <div className="marquee relative flex overflow-hidden border-y border-ink/10 bg-deep py-3.5 text-cream">
        <div className="marquee-track flex shrink-0 items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-6 whitespace-nowrap pr-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream/85"
                >
                  <span className="size-1 rounded-full bg-aqua/80" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Teenused */}
      <section className="shell py-20 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-teal">Teenused</p>
            <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,4vw,3.1rem)] leading-[1.02] text-ink">
              Leia oma rütm meie majas
            </h2>
          </div>
          <Link to="/hinnakiri" className="link-arrow text-deep hover:text-teal">
            Kogu hinnakiri
            <ArrowRight />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.to} delay={index * 80}>
                <Link
                  to={service.to}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-ink/10 bg-white/70 transition-colors hover:border-teal/40"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-2.5 py-1 text-[10.5px] font-semibold text-deep backdrop-blur">
                      <Icon width={13} height={13} className="text-teal" />
                      {service.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[1.35rem] leading-none tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/60">{service.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal">
                      Vaata lähemalt
                      <ArrowRight
                        width={15}
                        height={15}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Lahtiolekuajad + teated */}
      <section className="relative overflow-hidden bg-mist/70 py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="label text-teal">Info</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-ink">
              Avatud iga päev, aastaringi
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink/65">
              Uksed on avatud nii varahommikul ujujale kui hilisõhtul saunatajale. Vaata, millal
              täna tulles tasub arvestada piletimüügi lõpuga.
            </p>
            <div className="mt-7">
              <OpeningHoursCard />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-[1.4rem] tracking-tight text-ink">Teated ja meelespead</h2>
              <Link to="/kontakt" className="link-arrow hidden text-[13px] text-deep hover:text-teal sm:flex">
                Kontakt
                <ArrowRight width={15} height={15} />
              </Link>
            </div>

            <ul className="mt-5 space-y-3">
              {notices.map((notice) => (
                <li
                  key={notice.title}
                  className="group rounded-2xl border border-ink/8 bg-cream/80 p-5 transition-colors hover:border-teal/35"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="label rounded-full bg-teal/10 px-2.5 py-1 text-[8.5px] text-teal">
                      {notice.tag}
                    </span>
                    <span className="text-[11.5px] font-medium text-ink/40">{notice.meta}</span>
                  </div>
                  <h3 className="mt-2.5 font-display text-[1.15rem] leading-snug tracking-tight text-ink">
                    {notice.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{notice.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-teal/20 bg-teal/8 p-5">
              <Check width={18} height={18} className="mt-0.5 shrink-0 text-teal" />
              <p className="text-[13.5px] leading-relaxed text-ink/70">
                <strong className="font-semibold text-ink">Parkimine ja ligipääs.</strong> Parklad on
                renoveeritud ja klientidele avatud. Liikumisraskustega külastajatele on kaldteed ning
                trepi- ja basseinitõstuk.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hinnad */}
      <section className="shell py-20 lg:py-24">
        <Reveal className="text-center">
          <p className="label text-teal">Hinnad</p>
          <h2 className="mx-auto mt-3 max-w-[20ch] text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-ink">
            Ausad hinnad, selged piletid
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priceHighlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-white/70 p-6">
                <p className="label text-[9px] text-teal">{item.label}</p>
                <p className="mt-6 font-display text-[2.6rem] leading-none tracking-tight text-deep">
                  {item.value}
                </p>
                <p className="mt-3 text-[12.5px] leading-snug text-ink/60">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-ink/10 bg-sand/60 p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-ink/65">
            <strong className="font-semibold text-ink">Sooduspilet</strong> kehtib õpilastele vanuses
            7–18 aastat, pensionäridele ja puuetega inimestele. Kahele kuni 6-aastasele lapsele on
            koos pileti ostnud täiskasvanuga külastus tasuta.
          </p>
          <Link to="/hinnakiri" className="btn btn-primary shrink-0 py-3! text-[13.5px]!">
            Kogu hinnakiri
            <ArrowRight width={16} height={16} />
          </Link>
        </Reveal>
      </section>

      {/* Ujumissari */}
      <section className="shell pb-20 lg:pb-24">
        <Reveal className="overflow-hidden rounded-[2rem] border border-ink/10">
          <div className="relative">
            <img
              src="/img/vaimela-ujula.jpg"
              alt="Ujumisvõistlus Väimela Tervisekeskuse basseinis"
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[320px]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/70 to-deep/20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
              <p className="label text-aqua">Sündmused</p>
              <h2 className="mt-3 max-w-[22ch] text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.03] text-cream">
                Võru maakonna ujumissari 2026
              </h2>
              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-cream/75">
                Kuus etappi, kus selguvad maakonna parimad ujujad. Võistlused toimuvad meie
                25-meetrises basseinis — tule kaasa elama!
              </p>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-0 bg-white/70 p-6 sm:grid-cols-2 sm:p-8">
            {events.map((event) => (
              <div
                key={event.stage}
                className="flex items-start gap-5 border-t border-ink/8 py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
              >
                <div className="w-20 shrink-0">
                  <p className="label text-[8.5px] text-teal">{event.stage}</p>
                  <p className="mt-1 font-display text-[1.05rem] leading-tight tracking-tight text-ink">
                    {event.date}
                  </p>
                  <p className="mt-0.5 text-[11.5px] font-semibold text-ink/40">{event.time}</p>
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-ink/85">{event.program}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink/60">{event.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ligipääsetavus */}
      <section className="border-y border-ink/8 bg-mist/60 py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="label text-teal">Ligipääsetavus</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Kõik on oodatud — ka ratastooliga
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink/60">
              Hoone on ligipääsetav liikumisraskustega külastajatele. Vajadusel aitab personal
              basseini ja treppide juures.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Accessibility, title: 'Kaldteed', text: 'Sissepääs ja korrustevaheline liikumine' },
              { icon: Waves, title: 'Basseinitõstuk', text: 'Vette minekuks ja väljumiseks' },
              { icon: Clock, title: 'Rahulikud ajad', text: 'Küsi kassast väiksema koormusega aegu' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-ink/8 bg-cream/70 p-5">
                    <Icon width={22} height={22} className="text-teal" />
                    <h3 className="mt-3 font-display text-[1.05rem] tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/60">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="shell py-20 lg:py-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-deep px-6 py-12 text-cream sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-aqua/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="label text-aqua">Tule külla</p>
              <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.2vw,3.2rem)] leading-[1] text-cream">
                Väike samm Võrust — suur samm tervise poole
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/70">
                {site.address.street}, {site.address.village}, {site.address.city}. Info ja
                peresaunade broneerimine telefonil {site.phone}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="btn btn-light">
                  <Phone width={16} height={16} />
                  {site.phone}
                </a>
                <Link
                  to="/kontakt"
                  className="btn border border-cream/30 text-cream hover:border-cream/60 hover:bg-cream/5"
                >
                  <MapPin width={16} height={16} />
                  Vaata kaardil
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: Ticket, label: 'Piletid', value: 'Kassas kaardiga või sularahas' },
                { icon: Sparkles, label: 'Perekaart', value: 'Soodushinnad perekaardi omanikele' },
                { icon: Clock, label: 'Täna', value: `${open.text} · ${open.detail}` },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-cream/15 p-4"
                  >
                    <Icon width={18} height={18} className="mt-0.5 shrink-0 text-aqua" />
                    <div>
                      <p className="label text-[8.5px] text-cream/45">{item.label}</p>
                      <p className="mt-1 text-[13px] leading-snug text-cream/80">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

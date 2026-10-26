import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PriceCard } from '../components/PriceList'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { WeekTimetable } from '../components/WeekTimetable'
import { priceGroups, site, trainers } from '../data/site'
import { ArrowUpRight, Check, Mail, Waves } from '../components/icons'

const pools = [
  {
    title: 'Ujumisbassein',
    badge: '25 meetrit',
    image: '/img/hero-pool.jpg',
    specs: [
      ['Pikkus', '25 m'],
      ['Radu', '4'],
      ['Sügavus', '100–190 cm'],
      ['Vesi', '27–28 °C'],
    ],
    text: 'Sobib aktiivseks ujumiseks ja veemõnude nautimiseks. Redelitel on mugavad astmed.',
  },
  {
    title: 'Lastebassein',
    badge: '32,5 °C',
    image: '/img/water-detail.jpg',
    specs: [
      ['Sügavus', '30–80 cm'],
      ['Vesi', '32,5 °C'],
      ['Sobib', 'Väikelastele'],
    ],
    text: 'Soe ja madal bassein, kus ka kõige väiksemad ujujad end kindlalt tunnevad.',
  },
]

const rules = [
  'Pese enne ujumist keha paljalt, ilma ujumisriieteta.',
  'Eemalda kehalt kõik plaastrid enne vette minekut.',
  'Kasuta basseinis ujumismütsi — nii lastel kui täiskasvanutel.',
]

export function Ujula() {
  const poolPrices = priceGroups.find((group) => group.id === 'ujula')!

  return (
    <>
      <PageHero
        eyebrow="Ujula"
        crumb="Ujula"
        title="Kaks basseini, mullivann ja soe vesi aastaringi"
        intro="Väimela Tervisekeskuses on 25-meetrine ujumisbassein aktiivseks ujumiseks ning soe lastebassein väiksematele veehuvilistele. Mullivann on kasutamiseks broneeritud aegadel."
        image={{ src: '/img/pool-wide.jpg', alt: 'Vaade Väimela Tervisekeskuse basseinile' }}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {['25 m · 4 rada', 'Vesi 27–28 °C', 'Lastebassein 32,5 °C', 'Mullivann'].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-ink/12 bg-white/60 px-3.5 py-1.5 text-[12px] font-semibold text-ink/65"
            >
              {chip}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="shell pb-16 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {pools.map((pool, index) => (
            <Reveal
              key={pool.title}
              delay={index * 80}
              className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70"
            >
              <img
                src={pool.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-[1.3rem] tracking-tight text-ink">{pool.title}</h2>
                  <span className="label rounded-full bg-teal/10 px-2.5 py-1 text-[8.5px] text-teal">
                    {pool.badge}
                  </span>
                </div>
                <dl className="mt-4 space-y-2">
                  {pool.specs.map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-baseline justify-between gap-4 border-t border-ink/8 pt-2 text-[13px]"
                    >
                      <dt className="text-ink/60">{key}</dt>
                      <dd className="font-semibold tabular-nums text-ink/85">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[13px] leading-relaxed text-ink/60">{pool.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={160} className="flex flex-col justify-between rounded-[1.75rem] border border-teal/25 bg-deep p-6 text-cream">
            <div>
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-cream/10">
                <Waves width={22} height={22} className="text-aqua" />
              </span>
              <h2 className="mt-5 font-display text-[1.3rem] tracking-tight">Mullivann</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cream/70">
                Mullivanni saab kasutada broneeringu ajal suures või lastebasseinis. Lapsed võivad
                mullivanni kasutada ainult täiskasvanu juuresolekul ja vastutusel.
              </p>
            </div>
            <p className="mt-6 rounded-xl border border-cream/15 p-4 text-[12.5px] leading-relaxed text-cream/60">
              Broneeri aeg telefonil{' '}
              <a href={site.phoneHref} className="font-semibold text-cream hover:text-aqua">
                {site.phone}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-mist/60 py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="label text-teal">Enne vette minekut</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Kolm lihtsat reeglit
            </h2>
            <ol className="mt-6 space-y-4">
              {rules.map((rule, index) => (
                <li key={rule} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-deep text-[12px] font-bold text-cream">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-[14.5px] leading-relaxed text-ink/70">{rule}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <h3 className="font-display text-[1.15rem] tracking-tight text-ink">
                Ujumismüts on kohustuslik
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Mütsi kandmine on vajalik kõigile — meestele, naistele ja lastele, sõltumata juuste
                pikkusest. Ujumismütsi saad osta tervisekeskuse kassast või spordipoodidest.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <h3 className="font-display text-[1.15rem] tracking-tight text-ink">
                Tasuda saab kaardiga või sularahas
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Kümne korra kaart on nimeline ja kehtib kaks kuud. Sooduspileti ostmisel võib
                teenindaja küsida soodustust tõendavat dokumenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeekTimetable />

      <section className="shell py-16 lg:py-20">
        <SectionHeading
          label="Hinnad"
          title="Ujumise ja veeharrastuste hinnad"
          intro="Ujumise kestus on 45 minutit. Ujumine ja saun sisaldab tervisekeskuses viibimist kuni kaks tundi."
          aside={
            <span className="rounded-full border border-ink/12 px-3.5 py-1.5 text-[12px] font-semibold text-ink/60">
              Kehtivad alates 01.01.2026
            </span>
          }
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <PriceCard group={poolPrices} />
          <Reveal delay={100} className="rounded-[1.5rem] border border-teal/25 bg-deep p-6 text-cream sm:p-8">
            <h3 className="font-display text-[1.3rem] tracking-tight">Hea teada</h3>
            <ul className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-cream/75">
              {[
                'Perepilet kehtib kuni kahele täiskasvanule ja lastele.',
                'Kahele kuni 6-aastasele lapsele on koos pileti ostnud täiskasvanuga külastus tasuta.',
                'Koolidele ja lasteaedadele kehtivad raja broneerimisel soodushinnad.',
                'Vesiaeroobika ja ujumistreeningud toimuvad treeneri juhendamisel.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check width={16} height={16} className="mt-1 shrink-0 text-aqua" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-16 lg:pb-20">
        <SectionHeading
          label="Treenerid"
          title="Ujumisõpetus kogenud treeneritega"
          intro="Algõpetus ja ujumistreeningud lastele ning täiskasvanutele, samuti vesiaeroobika. Treeningud toimuvad Virmar spordiühingu korraldusel."
          aside={
            <a
              href="https://www.virmar.ee"
              target="_blank"
              rel="noreferrer"
              className="link-arrow text-deep hover:text-teal"
            >
              Treeningute ajad virmar.ee-s
              <ArrowUpRight />
            </a>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 90} className="card p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-full bg-mist font-display text-[1.1rem] font-semibold text-deep">
                  {trainer.initials}
                </span>
                <div>
                  <h3 className="font-display text-[1.25rem] leading-tight tracking-tight text-ink">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-[12.5px] font-semibold text-teal">{trainer.role}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-[13px] leading-relaxed text-ink/60">
                {trainer.facts.map((fact) => (
                  <li key={fact} className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-teal/60" aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 border-t border-ink/8 pt-4 text-[12.5px]">
                <a
                  href={`mailto:${trainer.email}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-deep hover:text-teal"
                >
                  <Mail width={14} height={14} />
                  {trainer.email}
                </a>
                {trainer.website && (
                  <a
                    href={trainer.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-deep hover:text-teal"
                  >
                    <ArrowUpRight width={14} height={14} />
                    Koduleht
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tule ujuma — vesi ootab"
        text="Üksikpilet, kümne korra kaart või perepilet. Küsi nõu kassast ja broneeri peresaun samal ajal."
        linkTo="/hinnakiri"
        linkLabel="Kogu hinnakiri"
      />
    </>
  )
}

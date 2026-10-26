import { PageHero } from '../components/PageHero'
import { PriceCard } from '../components/PriceList'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { priceGroups, site } from '../data/site'
import { ArrowUpRight, Check, Download, Ticket, Users } from '../components/icons'

export function Hinnakiri() {
  return (
    <>
      <PageHero
        eyebrow="Hinnakiri"
        crumb="Hinnakiri crumb"
        title="Selged hinnad"
        intro="Väimela Tervisekeskuse teenuste hinnad alates 1. jaanuarist 2026. Hinnad sisaldavad käibemaksu. Tasuda saab kaardiga või sularahas."
      >
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="/docs/hinnakiri-2026.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            <Download width={16} height={16} />
            Laadi PDF hinnakiri alla
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            Küsi lisainfot: {site.phone}
          </a>
        </div>

        <nav aria-label="Hinnakirja jaod" className="mt-8 flex flex-wrap gap-2">
          {priceGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-ink/12 bg-white/60 px-3.5 py-1.5 text-[12px] font-semibold text-ink/60 transition-colors hover:border-teal/40 hover:text-deep"
            >
              {group.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="shell pb-10">
        <Reveal className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Ticket,
              title: 'Täispilet ja sooduspilet',
              text: 'Kui hinnas on kaks väärtust, on esimene täispilet ja teine sooduspilet.',
            },
            {
              icon: Users,
              title: 'Sooduspilet kehtib',
              text: 'Õpilastele vanuses 7–18 aastat, pensionäridele ja puuetega inimestele.',
            },
            {
              icon: Check,
              title: '10× kaardid',
              text: 'Nimelised ja kehtivad kaks kuud ostmise päevast või kuni hooaja lõpuni (kui hooaja lõpuni vähem kui 2 kuud). Ei ole ülekantavad.',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border border-ink/8 bg-white/60 p-5">
                <Icon width={20} height={20} className="text-teal" />
                <h2 className="mt-3 text-[13.5px] font-semibold text-ink">{item.title}</h2>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/60">{item.text}</p>
              </div>
            )
          })}
        </Reveal>
      </section>

      <section className="shell pb-16">
        <div className="grid items-start gap-5 lg:grid-cols-2">
          {priceGroups.map((group, index) => (
            <Reveal key={group.id} delay={(index % 2) * 80}>
              <PriceCard group={group} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 rounded-2xl border border-ink/10 bg-sand/50 p-6">
          <p className="text-[12.5px] leading-relaxed text-ink/60">
            <strong className="font-semibold text-ink">Märkus.</strong> Koos täiskasvanuga, kes on
            ostnud pileti, on kahele kuni 6-aastasele lapsele tervisekeskuse teenuste kasutamine
            tasuta (v.a perepilet ja laste sünnipäevad). Alates kolmandast kaasasolevast lapsest
            kehtib sooduspileti hind. Ruumide, basseini ja staadioni rent üritusteks kokkuleppel.
            Sooduspileti ostmisel võib teenindaja küsida soodustust tõendavat dokumenti.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-16">
        <Reveal className="grid gap-8 overflow-hidden rounded-[2rem] border border-teal/20 bg-mist/70 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="label text-teal">Perekaart</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Soodushinnad perekaardi omanikele
            </h2>
            <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/65">
              Väimela Tervisekeskus on liitunud Eesti Lasterikaste Perede Liidu PEREKAARDI
              süsteemiga. Näita kaarti kassas ja saa teenustest soodustust.
            </p>
            <a
              href={site.perekaartUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-6"
            >
              Vaata perekaardi tingimusi
              <ArrowUpRight width={16} height={16} />
            </a>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6">
            <img
              src="/img/vaimela-logo.png"
              alt="Väimela Tervisekeskuse logo"
              className="mx-auto h-28 w-auto opacity-90"
            />
            <p className="mt-4 text-center text-[12.5px] leading-relaxed text-ink/60">
              Hinnakirja muudatused jõustuvad alates 01.01.2026. Võru Vallavalitsuse korraldus nr
              698, 21.10.2025.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Küsimus hinna või pileti kohta?"
        text="Kassa aitab valida sobiva pileti ja selgitada soodustuste kehtivust."
        linkTo="/kontakt"
        linkLabel="Kontakt"
      />
    </>
  )
}

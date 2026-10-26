import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PriceCard } from '../components/PriceList'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { priceGroups, site } from '../data/site'
import { Check, Clock, Phone, Steam, Ticket } from '../components/icons'

const privateSaunas = [
  {
    title: 'Väike peresaun',
    price: '12 €',
    unit: '/ tund',
    text: 'Hubane saun väiksemale seltskonnale.',
  },
  {
    title: 'Suur peresaun',
    price: '16 €',
    unit: '/ tund',
    text: 'Rohkem ruumi suuremale perele või sõpruskonnale.',
  },
  {
    title: 'Elektrisaun',
    price: '20 €',
    unit: '/ tund',
    text: '1–6 inimesele, väljaspool üldkasutatavat aega.',
  },
  {
    title: 'Aurusaun',
    price: '20 €',
    unit: '/ tund',
    text: '1–6 inimesele, väljaspool üldkasutatavat aega.',
  },
]

export function Saunad() {
  const saunaPrices = priceGroups.find((group) => group.id === 'saunad')!

  return (
    <>
      <PageHero
        eyebrow="Saunad"
        crumb="Saunad"
        title="Soojus, mis lõdvestab keha ja rahustab mõtte"
        intro="Puuküttega rahvasaun igal laupäeval, peresaunad ettetellimisel ning aurusaun ja elektrisaun, mida saab broneerida väljaspool üldkasutatavat aega."
        image={{ src: '/img/sauna.jpg', alt: 'Soe puitlaudadega saunaruum' }}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {['Rahvasaun laupäeviti', 'Peresaunad 12–16 €/h', 'Auru- ja elektrisaun', 'Broneeri: 787 4247'].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-ink/12 bg-white/60 px-3.5 py-1.5 text-[12px] font-semibold text-ink/65"
              >
                {chip}
              </span>
            ),
          )}
        </div>
      </PageHero>

      <section className="shell pb-16 lg:pb-20">
        <Reveal className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/70 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[300px]">
            <img
              src="/img/sauna-window.jpg"
              alt="Saunaruum, kus aknast avaneb vaade loodusele"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1.5 text-[11px] font-semibold text-deep backdrop-blur">
              <Steam width={14} height={14} className="text-teal" />
              Puuküttega
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <p className="label text-teal">Rahvasaun</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.05] text-ink">
              Laupäevane rahvasaun kella 14–20
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/65">
              Igal laupäeval kütame puuküttega rahvasauna. Pilet sisaldab ujumist basseinides, kus
              saad vaheldumisi leili ja jahedat vett nautida. Sissepääs kuni kella 19.00.
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-ink/10 p-4">
                <dt className="label text-[8.5px] text-ink/60">Toimumisaeg</dt>
                <dd className="mt-1.5 text-[14px] font-semibold text-ink">Laupäeviti 14.00–20.00</dd>
                <dd className="mt-0.5 text-[11.5px] text-ink/60">Sissepääs kuni 19.00</dd>
              </div>
              <div className="rounded-xl border border-ink/10 p-4">
                <dt className="label text-[8.5px] text-ink/60">Pilet</dt>
                <dd className="mt-1.5 text-[14px] font-semibold text-ink">7,50 € / 6 €</dd>
                <dd className="mt-0.5 text-[11.5px] text-ink/60">Täispilet / sooduspilet</dd>
              </div>
            </dl>

            <p className="mt-5 rounded-xl bg-mist/70 p-4 text-[12.5px] leading-relaxed text-ink/60">
              Ujumise kestus on 45 minutit ja tervisekeskuses viibimise aeg kuni kaks tundi.
              Muudatustest saunade lahtiolekuaegades annab tervisekeskus teada kodulehel ja
              Facebookis.
            </p>

            <a href={site.phoneHref} className="btn btn-primary mt-6">
              <Phone width={16} height={16} />
              Info: {site.phone}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-16 lg:pb-20">
        <SectionHeading
          label="Ettetellimisel"
          title="Peresaunad kogu perele"
          intro="Peresaunu saab kasutada tervisekeskuse lahtioleku aegadel ettetellimisel. Broneerimine telefonil 787 4247. Ujumine peresauna kasutajale on 3 eurot."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {privateSaunas.map((sauna, index) => (
            <Reveal key={sauna.title} delay={index * 70} className="card flex flex-col p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-teal">
                <Steam width={20} height={20} />
              </span>
              <h3 className="mt-4 font-display text-[1.15rem] leading-tight tracking-tight text-ink">
                {sauna.title}
              </h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-[1.8rem] leading-none tracking-tight text-deep">
                  {sauna.price}
                </span>
                <span className="text-[12px] font-semibold text-ink/60">{sauna.unit}</span>
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink/60">{sauna.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/8 bg-mist/60 py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label text-teal">Broneerimine</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Kolm sammu ja saun on sinu
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                {
                  title: 'Helista kassasse',
                  text: `Vali sobiv päev ja kellaaeg telefonil ${site.phone}. Küsi nõu, milline saun sobib sinu seltskonnale.`,
                },
                {
                  title: 'Broneeri aeg',
                  text: 'Peresaunu broneeritakse tunni kaupa tervisekeskuse lahtioleku aegadel.',
                },
                {
                  title: 'Tule kohale',
                  text: 'Tasu kassas kaardiga või sularahas. Ujumine peresauna kasutajale on 3 €.',
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-deep text-[12px] font-bold text-cream">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">
              <div className="flex items-center gap-2 text-teal">
                <Ticket width={18} height={18} />
                <h2 className="label text-[10px]">Saunapiletid</h2>
              </div>
              <ul className="mt-5 space-y-3 text-[13.5px] leading-relaxed text-ink/70">
                {[
                  'Saunapilet täiskasvanule 5,50 €, sooduspilet 4 €.',
                  'Kaks kuni 6-aastast last on laupäevasel saunal tasuta, kui kaasas olev lapsevanem on ostnud pileti.',
                  'Alates kolmandast väikelapst on pilet sooduspileti hinnaga.',
                  'Ujumine ja saun on saadaval E–R alates 15.00 ning nädalavahetusel.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check width={16} height={16} className="mt-1 shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-sand/60 p-4 text-[12.5px] text-ink/60">
                <Clock width={16} height={16} className="shrink-0 text-teal" />
                Saunad avatakse E–R alates kella 16.00.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <SectionHeading label="Hinnad" title="Saunade hinnakiri" />
        <div className="mt-8 max-w-3xl">
          <PriceCard group={saunaPrices} />
        </div>
      </section>

      <CtaBand
        title="Broneeri peresaun juba täna"
        text="Kõige kindlam viis endale sobiv aeg tagada on telefonikõne. Küsi ka rahvasauna ja ujumise kohta."
        linkTo="/kontakt"
        linkLabel="Kontakt ja asukoht"
      />
    </>
  )
}

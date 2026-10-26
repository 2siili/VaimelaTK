import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PriceCard } from '../components/PriceList'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { priceGroups, site } from '../data/site'
import { Check, Clock, Dumbbell, Phone, Ticket } from '../components/icons'

const floors = [
  {
    floor: 'I korrus',
    title: 'Jõusaal',
    icon: Dumbbell,
    items: ['Jõumasinad', 'Vabakoormustrenažöörid', 'Kangid ja pingid', 'Jõuraamid'],
    text: 'Kõik vajalik jõutreeninguks — masinad algajale, vabad raskused kogenumale.',
  },
  {
    floor: 'II korrus',
    title: 'Kardioala',
    icon: Clock,
    items: [
      '2 jooksulint (kalde ja langusega)',
      'Suusatrenažöör käte treenimiseks',
      'Elliptical crosstrainer',
      '2 velotrenažööri',
    ],
    text: 'Viis kardiotrenažööri vaatega majale — soojenduseks või eraldi trenniks.',
  },
]

export function Jousaal() {
  const gymPrices = priceGroups.find((group) => group.id === 'jousaal')!

  return (
    <>
      <PageHero
        eyebrow="Jõusaal"
        crumb="Jõusaal"
        title="Jõud esimesel, kardio teisel korrusel"
        intro="Väimela Tervisekeskuse jõusaalis on nii jõumasinad, vabakoormused kui ka kardiotrenažöörid. Üks pilet kehtib kogu majas — treeni nii nagu sulle sobib."
        image={{ src: '/img/gym.jpg', alt: 'Jõusaali masinad ja treeningvahendid' }}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {['1 tunni pilet', 'Jõud ja kardio', 'Komplekspilet ujulaga', '10× kaart'].map((chip) => (
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
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {floors.map((floor, index) => {
            const Icon = floor.icon
            return (
              <Reveal
                key={floor.floor}
                delay={index * 90}
                className="card flex flex-col p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-mist text-teal">
                    <Icon width={22} height={22} />
                  </span>
                  <span className="label text-[8.5px] text-ink/40">{floor.floor}</span>
                </div>
                <h2 className="mt-5 font-display text-[1.4rem] tracking-tight text-ink">
                  {floor.title}
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">{floor.text}</p>
                <ul className="mt-5 grid gap-2 text-[13px] text-ink/70 sm:grid-cols-2">
                  {floor.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check width={15} height={15} className="mt-0.5 shrink-0 text-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}

          <Reveal delay={180} className="flex flex-col justify-between rounded-[1.5rem] bg-deep p-6 text-cream sm:p-8">
            <div>
              <p className="label text-aqua">Hea teada</p>
              <h2 className="mt-3 font-display text-[1.35rem] leading-snug tracking-tight">
                Pilet kehtib kogu jõusaalis
              </h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cream/70">
                Hinnas on nii jõumasinad, vabakoormused kui ka kardiotrenažöörid. Komplekspiletiga
                saad lisaks ujula või sauna.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-[12.5px] text-cream/65">
              <p className="flex items-center gap-2">
                <Clock width={15} height={15} className="text-aqua" />
                Pilet kehtib 1 tund
              </p>
              <p className="flex items-center gap-2">
                <Ticket width={15} height={15} className="text-aqua" />
                10× kaart on nimeline, kehtib 2 kuud
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-mist/60 py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="label text-teal">Kasutamine</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Treeni siis, kui sulle sobib
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/65">
              Jõusaal on avatud tervisekeskuse lahtioleku aegadel. Osa aegu on broneeritud koolidele
              ja kollektiividele — kõige värskema ajakava saad kassast telefonil {site.phone}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-primary">
                <Phone width={16} height={16} />
                {site.phone}
              </a>
              <a
                href="mailto:ujula@voruvald.ee"
                className="btn btn-outline"
              >
                Kirjuta meile
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-[1.75rem] border border-ink/10">
            <img
              src="/img/gym-dumbbells.jpg"
              alt="Hantlid jõusaali riiulil"
              loading="lazy"
              className="h-full max-h-[420px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <SectionHeading
          label="Hinnad"
          title="Jõusaali hinnakiri"
          intro="Sooduspilet kehtib õpilastele vanuses 7–18 aastat, pensionäridele ja puuetega inimestele."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <PriceCard group={gymPrices} />
          <Reveal delay={100} className="rounded-[1.5rem] border border-ink/10 bg-sand/50 p-6 sm:p-8">
            <h3 className="font-display text-[1.25rem] tracking-tight text-ink">Komplekspiletid</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
              Ühe piletiga saad ühendada jõusaali ja vee. Sobib ideaalselt trennipäevaks.
            </p>
            <dl className="mt-5 space-y-3">
              {[
                ['Jõusaal + ujula', '8,50 € / 7,50 €'],
                ['Jõusaal + saun', '7,50 € / 6,50 €'],
                ['10× jõusaal + saun', '68 €'],
              ].map(([label, price]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-t border-ink/10 pt-3">
                  <dt className="text-[13.5px] text-ink/70">{label}</dt>
                  <dd className="text-[13.5px] font-semibold tabular-nums text-ink">{price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12px] leading-relaxed text-ink/60">
              Täispilet / sooduspilet. Saunaga piletid kehtivad sauna lahtioleku aegadel.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tee trennist harjumus"
        text="Üks pilet, kümme korda või komplekspilet ujulaga — valid ise, kuidas liikuda. Kassa aitab valida."
        linkTo="/hinnakiri"
        linkLabel="Vaata kogu hinnakirja"
      />
    </>
  )
}

import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PriceCard, PriceRows } from '../components/PriceList'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { aeroobikaAjakava, birthdayPrices, priceGroups, site } from '../data/site'
import { ArrowUpRight, Ball, Check, Clock, Download, Phone, Sparkles, Users } from '../components/icons'

export function Sport() {
  const sportPrices = priceGroups.find((group) => group.id === 'sport')!

  return (
    <>
      <PageHero
        eyebrow="Sport ja vaba aeg"
        crumb="Sport"
        title="Lauatennis, squash ja sünnipäevad ujulas"
        intro="Lisaks basseinidele ja jõusaalile saab meil mängida lauatennist ja squash'i, rentida aeroobikasaali ning pidada lapse sünnipäeva. Solaarium on avatud täiskasvanutele."
        image={{ src: '/img/squash.jpg', alt: "Squash'i väljak tugevas valguses" }}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {['Lauatennis 4 €/h', 'Squash 4–7 €/h', 'Aeroobikasaal', 'Sünnipäevad', 'Solaarium'].map(
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
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70">
            <img
              src="/img/tabletennis.jpg"
              alt="Lauatennise reket ja pall"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[1.4rem] tracking-tight text-ink">Lauatennis</h2>
                <span className="font-display text-[1.4rem] tracking-tight text-deep">4 €/h</span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Üks tund ühele mängijale isiklike vahenditega. Hinda kuulub teise korruse
                riietusruumi ja duširuumi kasutus.
              </p>
              <p className="mt-3 flex items-center gap-2 text-[12.5px] text-ink/60">
                <Check width={15} height={15} className="text-teal" />
                Palume kasutada heledapõhjalisi või „no marking“ spordijalatseid.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70">
            <img
              src="/img/squash.jpg"
              alt="Squash'i väljak"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[1.4rem] tracking-tight text-ink">Squash</h2>
                <span className="font-display text-[1.4rem] tracking-tight text-deep">4–7 €/h</span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Üks tund ühele mängijale. Vali oma reket või laena vahendid tervisekeskusest.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
                <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-deep">
                  Isiklikud vahendid 4 €
                </span>
                <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-deep">
                  Laenatud vahendid 7 €
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-mist/60 py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label text-teal">Aeroobikasaal</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Saal treeninguteks ja üritusteks
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/65">
              Aeroobikasaali saab rentida treeninguteks, üritusteks ja laste sünnipäevadeks. Saalis
              toimuvad ka aeroobika- ja vesiaeroobikatreeningud.
            </p>
            <ul className="mt-6 space-y-3 text-[13.5px] text-ink/65">
              {[
                'Aeroobikasaali rent ürituseks (45 min) 21 €',
                'Koolidele ja lasteaedadele (45 min) 15 €',
                'Aeroobika treening 8,50 €, koos ujula ja saunaga 13 €',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check width={16} height={16} className="mt-1 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-primary">
                <Phone width={16} height={16} />
                Broneeri: {site.phone}
              </a>
              <a
                href={aeroobikaAjakava.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <Download width={16} height={16} />
                Saali ajakava
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} id="sunnipaevad" className="scroll-mt-32">
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-6 sm:p-8">
              <div className="flex items-center gap-2 text-teal">
                <Users width={18} height={18} />
                <p className="label text-[10px]">Laste sünnipäevad</p>
              </div>
              <h2 className="mt-3 font-display text-[1.45rem] leading-snug tracking-tight text-ink">
                Sünnipäev ujumisega
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Sünnipäeva saab pidada laupäeviti kuni kolm tundi, millest ujulat saab kasutada kuni
                üks tund. Toidulaua ja sportliku tegevuse korraldab klient ise.
              </p>
              <PriceRows rows={birthdayPrices} />
              <p className="mt-4 rounded-xl bg-sand/60 p-4 text-[12px] leading-relaxed text-ink/60">
                Alla 7-aastaste laste turvalisuse tagamiseks peab ujulas olema vähemalt üks
                täiskasvanu iga kolme lapse kohta. Broneeri kassas telefonil {site.phone}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div id="solaarium" className="scroll-mt-32 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="label text-teal">Iluteenus</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Solaarium
            </h2>
            <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/65">
              Solaariumi kasutamine on lubatud alates 18. eluaastast. Erandkorras võib solaariumi
              kasutada lapsevanema soovil ja juuresolekul.
            </p>
            <ul className="mt-5 space-y-2.5 text-[13.5px] text-ink/60">
              <li className="flex gap-3">
                <Check width={16} height={16} className="mt-1 shrink-0 text-teal" />
                R-tüüpi lambid, kiirgustugevus 16 UVAm/cm²
              </li>
              <li className="flex gap-3">
                <Check width={16} height={16} className="mt-1 shrink-0 text-teal" />
                Lambi kasutusaeg 500 tundi
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-[1.75rem] border border-teal/25 bg-deep p-6 text-cream sm:p-8">
            <Sparkles width={24} height={24} className="text-aqua" />
            <p className="mt-5 label text-[9px] text-cream/45">Hind</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-[2.8rem] leading-none tracking-tight">0,65 €</span>
              <span className="text-[13px] font-semibold text-cream/50">/ minut</span>
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-cream/65">
              Tasumine kassas kaardiga või sularahas. Küsi juhiseid teenindajalt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-16 lg:pb-20">
        <SectionHeading
          label="Hinnad"
          title="Mängude ja saali hinnakiri"
          aside={
            <a
              href="/docs/hinnakiri-2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="link-arrow text-deep hover:text-teal"
            >
              Laadi hinnakiri alla
              <ArrowUpRight />
            </a>
          }
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <PriceCard group={sportPrices} />
          <Reveal delay={100} className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-teal">
              <Ball width={18} height={18} />
              <h3 className="label text-[10px]">Broneerimine</h3>
            </div>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
              Lauatennise ja squash'i väljakud broneeritakse tervisekeskuse kassas. Info ja
              broneerimine telefonil {site.phone}.
            </p>
            <ul className="mt-5 space-y-3 text-[13px] text-ink/65">
              {[
                'Broneering kehtib tunniajaliselt.',
                'Hinda sisaldab riietusruumi ja duši kasutust.',
                'Tasuda saab kaardiga või sularahas.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Clock width={15} height={15} className="mt-0.5 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={site.phoneHref} className="btn btn-primary mt-6 w-full sm:w-auto">
              <Phone width={16} height={16} />
              {site.phone}
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Mängi, treeni või peo sünnipäeva"
        text="Küsi vabu aegu ja broneeri saal või väljak ette. Aitame sul leida sobiva aja."
        linkTo="/kontakt"
        linkLabel="Võta ühendust"
      />
    </>
  )
}

import { PageHero } from '../components/PageHero'
import { OpeningHoursCard } from '../components/PriceList'
import { Reveal } from '../components/Reveal'
import { documents, site } from '../data/site'
import {
  Accessibility,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Users,
} from '../components/icons'

const contactCards = [
  {
    icon: MapPin,
    label: 'Aadress',
    lines: [site.address.street, site.address.village, site.address.city],
    link: { href: site.mapUrl, label: 'Ava kaardil', external: true },
  },
  {
    icon: Phone,
    label: 'Telefon',
    lines: [site.phone, 'Info ja broneerimine'],
    link: { href: site.phoneHref, label: 'Helista', external: false },
  },
  {
    icon: Mail,
    label: 'E-post',
    lines: [site.email, 'Vastame tööpäeviti'],
    link: { href: site.emailHref, label: 'Kirjuta', external: false },
  },
  {
    icon: Users,
    label: 'Juhataja',
    lines: [site.manager.name, `Tel ${site.manager.phone}`],
    link: { href: site.manager.phoneHref, label: 'Helista', external: false },
  },
]

export function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        crumb="Kontakt"
        title="Tule külla või helista — aitame sul alustada"
        intro="Väimela Tervisekeskus asub Võru vallale kuuluvas Väimela alevikus, vaid mõne kilomeetri kaugusel Võru linnast. Info ja peresaunade broneerimine telefonil 787 4247."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn btn-primary">
            <Phone width={16} height={16} />
            {site.phone}
          </a>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
            <MapPin width={16} height={16} />
            Ava kaardil
          </a>
        </div>
      </PageHero>

      <section className="shell pb-12">
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Reveal key={card.label} delay={index * 70} className="card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-teal">
                    <Icon width={19} height={19} />
                  </span>
                  <h2 className="label mt-4 text-[9px] text-ink/60">{card.label}</h2>
                  <p className="mt-2 text-[15px] leading-snug font-semibold text-ink">
                    {card.lines[0]}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink/60">
                    {card.lines.filter(Boolean).slice(1).join(' · ')}
                  </p>
                  <a
                    href={card.link.href}
                    target={card.link.external ? '_blank' : undefined}
                    rel={card.link.external ? 'noreferrer' : undefined}
                    className="link-arrow mt-4 text-[12.5px] text-teal hover:text-deep"
                  >
                    {card.link.label}
                    <ArrowUpRight width={14} height={14} />
                  </a>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <OpeningHoursCard />
            <div className="mt-4 rounded-2xl border border-ink/10 bg-sand/50 p-5">
              <p className="label text-[8.5px] text-ink/60">Registrikood</p>
              <p className="mt-1.5 text-[14px] font-semibold tabular-nums text-ink">
                {site.registryCode}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink/60">
                Väimela Tervisekeskus, Võru vald
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-16">
        <Reveal className="overflow-hidden rounded-[2rem] border border-ink/10">
          <iframe
            title="Väimela Tervisekeskuse asukoht kaardil"
            src={site.mapEmbed}
            className="h-[380px] w-full sm:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>

      <section className="border-y border-ink/8 bg-mist/60 py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label text-teal">Kohale tulemine</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] text-ink">
              Võrust mõne minutiga
            </h2>
            <ul className="mt-5 space-y-4 text-[14px] leading-relaxed text-ink/65">
              <li className="flex gap-3">
                <MapPin width={17} height={17} className="mt-0.5 shrink-0 text-teal" />
                <span>
                  <strong className="font-semibold text-ink">Autoga.</strong> Matussaare tee 2,
                  Väimela alevik — Võru linnast umbes 5 kilomeetrit. Parkla on renoveeritud ja
                  tasuta.
                </span>
              </li>
              <li className="flex gap-3">
                <Users width={17} height={17} className="mt-0.5 shrink-0 text-teal" />
                <span>
                  <strong className="font-semibold text-ink">Bussiga.</strong> Väimelasse sõidavad
                  Võru linnalähiliinid. Peatus jääb tervisekeskusest mõne minuti jalutuskäigu
                  kaugusele.
                </span>
              </li>
              <li className="flex gap-3">
                <Accessibility width={17} height={17} className="mt-0.5 shrink-0 text-teal" />
                <span>
                  <strong className="font-semibold text-ink">Ligipääs.</strong> Liikumisraskustega
                  külastajatele on kaldteed, trepi- ja basseinitõstuk ning redelitel mugavad astmed.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-6 sm:p-8">
              <h2 className="font-display text-[1.35rem] tracking-tight text-ink">
                Dokumendid ja eeskirjad
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                Tutvu majakorraga enne külastust. Kõik dokumendid on PDF-vormingus.
              </p>
              <ul className="mt-5 divide-y divide-ink/8">
                {documents.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span>
                        <span className="block text-[14px] font-semibold text-ink group-hover:text-teal">
                          {doc.label}
                        </span>
                        <span className="mt-0.5 block text-[11.5px] text-ink/40">{doc.meta}</span>
                      </span>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/12 text-teal transition-colors group-hover:border-teal/40 group-hover:bg-teal/5">
                        <Download width={15} height={15} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12px] leading-relaxed text-ink/60">
                Küsimuste korral helista {site.phone} või kirjuta {site.email}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export const site = {
  name: 'Väimela Tervisekeskus',
  shortName: 'Väimela',
  tagline: 'Ujula, saunad ja jõusaal Võrumaal',
  phone: '787 4247',
  phoneHref: 'tel:+3727874247',
  email: 'ujula@voruvald.ee',
  emailHref: 'mailto:ujula@voruvald.ee',
  address: {
    street: 'Matussaare tee 2',
    village: 'Väimela alevik',
    city: '65566 Võru vald',
  },
  registryCode: '75027287',
  manager: { name: 'Henn Antson', phone: '5 28 25 26', phoneHref: 'tel:+3725282526' },
  coords: { lat: 57.8902393, lon: 27.0114339 },
  mapUrl: 'https://www.openstreetmap.org/?mlat=57.8902393&mlon=27.0114339#map=17/57.89024/27.01143',
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=27.0043%2C57.8871%2C27.0185%2C57.8933&layer=mapnik&marker=57.8902393%2C27.0114339',
  perekaartUrl: 'https://perekaart.ee/discounts/108',
}

export type DayHours = {
  weekday: number // 1 = esmaspäev ... 7 = pühapäev
  label: string
  short: string
  open: number // minutid alates keskööst
  close: number
}

const hm = (h: number, m = 0) => h * 60 + m

export const hours: DayHours[] = [
  { weekday: 1, label: 'Esmaspäev', short: 'E', open: hm(8), close: hm(21) },
  { weekday: 2, label: 'Teisipäev', short: 'T', open: hm(7), close: hm(21) },
  { weekday: 3, label: 'Kolmapäev', short: 'K', open: hm(8), close: hm(21) },
  { weekday: 4, label: 'Neljapäev', short: 'N', open: hm(7), close: hm(21) },
  { weekday: 5, label: 'Reede', short: 'R', open: hm(8), close: hm(21) },
  { weekday: 6, label: 'Laupäev', short: 'L', open: hm(9), close: hm(20) },
  { weekday: 7, label: 'Pühapäev', short: 'P', open: hm(9), close: hm(20) },
]

export const formatMinutes = (mins: number) => {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${h}.${String(m).padStart(2, '0')}`
}

export type OpenState = {
  open: boolean
  text: string
  detail: string
  today: DayHours
}

const weekdays: Record<string, number> = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7,
}

/** Arvutab lahtioleku seisu Eesti aja järgi. */
export function getOpenState(now: Date = new Date()): OpenState {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Tallinn',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const weekdayName = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0')
  const weekday = weekdays[weekdayName] ?? 1
  const minutes = hour * 60 + minute

  const today = hours.find((d) => d.weekday === weekday) ?? hours[0]

  if (minutes >= today.open && minutes < today.close) {
    const untilTickets = today.close - 60
    return {
      open: true,
      text: `Avatud kuni ${formatMinutes(today.close)}`,
      detail:
        minutes < untilTickets
          ? `Pileteid müüakse kuni ${formatMinutes(untilTickets)}`
          : 'Piletimüük on lõppenud, külastus lõpeb sulgemisel',
      today,
    }
  }

  const next =
    minutes < today.open
      ? today
      : hours.find((d) => d.weekday === (weekday % 7) + 1) ?? hours[0]

  return {
    open: false,
    text: minutes < today.open ? `Avame täna ${formatMinutes(today.open)}` : 'Praegu suletud',
    detail:
      minutes < today.open
        ? `Täna avatud ${formatMinutes(today.open)}–${formatMinutes(today.close)}`
        : `${next.label} avatud ${formatMinutes(next.open)}–${formatMinutes(next.close)}`,
    today,
  }
}

export const notices = [
  {
    tag: 'Saun',
    title: 'Puuküttega rahvasaun igal laupäeval',
    text: 'Rahvasaun on avatud laupäeviti kella 14.00–20.00, sissepääs kuni 19.00. Pilet sisaldab ujumist basseinides.',
    meta: 'Laupäeviti 14.00–20.00',
  },
  {
    tag: 'Info',
    title: 'Piletimüük lõpeb tund enne sulgemist',
    text: 'Palun arvesta, et pileteid müüakse kuni üks tund enne tervisekeskuse sulgemist.',
    meta: 'Iga päev',
  },
  {
    tag: 'Ujula',
    title: 'Ujumismüts on basseinides kohustuslik',
    text: 'Ujumismütsi kandmine on vajalik kõigile — nii lastele kui täiskasvanutele, sõltumata juuste pikkusest. Mütsi saab osta kassast.',
    meta: 'Kõigis basseinides',
  },
]

export const events = [
  {
    stage: 'I etapp',
    date: '22. veebruar',
    time: '11.00',
    program: '25 m vabalt, 50 m vabalt',
    extra: '12.30 vabalt 50 m ja 100 m vastavalt vanusegrupile',
  },
  {
    stage: 'II etapp',
    date: '24. märts',
    time: '16.50',
    program: '25 m selili, 50 m rinnuli',
    extra: 'Sissepääs ja soojendus 16.50, start 17.30. 18.30 rinnuli 50 m või 100 m',
  },
  {
    stage: 'III etapp',
    date: '11. aprill',
    time: '11.00',
    program: '25 m vabalt, 50 m selili',
    extra: '12.30 selili 50 m või 100 m vastavalt vanusegrupile',
  },
  {
    stage: 'IV etapp',
    date: '16. mai',
    time: '11.00',
    program: 'Vigurujumine ja vabalt',
    extra: '25 m vigurujumine sünd 2017 ja nooremad, 50 m 2014–2016. 12.30 50 m vabalt 1991 ja vanemad, 100 m kompleksi 2013–1992',
  },
  {
    stage: 'V etapp',
    date: '1. august',
    time: 'Tamula rand',
    program: 'G. Otsa mälestusvõistlus',
    extra: 'Avaveeujumine / „liikumisaasta“ ajavõtuta ujumine. Jälgi reklaami.',
  },
  {
    stage: 'VI etapp',
    date: '29. november',
    time: '11.00',
    program: '25 m selili, 50 m liblikat',
    extra: '13.00 50 m liblikat võistlus ja sarja koondautasustamine',
  },
]

export type PriceRow = {
  name: string
  price: string
  note?: string
}

export type PriceGroup = {
  id: string
  title: string
  intro?: string
  rows: PriceRow[]
}

export const priceGroups: PriceGroup[] = [
  {
    id: 'ujula',
    title: 'Ujula',
    intro: 'Ujumise kestus on 45 minutit. Ujumine ja saun sisaldab tervisekeskuses viibimist kuni 2 tundi.',
    rows: [
      { name: 'Ujumine E–R kuni kella 15.00', price: '6 € / 5 €', note: 'Täispilet / sooduspilet' },
      {
        name: 'Ujumine ja saun E–R alates 15.00 ning L–P',
        price: '7,50 € / 6 €',
        note: 'Saunad alates 16.00',
      },
      { name: 'Perepilet (kuni 2 täiskasvanut ja lapsed)', price: '21 €' },
      { name: '10× ujumine E–R kuni 15.00', price: '50 € / 40 €', note: 'Nimeline, kehtib 2 kuud' },
      { name: '10× ujumine ja saun', price: '66 € / 53 €', note: 'Nimeline, kehtib 2 kuud' },
      { name: 'Ujumistreening (1 tund)', price: '9 €' },
      { name: '10× ujumistreening (1 tund)', price: '79 €' },
      {
        name: 'Vesiaeroobika treening (1 tund)',
        price: '9 € / 7,50 €',
        note: '',
      },
      {
        name: '10× vesiaeroobika treening (1 tund)',
        price: '79 € / 68 €',
        note: '',
      },
      {
        name: 'Suur bassein (45 min), koolidele ja lasteaedadele',
        price: '29 / 48 / 74 / 93 €',
        note: 'Broneerides 1 / 2 / 3 / 4 rada',
      },
      {
        name: 'Suur bassein (45 min), asutustele ja kollektiividele',
        price: '51 / 88 / 112 / 137 €',
        note: 'Broneerides 1 / 2 / 3 / 4 rada',
      },
      {
        name: 'Lastebassein (45 min)',
        price: '29 € / 50 €',
        note: 'Koolidele ja lasteaedadele / teistele asutustele ja kollektiividele',
      },
    ],
  },
  
  {
    id: 'jousaal',
    title: 'Jõusaal',
    intro: 'Piletihinna sisse kuuluvad jõumasinad, vabakoormused ja teise korruse kardiotrenažöörid.',
    rows: [
      { name: 'Pilet täiskasvanule (1 tund)', price: '5 € / 4 €' },
      { name: '10× pilet', price: '42 € / 34 €', note: 'Nimeline, kehtib 2 kuud' },
      { name: 'Jõusaal ja ujula', price: '8,50 € / 7,50 €' },
      { name: 'Jõusaal ja saun', price: '7,50 € / 6,50 €', note: 'Sauna lahtioleku aegadel' },
      { name: '10× jõusaal ja saun', price: '68 €' },
      { name: 'Jõusaali broneering koolidele', price: '13 €' },
      { name: 'Jõusaali broneering asutustele ja kollektiividele', price: '14 €' },
    ],
  },
  
  {
    id: 'sunnipaev',
    title: 'Laste sünnipäeva hinnad',
    intro: 'Laste sünnipäevapidusid saab broneerida ainult laupäevaks. Koos täiskasvanuga, kes kasutab tervisekeskuse teenuseid (ja on ostnud vastava pileti) on kahele väikelapsele 0-6 aastat (k.a.) tervisekeskuse teenuste kasutamine tasuta (v.a. perepilet ja laste sünnipäevapeod). Ülejäänud lastele (alates kolmandast kaasasolevast lapsest (vanuses 0-6 aastat), on pileti hinnaks sooduspileti hind.',
    rows: [
      { name: 'Lapse 0-3 a pilet (koos vanemaga, kes ostab endale pileti)', price: '0 €' },
      { name: 'Lapse 4-6 a pilet (koos vanemaga, kes ostab endale pileti)', price: '2 € },
      { name: 'Lapse 7-18 a pilet (koos vanemaga, kes ostab endale pileti)', price: '4 €' },
      { name: 'Pilet täiskasvanule (täispilet / sooduspilet)', price: '6 € / 4 €' },
    ],
  },
  
  {
    id: 'saunad',
    title: 'Saunad',
    intro: 'Peresaunu saab broneerida tervisekeskuse lahtioleku aegadel telefonil 787 4247.',
    rows: [
      { name: 'Saunapilet täiskasvanule', price: '5,50 € / 4 €' },
      { name: 'Rahvasaun ja ujula (L 14.00–20.00)', price: '7,50 € / 6 €' },
      { name: 'Väike peresaun (1 tund)', price: '12 €' },
      { name: 'Suur peresaun (1 tund)', price: '16 €' },
      {
        name: 'Elektrisaun 1–6 inimesele (1 tund)',
        price: '20 €',
        note: 'Väljaspool üldkasutatavat aega',
      },
      {
        name: 'Aurusaun 1–6 inimesele (1 tund)',
        price: '20 €',
        note: 'Väljaspool üldkasutatavat aega',
      },
      { name: 'Ujumine peresauna kasutajale (õpilane / täiskasvanu)', price: '3 €' },
      { name: 'Pesemine päeval (dušš)', price: '3 €' },
    ],
  },
  {
    id: 'sport',
    title: 'Lauatennis, squash ja aeroobikasaal',
    rows: [
      { name: 'Lauatennis (1 tund, isiklikud vahendid)', price: '4 €' },
      { name: 'Squash (1 tund, isiklikud vahendid)', price: '4 €' },
      { name: 'Squash (1 tund, Väimela Tervisekeskusest laenutatud vahendid)', price: '7 €' },
      { name: 'Aeroobikasaali rent ürituseks (45 min)', price: '21 €' },
      { name: 'Aeroobikasaali rent koolidele ja lasteaedadele (45 min)', price: '15 €' },
      {
        name: 'Aeroobikasaali ja II korruse ruumide rent lapse sünnipäevaks (45 min)',
        price: '14 €',
      },
      { name: 'Aeroobika treening (1 tund)', price: '8,50 €' },
      { name: 'Aeroobika treening (1 tund) koos ujula ja saunaga', price: '13 €' },
    ],
  },
  {
    id: 'muu',
    title: 'Muu',
    rows: [
      { name: 'Solaarium (1 minut)', price: '0,65 €' },
      { name: 'Staadion: täiskasvanute jalgpalli võistlusmäng', price: '92 €', note: '½ väljakul 69 €' },
      { name: 'Staadion: täiskasvanute treening', price: '58 €' },
      { name: 'Staadion: täiskasvanute treeningmäng', price: '46 €', note: '½ väljakul' },
      { name: 'Staadion: noorte jalgpalli võistlusmäng', price: '63 €', note: '½ väljakul 46 €' },
      { name: 'Võtme kaotamine või luku rikkumine', price: '16 €' },
      { name: 'Leppetrahv inventari lõhkumisel', price: '5–100 €' },
    ],
  },
]

export const birthdayPrices: PriceRow[] = [
  { name: 'II korruse ruumide rent lapse sünnipäevaks (1 tund)', price: '14 €' },
  { name: 'Ujula pilet lastele 0–3 a', price: '0 €', note: 'Koos vanemaga, kes ostab pileti' },
  { name: 'Ujula pilet lastele 4–6 a', price: '2 €' },
  { name: 'Ujula pilet lastele 7–18 a', price: '4 €' },
  { name: 'Ujula pilet täiskasvanule', price: '6 € / 4 €' },
]

export const trainers = [
  {
    name: 'Vilja Ruuda',
    role: 'Ujumistreener',
    initials: 'VR',
    facts: [
      'Ujumistreeneri EKR 5. kutsetase',
      'Tartu Ülikool — ujumistreener ja kehalise kasvatuse õpetaja',
      'Töökogemus treenerina 43 aastat',
    ],
    club: 'Virmar spordiühing',
    email: 'vilja@ruuda.ee',
    website: 'https://www.virmar.ee',
  },
  {
    name: 'Kätlin Toots',
    role: 'Ujumistreener',
    initials: 'KT',
    facts: [
      'Haridusteaduse magister kehakultuuri erialal',
      'Ujumistreeneri EKR 5. kutsetase',
      'Noorsootöötaja tase 4 ja laagrikasvataja tase 4',
      'Töökogemus ujulas 13 aastat',
    ],
    email: 'katlin.toots@gmail.com',
  },
]

export const documents = [
  { label: 'Hinnakiri alates 01.01.2026', href: '/docs/hinnakiri-2026.pdf', meta: 'PDF' },
  { label: 'Majakord alates 01.10.2026', href: '/docs/majakord-2026.pdf', meta: 'PDF' },
  { label: 'House rules (in English)', href: '/docs/house-rules-2026.pdf', meta: 'PDF' },
]

export const aeroobikaAjakava = {
  label: 'Aeroobikasaali ajakava',
  period: 'alates 14.09.2026',
  href: '/docs/aeroobikasaali-ajakava-2026.pdf',
}

export type Booking = { from: string; to: string }

export type PoolWeek = {
  id: 'suur' | 'laste'
  title: string
  subtitle: string
  pdf: string
  bookings: Record<number, Booking[]>
}

/**
 * Basseinide nädalaajakava.
 *
 * Uuendamine: muuda `period`, `days` kuupäevad ja iga basseini `bookings` loendit.
 * Võtmed on nädalapäevad (1 = esmaspäev … 7 = pühapäev) ja ajad kujul "HH:MM".
 * Piisab ainult broneeritud aegadest — vabad ajad ja suletud vahemikud arvutatakse
 * lahtiolekuaegadest (`hours`) ja telje piiridest (`axis`) automaatselt.
 *
 * Ajakava on võetud tervisekeskuse nädala-PDF-idest (26.10–01.11.2026).
 */
export const weekSchedule = {
  period: '26.10–01.11.2026',
  updated: '26.10.2026',
  axis: { from: '07:00', to: '21:00' },
  days: [
    { weekday: 1, label: 'Esmaspäev', short: 'E', date: '26.10', iso: '2026-10-26' },
    { weekday: 2, label: 'Teisipäev', short: 'T', date: '27.10', iso: '2026-10-27' },
    { weekday: 3, label: 'Kolmapäev', short: 'K', date: '28.10', iso: '2026-10-28' },
    { weekday: 4, label: 'Neljapäev', short: 'N', date: '29.10', iso: '2026-10-29' },
    { weekday: 5, label: 'Reede', short: 'R', date: '30.10', iso: '2026-10-30' },
    { weekday: 6, label: 'Laupäev', short: 'L', date: '31.10', iso: '2026-10-31' },
    { weekday: 7, label: 'Pühapäev', short: 'P', date: '01.11', iso: '2026-11-01' },
  ],
  pools: [
    {
      id: 'suur',
      title: 'Suur bassein',
      subtitle: '25 m · 4 rada',
      pdf: '/docs/ujula-ajakava-26.10-01.11.2026.pdf',
      bookings: {
        1: [
          { from: '15:00', to: '17:30' },
          { from: '17:45', to: '18:30' },
          { from: '18:30', to: '19:30' },
        ],
        2: [
          { from: '14:45', to: '15:45' },
          { from: '16:15', to: '17:00' },
          { from: '17:00', to: '17:45' },
          { from: '17:45', to: '18:30' },
          { from: '18:30', to: '19:15' },
          { from: '19:15', to: '20:15' },
        ],
        3: [
          { from: '15:00', to: '17:30' },
          { from: '17:30', to: '18:30' },
          { from: '18:45', to: '19:15' },
        ],
        4: [
          { from: '16:15', to: '17:00' },
          { from: '17:00', to: '18:00' },
          { from: '18:15', to: '19:00' },
          { from: '19:00', to: '19:45' },
        ],
        5: [
          { from: '13:30', to: '14:15' },
          { from: '15:15', to: '16:00' },
          { from: '16:00', to: '17:00' },
          { from: '17:00', to: '17:45' },
          { from: '18:30', to: '19:30' },
        ],
        6: [],
        7: [
          { from: '11:00', to: '11:45' },
          { from: '11:45', to: '12:30' },
          { from: '13:30', to: '14:30' },
          { from: '14:30', to: '16:00' },
        ],
      },
    },
    {
      id: 'laste',
      title: 'Lastebassein',
      subtitle: '30–80 cm · 32,5 °C',
      pdf: '/docs/lastebassein-ajakava-26.10-01.11.2026.pdf',
      bookings: {
        1: [
          { from: '11:30', to: '12:00' },
          { from: '16:15', to: '17:00' },
          { from: '17:00', to: '17:45' },
          { from: '18:20', to: '19:15' },
        ],
        2: [
          { from: '09:30', to: '12:00' },
          { from: '16:15', to: '17:00' },
          { from: '17:00', to: '17:45' },
          { from: '18:30', to: '19:15' },
        ],
        3: [
          { from: '09:00', to: '12:30' },
          { from: '16:15', to: '17:00' },
          { from: '17:00', to: '17:45' },
          { from: '17:45', to: '18:45' },
        ],
        4: [
          { from: '17:00', to: '17:45' },
          { from: '19:00', to: '19:45' },
        ],
        5: [
          { from: '10:15', to: '11:00' },
          { from: '16:15', to: '18:45' },
        ],
        6: [],
        7: [{ from: '12:30', to: '13:15' }],
      },
    },
  ] as PoolWeek[],
}

export const priceHighlights = [
  { label: 'Ujumine', value: '6 €', note: 'E–R kuni 15.00' },
  { label: 'Ujumine ja saun', value: '7,50 €', note: 'Alates 15.00 ja nädalavahetusel' },
  { label: 'Jõusaal', value: '5 €', note: '1 tund, kardio ja jõumasinad' },
  { label: 'Perepilet', value: '21 €', note: 'Kuni 2 täiskasvanut ja lapsed' },
]

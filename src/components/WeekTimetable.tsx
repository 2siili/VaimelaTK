import { useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Clock, Download, Phone } from './icons'
import {
  formatMinutes,
  hours,
  site,
  weekSchedule,
  type Booking,
  type PoolWeek,
} from '../data/site'

const AXIS_START = 7 * 60
const AXIS_END = 21 * 60
const TICKS = [8, 10, 12, 14, 16, 18, 20]

const toMinutes = (value: string) => {
  const [h, m] = value.split(':')
  return Number(h) * 60 + Number(m)
}

const offset = (minutes: number) => ((minutes - AXIS_START) / (AXIS_END - AXIS_START)) * 100

const span = (from: number, to: number) => ({
  left: `${offset(from)}%`,
  width: `${offset(to) - offset(from)}%`,
})

/** Liidab kõrvuti olevad broneeringud, et tabelis oleks vähem kirjeid. */
const mergeBookings = (bookings: Booking[]) =>
  [...bookings]
    .sort((a, b) => toMinutes(a.from) - toMinutes(b.from))
    .reduce<Booking[]>((merged, booking) => {
      const last = merged[merged.length - 1]
      if (last && toMinutes(last.to) === toMinutes(booking.from)) {
        last.to = booking.to
        return merged
      }
      merged.push({ ...booking })
      return merged
    }, [])

const formatRange = (booking: Booking) =>
  `${formatMinutes(toMinutes(booking.from))}–${formatMinutes(toMinutes(booking.to))}`

function Timeline({ day, bookings }: { day: (typeof hours)[number]; bookings: Booking[] }) {
  return (
    <div
      aria-hidden="true"
      className="hatch relative h-9 w-full overflow-hidden rounded-[10px] ring-1 ring-inset ring-ink/10"
    >
      <div
        className="absolute inset-y-0 bg-mist"
        style={span(day.open, day.close)}
      />
      {TICKS.map((hour) => (
        <span
          key={hour}
          className="absolute inset-y-0 w-px bg-cream/80"
          style={{ left: `${offset(hour * 60)}%` }}
        />
      ))}
      {bookings.map((booking) => (
        <span
          key={booking.from}
          title={`Broneeritud ${formatRange(booking)}`}
          className="absolute inset-y-[3px] rounded-[7px] bg-deep"
          style={span(toMinutes(booking.from), toMinutes(booking.to))}
        />
      ))}
    </div>
  )
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-ink/60">
      <span className="flex items-center gap-2">
        <span className="h-2.5 w-6 rounded-full bg-deep" aria-hidden="true" />
        Broneeritud
      </span>
      <span className="flex items-center gap-2">
        <span className="h-2.5 w-6 rounded-full bg-mist ring-1 ring-inset ring-ink/10" aria-hidden="true" />
        Vabad rajad
      </span>
      <span className="flex items-center gap-2">
        <span className="hatch h-2.5 w-6 rounded-full ring-1 ring-inset ring-ink/10" aria-hidden="true" />
        Suletud
      </span>
    </div>
  )
}

export function WeekTimetable() {
  const [poolId, setPoolId] = useState<PoolWeek['id']>(weekSchedule.pools[0].id)
  const pool = weekSchedule.pools.find((item) => item.id === poolId) ?? weekSchedule.pools[0]

  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Tallinn',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

  return (
    <section id="ajakava" className="shell scroll-mt-28 py-16 lg:py-20">
      <SectionHeading
        label="Ajakavad"
        title="Basseinide nädalaajakava"
        intro="Vali bassein ja vaata, millal on rajad broneeritud ning millal pääsed vabalt ujuma. Tabelis on kogu nädal korraga — tumedad plokid on broneeritud ajad."
        aside={
          <span className="rounded-full border border-ink/12 px-3.5 py-1.5 text-[12px] font-semibold text-ink/60 tabular-nums">
            Nädal {weekSchedule.period}
          </span>
        }
      />

      <Reveal className="mt-8 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-[#fffdf8]">
        {/* Basseini valik ja meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 px-5 py-4 sm:px-6">
          <div
            role="group"
            aria-label="Vali bassein"
            className="flex flex-wrap gap-1 rounded-full bg-mist p-1"
          >
            {weekSchedule.pools.map((item) => {
              const active = item.id === pool.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPoolId(item.id)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors ${
                    active ? 'bg-deep text-cream' : 'text-deep/70 hover:bg-white/60 hover:text-deep'
                  }`}
                >
                  {item.title}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-4 text-[12px] text-ink/50">
            <span className="hidden sm:inline">{pool.subtitle}</span>
            <a
              href={pool.pdf}
              target="_blank"
              rel="noreferrer"
              className="link-arrow text-[12px] text-deep hover:text-teal"
            >
              <Download width={15} height={15} />
              Nädala PDF
            </a>
          </div>
        </div>

        <table className="block w-full border-collapse md:table md:table-fixed">
          <caption className="sr-only">
            {pool.title} kasutamise ajakava nädalal {weekSchedule.period}. Broneeritud ajad on
            loetletud iga päeva juures.
          </caption>
          <thead className="hidden md:table-header-group">
            <tr>
              <th
                scope="col"
                className="w-[11rem] px-6 pb-2 pt-5 text-left align-bottom text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40"
              >
                Päev
              </th>
              <th scope="col" className="px-4 pb-2 pt-5 align-bottom">
                <div className="relative h-3.5 text-[10px] font-semibold tabular-nums text-ink/40">
                  {TICKS.map((hour) => (
                    <span
                      key={hour}
                      className="absolute -translate-x-1/2"
                      style={{ left: `${offset(hour * 60)}%` }}
                    >
                      {hour}
                    </span>
                  ))}
                </div>
              </th>
              <th
                scope="col"
                className="w-[15rem] px-4 pb-2 pt-5 text-left align-bottom text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40"
              >
                Broneeritud ajad
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {weekSchedule.days.map((day) => {
              const openingHours = hours.find((entry) => entry.weekday === day.weekday) ?? hours[0]
              const bookings = mergeBookings(pool.bookings[day.weekday] ?? [])
              const isToday = day.iso === today

              return (
                <tr
                  key={day.weekday}
                  className={`block border-t border-ink/8 transition-colors hover:bg-mist/25 md:table-row ${
                    isToday ? 'bg-mist/45' : ''
                  }`}
                >
                  <th
                    scope="row"
                    className="block px-5 pb-0 pt-4 text-left align-middle font-normal md:table-cell md:px-6 md:py-3"
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-[15px] font-medium tracking-tight text-ink">
                        {day.label}
                      </span>
                      <span className="text-[12px] tabular-nums text-ink/45">{day.date}</span>
                      {isToday && (
                        <span className="rounded-full bg-teal/12 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-teal">
                          täna
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] tabular-nums text-ink/45">
                      avatud {formatMinutes(openingHours.open)}–{formatMinutes(openingHours.close)}
                    </span>
                  </th>

                  <td className="block px-5 pt-3 align-middle md:table-cell md:px-4 md:py-3">
                    <Timeline day={openingHours} bookings={bookings} />
                    <div className="mt-1 flex justify-between text-[9.5px] tabular-nums text-ink/35 md:hidden">
                      <span>{weekSchedule.axis.from.slice(0, 2)}</span>
                      <span>{weekSchedule.axis.to.slice(0, 2)}</span>
                    </div>
                  </td>

                  <td className="block px-5 pb-4 pt-2 text-[12.5px] leading-relaxed align-middle md:table-cell md:px-4 md:py-3">
                    {bookings.length > 0 ? (
                      <span className="font-semibold tabular-nums text-ink/75">
                        {bookings.map(formatRange).join(' · ')}
                      </span>
                    ) : (
                      <span className="font-medium text-teal">Vabad kogu päeva</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="flex flex-col gap-3 border-t border-ink/8 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Legend />
          <p className="text-[11.5px] text-ink/45">
            Ajakava uuendatud {weekSchedule.updated} · muudatused võimalikud, kinnita aeg kassas
          </p>
        </div>
      </Reveal>

      <Reveal
        delay={80}
        className="mt-4 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/60 px-5 py-4 text-[12.5px] leading-relaxed text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <p className="flex items-start gap-3">
          <Clock width={17} height={17} className="mt-0.5 shrink-0 text-teal" />
          <span>
            Broneeritud aegadel on osa radu hõivatud treeningute ja rühmade poolt — ülejäänud rajad
            jäävad avalikuks ujumiseks. Piletimüük lõpeb tund enne sulgemist.
          </span>
        </p>
        <a
          href={site.phoneHref}
          className="link-arrow shrink-0 text-deep hover:text-teal"
        >
          <Phone width={15} height={15} />
          {site.phone}
        </a>
      </Reveal>
    </section>
  )
}

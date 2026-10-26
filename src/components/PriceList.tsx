import { formatMinutes, hours, type PriceGroup, type PriceRow } from '../data/site'
import { Ticket } from './icons'

export function PriceRows({ rows }: { rows: PriceRow[] }) {
  return (
    <dl className="mt-5">
      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-start justify-between gap-6 border-t border-ink/8 py-3.5 first:border-t-0"
        >
          <dt className="text-[15px] leading-snug text-ink/80">
            {row.name}
            {row.note && (
              <span className="mt-0.5 block text-[12.5px] leading-snug text-ink/60">{row.note}</span>
            )}
          </dt>
          <dd className="shrink-0 text-right text-[15px] font-semibold tabular-nums text-ink">
            {row.price}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function PriceCard({ group }: { group: PriceGroup }) {
  return (
    <section id={group.id} className="card scroll-mt-32 p-6 sm:p-8">
      <h2 className="font-display text-[1.35rem] tracking-tight text-ink">{group.title}</h2>
      {group.intro && <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">{group.intro}</p>}
      <PriceRows rows={group.rows} />
    </section>
  )
}

export function OpeningHoursCard({ compact = false }: { compact?: boolean }) {
  const todayIndex = (() => {
    const name = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Tallinn',
      weekday: 'short',
    }).format(new Date())
    const map: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }
    return map[name] ?? 1
  })()

  return (
    <div className={`card ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      <div className="flex items-center gap-2 text-teal">
        <Ticket width={18} height={18} />
        <h2 className="label text-[10px] text-teal">Lahtiolekuajad</h2>
      </div>
      <dl className={`mt-4 ${compact ? 'space-y-1.5' : 'space-y-2.5'}`}>
        {hours.map((day) => {
          const isToday = day.weekday === todayIndex
          return (
            <div
              key={day.weekday}
              className={`flex items-center justify-between gap-4 rounded-lg px-2 py-1 text-[14px] ${
                isToday ? 'bg-mist font-semibold text-deep' : 'text-ink/70'
              }`}
            >
              <dt className="flex items-center gap-2">
                {day.label}
                {isToday && <span className="label text-[8px] text-teal">täna</span>}
              </dt>
              <dd className="tabular-nums">
                {formatMinutes(day.open)}–{formatMinutes(day.close)}
              </dd>
            </div>
          )
        })}
      </dl>
      <p className="mt-4 border-t border-ink/8 pt-4 text-[12.5px] leading-relaxed text-ink/60">
        Piletite müük lõpetatakse üks tund enne sulgemist.
      </p>
    </div>
  )
}

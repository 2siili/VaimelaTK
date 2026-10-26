# VT — uus asjutine veebileht

Kaasaegne, mobiilisõbralik veebileht VT. Sisu on võetud
praeguselt saidilt (hinnakiri 01.01.2026, majakord 01.10.2026, kontaktid, ajakavad).

## Tehnoloogia

- Vite + React + TypeScript
- Tailwind CSS v4 (kujundussüsteem `src/index.css` failis)
- react-router-dom (lehed: avaleht, ujula, saunad, jõusaal, sport, hinnakiri, kontakt)

## Käivitamine

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # tüübikontroll + tootmisbuild kausta dist/
npm run preview  # eelvaade tootmisbuildist
```

## Failide struktuur

- `src/data/site.ts` — kogu sisu: lahtiolekuajad, hinnad, teated, sündmused, treenerid, dokumendid.
  Siin muudetakse hindu ja lahtiolekuaegu.
- `src/pages/` — lehed.
- `src/components/` — päis, jalus, hinnatabelid, sektsioonide pealkirjad.
- `public/img/` — pildid. `public/docs/` — PDF-d (hinnakiri, majakord, ajakavad).
- `public/img/vaimela-mark.png` ja `vaimela-logo.png` — ettevõtte olemasolev logo.

## Mida aeg-ajalt uuendada

1. **Basseinide nädalaajakava** on Ujula lehel tabelina (komponent
   `src/components/WeekTimetable.tsx`). Kogu sisu on `src/data/site.ts` failis `weekSchedule`:
   muuda `period`, `days` kuupäevad ja iga basseini `bookings` loendit. Võtmed on nädalapäevad
   (1 = esmaspäev … 7 = pühapäev) ja ajad kujul `"HH:MM"`. Sisesta ainult **broneeritud** ajad —
   vabad ajad ja suletud vahemikud arvutatakse lahtiolekuaegadest (`hours`) automaatselt.
   Kõrvuti olevad broneeringud liidetakse tabelis üheks vahemikuks.
2. **Tabeli päises olev „Nädala PDF“** viitab endiselt ametlikule PDF-ile
   (`public/docs/ujula-ajakava-*.pdf`, `lastebassein-ajakava-*.pdf`). Kui uut PDF-i ei ole,
   eemalda vastava basseini `pdf` väli — link kaob tabeli päisest.
3. **Aeroobikasaali ajakava** on endiselt PDF (`aeroobikaAjakava`), link Sport lehel.
4. **Jõusaali ajakava** ei ole saidil lingitud, sest praegusel vaimelatk.ee lehel olev PDF-link
   annab 404. Kui PDF on olemas, lisa see `public/docs/` kausta ja lisa viide `site.ts` faili.
5. **Pildid** on praegu vabalt kasutatavad stock-fotod (Pexels), mis on mõeldud asendamiseks
   tegelike fotodega hoonest, basseinidest ja saunadest. Asendades piisab, kui kirjutada uus fail
   samasse kohta ja hoida sama failinimi või uuendada viidet.
6. **Avalehe ujumissarja pilt** (`vaimela-ujula.jpg`) on ettevõtte enda foto.

## Ligipääsetavus

- Kõik interaktiivsed elemendid on klaviatuuriga kasutatavad, fookus on nähtav.
- Liikumisanimatsioonid on välja lülitatud, kui kasutaja on seadistanud `prefers-reduced-motion`.
- Värvide kontrast on valitud nii, et väiksemgi tekst oleks loetav.

## Märkused

- Küpsiste bännerit ei ole, sest leht ei kasuta jälgimist ega analüütikat.
- Vormid puuduvad: broneerimine käib telefoni ja e-posti teel, nagu praeguselgi saidil.

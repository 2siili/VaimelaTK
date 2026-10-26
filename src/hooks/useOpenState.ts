import { useEffect, useState } from 'react'
import { getOpenState, type OpenState } from '../data/site'

/** Lahtioleku seis Eesti aja järgi, uueneb iga minuti järel. */
export function useOpenState(): OpenState {
  const [state, setState] = useState<OpenState>(() => getOpenState())

  useEffect(() => {
    const id = window.setInterval(() => setState(getOpenState()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return state
}

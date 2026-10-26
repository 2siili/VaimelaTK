import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Ujula } from './pages/Ujula'
import { Saunad } from './pages/Saunad'
import { Jousaal } from './pages/Jousaal'
import { Sport } from './pages/Sport'
import { Hinnakiri } from './pages/Hinnakiri'
import { Kontakt } from './pages/Kontakt'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ujula" element={<Ujula />} />
          <Route path="/saunad" element={<Saunad />} />
          <Route path="/jousaal" element={<Jousaal />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/hinnakiri" element={<Hinnakiri />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

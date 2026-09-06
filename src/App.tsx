import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import MentionsLegales from '@/pages/MentionsLegales'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

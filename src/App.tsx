import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Home } from '@/pages/Home'
import { ChiSiamo } from '@/pages/ChiSiamo'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

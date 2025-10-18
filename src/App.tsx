
import './index.css'
import {NavBar} from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { DonationPage } from './pages/DonationPage'
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
    <div>
      <header>
        <NavBar />
      </header>

      <main className=''>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>    
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    </Router>
  )
}

export default App

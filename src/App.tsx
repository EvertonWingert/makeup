import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Loreal } from './pages/Loreal'
import { Maybelline } from './pages/Maybelline'
import { Covergirl } from './pages/Covergirl'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/maybelline' element={<Maybelline />} />
        <Route path='/loreal' element={<Loreal />} />
        <Route path='/covergirl' element={<Covergirl />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

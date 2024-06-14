import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import OurGames from './components/OurGames'
import TheTeam from './components/TheTeam'

function App() {

  return (
    <div className='bg-[#101728]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/our-games" element={<OurGames/>} />
        <Route path="/the-team" element={<TheTeam/>} />
      </Routes>
    </div>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Navbar from './pages/Navbar'
import Watchlistcontextprovider from './components/context/Watchlistcontextprovider'


const App = () => {
  return (
    
<Watchlistcontextprovider>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </Watchlistcontextprovider>
  )
}

export default App

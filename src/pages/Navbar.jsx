import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Watchlistcontext } from '../components/context/Watchlistcontextprovider'
const Navbar = () => {
  const { watchlist } = useContext(Watchlistcontext)
  return (
    <div>
      <nav className='bg-gray-900 p-4 text-white flex justify-between fixed w-full top-0 left-0 z-10'>
        <Link to="/" className='text-xl font-bold'>
          Movie App
        </Link>
        <Link to="/watchlist" className='hover:text-gray-300 text-xl'>
          Watchlist({ watchlist.length })
        </Link>
      </nav>
    </div>
  )
}

export default Navbar

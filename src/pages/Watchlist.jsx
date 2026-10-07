import Genrefilter from '../components/Genrefilter'
import { useContext,useState } from 'react'
import { Watchlistcontext } from '../components/context/Watchlistcontextprovider'
import Moviecard from '../components/Moviecard'
const Watchlist = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const { watchlist , genre} = useContext(Watchlistcontext)
  const filteredWatchlist = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((movie) => {
    return !selectedGenre || movie.genre_ids.includes(parseInt(selectedGenre))
  })
  return (
    <main className="w-full pt-32">
      <input type="text" onChange={(e)=> setSearchTerm(e.target.value)} placeholder="Search for movies..." className="p-2 z-10 w-3/4 md:w-1/2 border rounded border-gray-500 bg-gray-700/60 backdrop backdrop-blur-md text-white placeholder:text-white/90 fixed top-16 left-1/2 transform -translate-x-1/2" />
      <div className="mb-6 flex justify-center">
        <Genrefilter genre={genre} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWatchlist.map((movie, index) => (
          <Moviecard key={index} movies={movie} />
        ))}
      </div>
    </main>
  )
}

export default Watchlist

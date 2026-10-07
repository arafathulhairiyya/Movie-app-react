import {FaHeart,FaRegHeart} from "react-icons/fa"
import { useContext } from "react"
import { Watchlistcontext } from "./context/Watchlistcontextprovider"

const Moviecard = ({ movies }) => {
  const { watchlist, toggleWatchlist } = useContext(Watchlistcontext)
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative ">
      <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} className="w-full h-60 object-cover lg:object-fit rounded-md" />
      <h2 className="text-xl font-bold mb-2 mt-2">{movies.title}</h2>
      <p className="text-gray-400 text-sm">{movies.release_date}</p>
      <button onClick={() => toggleWatchlist(movies)} className="absolute  top-2 right-2 text-red-500 hover:text-red-600">
        {watchlist.some((item) => item.id === movies.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default Moviecard

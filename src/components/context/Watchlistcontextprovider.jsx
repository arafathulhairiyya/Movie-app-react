import { createContext, useState, useEffect } from "react"

 const Watchlistcontext = createContext()

const Watchlistcontextprovider = ({ children }) => {
const [watchlist, setWatchlist] = useState([])
const [genre, setGenre] = useState([])
 useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=8a5a5909be50f2043e56ce51d7d532f8`
    fetch(url)
    .then((response) => response.json())
    .then((data) => setGenre(data.genres || []))
  }, [])

const toggleWatchlist = (movie) => {
  const isInWatchlist = watchlist.some((item) => item.id === movie.id)

  if (isInWatchlist) {
    setWatchlist(watchlist.filter((item) => item.id !== movie.id))
  } else {
    setWatchlist([...watchlist, movie])
  }
}

  return (
    <div>
      <Watchlistcontext.Provider value={{ watchlist, setWatchlist, toggleWatchlist, genre }}>
        {children}
      </Watchlistcontext.Provider>
    </div>
  )
}

export default Watchlistcontextprovider
export { Watchlistcontext }
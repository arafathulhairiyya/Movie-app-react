import Moviecard from "../components/Moviecard"
import { useState, useEffect } from "react"
const Home = () => {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=8a5a5909be50f2043e56ce51d7d532f8`
  if (search) {
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=8a5a5909be50f2043e56ce51d7d532f8`
  }
    fetch(url)
    .then((response) => response.json())
    .then((data) => setMovies(data.results))
  }, [page, search])

  return (
    <div className="p-4 pt-16">
      <input type="text" placeholder="Search for movies..." className="text-white placeholder:text-white/90 p-2 z-10 w-3/4 md:w-1/2 border rounded border-gray-500 bg-gray-700/60 backdrop backdrop-blur-md fixed top-16 left-1/2 transform -translate-x-1/2 " onChange={(e) => setSearch(e.target.value)} />
      <div className="movies.container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-15">
        {movies.map((movie, index) => (
          <Moviecard key={index} movies={movie} />
        ))}
      </div>
      <div className="pagination flex justify-between mt-4">
        <button disabled={page === 1} className="p-2 bg-gray-700 text-white rounded " onClick={() => setPage(prev => prev - 1)}>
          PREV
        </button>
        <button className="p-2 bg-gray-700 text-white rounded " onClick={() => setPage(prev => prev + 1)}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Home

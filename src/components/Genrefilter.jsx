

const Genrefilter = ({ genre, selectedGenre, setSelectedGenre }) => {

  return (
    <div>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre} className="p-2  rounded border border-gray-500  backdrop-blur-md bg-gray-700 text-white">
       <option value="">All Genres</option>
        {genre.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Genrefilter

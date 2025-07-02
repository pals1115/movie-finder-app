const MovieCard = ({ movie, onAddFavorite }) => (
    <div className="border p-2 rounded shadow-md text-center">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <h3 className="font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button className="bg-green-500 text-white px-2 mt-2" onClick={() => onAddFavorite(movie)}>
        Add to Favorites
      </button>
    </div>
  );
  
  export default MovieCard;
  
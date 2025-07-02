const Favorites = ({ favorites }) => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Your Favorites</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="border p-2 text-center">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Favorites;
  
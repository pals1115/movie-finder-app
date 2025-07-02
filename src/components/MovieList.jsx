import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddFavorite }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} onAddFavorite={onAddFavorite} />
    ))}
  </div>
);

export default MovieList;

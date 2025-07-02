import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../api';

const Home = ({ onAddFavorite }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results || []);
  };

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <MovieList movies={movies} onAddFavorite={onAddFavorite} />
    </>
  );
};

export default Home;

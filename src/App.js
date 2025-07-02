import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = '2c2d8d01';

  const searchMovies = async () => {
    if (query.trim() === '') {
      setError('Please enter a movie name.');
      return;
    }

    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data.');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>🎬 Movie Finder</h1>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />
      <button onClick={searchMovies} style={{ padding: 10, marginLeft: 10 }}>
        Search
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: '1px solid #ccc',
              borderRadius: 10,
              padding: 10,
              margin: 10,
              width: 200,
              textAlign: 'center',
            }}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
              alt={movie.Title}
              style={{ width: '100%', height: 300, objectFit: 'cover' }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

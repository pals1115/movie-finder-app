import axios from 'axios';

const API_KEY = '2c2d8d01'; // ✅ just the key
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}&s=${query}`);
    return res.data.Search || []; // return empty array if nothing found
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}&i=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

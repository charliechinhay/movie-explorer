const API_KEY = "0591f69eca0ab3b2179958862a3d6fdc";
const BASE_URL = "https://api.themoviedb.org/3";

//Search film
export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return data.results;
}

//Details film
export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

//Trending movies
export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );

  const data = await response.json();
  return data.results;
}

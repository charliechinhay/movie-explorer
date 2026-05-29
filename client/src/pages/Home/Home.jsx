import { Form, Button, Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useMemo, useEffect, useContext } from "react";
import { debounce } from "lodash";
import CardMovie from "../../components/CardMovie.jsx";
import { searchMovies } from "../../services/movieService.js";
import { getTrendingMovies } from "../../services/movieService.js";
import { FavoritesContext } from "../../Contexts/FavoritesContext";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (value) => {
        if (!value.trim()) {
          setIsSearching(false);
          const movies = await getTrendingMovies();
          setMovies(movies);
          return;
        }
        setIsSearching(true);
        setLoading(true);
        try {
          const results = await searchMovies(value);
          setMovies(results);
        } catch (err) {
          setError("Failed to fetch movies. Please try again.");
        } finally {
          setLoading(false);
        }
      }, 500),
    [],
  );

  useEffect(() => {
    const loadTrending = async () => {
      const movies = await getTrendingMovies();
      setMovies(movies);
    };

    loadTrending();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setIsSearching(false);
      const movies = await getTrendingMovies();
      setMovies(movies);
      return;
    }

    try {
      setIsSearching(true);
      setError(null);
      setLoading(true);
      const results = await searchMovies(query);
      setMovies(results);
    } catch (_err) {
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="home-container">
        <h1 className="home-title">Search Movies</h1>
        <Form onSubmit={handleSearch} className="search-form">
          <Form.Control
            type="text"
            placeholder="Name film..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
            className="search-input"
          />

          <Button type="submit" className="search-button">
            Search
          </Button>
        </Form>
        {!isSearching && (
          <div className="trending-section">
            <h2 className="trending-title">
              Trending <span className="trending-title-accent">Movies</span>
            </h2>
            <p className="trending-description">
              Check out the most popular movies right now!
            </p>
          </div>
        )}
        <div className="movies-grid">
          {loading ? (
            <Skeleton count={10} height={300} />
          ) : error ? (
            <p>{error}</p>
          ) : (
            movies.map((movie) => {
              const isFavorite = favorites.some((fav) => fav.id === movie.id);
              return (
                <div key={movie.id} className="movie-grid-item">
                  <CardMovie
                    movie={{ ...movie, isFavorite }}
                    toggleFavorite={toggleFavorite}
                  />
                </div>
              );
            })
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;

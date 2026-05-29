import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/movieService";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import RenderStar from "../../components/renderStar/RenderStar";
import { FavoritesContext } from "../../Contexts/FavoritesContext";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (_error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-details-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error || !movie) {
    return <p className="movie-details-not-found">Movie not found.</p>;
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <Container className="movie-details-container">
      {backdropUrl && (
        <div
          className="movie-backdrop-hero"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="movie-backdrop-overlay" />
          <h1 className="movie-backdrop-title">{movie.title}</h1>
        </div>
      )}

      <Row className="movie-details-card">
        <Col md={4}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="movie-poster img-fluid"
          />
        </Col>
        <Col md={8} className="movie-info-col">
          {!backdropUrl && <h1 className="movie-title">{movie.title}</h1>}

          <div className="movie-genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="movie-genre-badge">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="movie-overview">{movie.overview}</p>

          <p className="movie-release-date">
            📅 Release Date: {movie.release_date}
          </p>

          <RenderStar rating={movie.vote_average} />

          <div className="movie-actions">
            <button className="movie-btn movie-btn-play">▶ Play Movie</button>
            <button className="movie-btn movie-btn-trailer">🎬 Trailer</button>
            <button
              className={`movie-btn movie-btn-favorite ${isFavorite ? "is-favorite" : ""}`}
              onClick={() => toggleFavorite(movie)}
            >
              {isFavorite ? "❤️ Rimuovi" : "🤍 Favorites"}
            </button>
            <button className="movie-btn movie-btn-share">↗ Share</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default MovieDetails;

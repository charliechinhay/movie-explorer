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
  const { favorites, addFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <Container className="movie-details-container">
      <Row>
        <Col md={4}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-genres">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="movie-overview">{movie.overview}</p>
          <p className="movie-release-date">
            Release Date: {movie.release_date}
          </p>
          <RenderStar rating={movie.vote_average} />

          <button className="movie-details-buttons">Play Movie</button>
          <button className="movie-details-buttons">Watch Trailer</button>
          <button
            className="movie-details-buttons"
            onClick={() => addFavorite(movie)}
            disabled={isFavorite}
          >
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
          <button className="movie-details-buttons">Share</button>
        </Col>
      </Row>
    </Container>
  );
}
export default MovieDetails;

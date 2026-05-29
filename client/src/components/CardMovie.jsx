import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import "./CardMovie.css";

function CardMovie({ movie, toggleFavorite }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  const voteClass =
    movie.vote_average >= 7
      ? "vote-high"
      : movie.vote_average >= 5
        ? "vote-mid"
        : "vote-low";

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="movie-card h-100">
        <div className="card-img-wrapper">
          <Link to={`/movie/${movie.id}`}>
            <Card.Img variant="top" src={imageUrl} alt={movie.title} />
          </Link>
          {movie.vote_average > 0 && (
            <div className={`vote-badge ${voteClass}`}>
              ⭐ {movie.vote_average.toFixed(1)}
            </div>
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.release_date?.slice(0, 4)}</Card.Text>

          <Button
            onClick={() => toggleFavorite(movie)}
            className={`btn-favorite ${movie.isFavorite ? "is-favorite" : ""}`}
          >
            {movie.isFavorite ? "❤️ Rimuovi" : "🤍 Aggiungi"}
          </Button>

          <Button as={Link} to={`/movie/${movie.id}`} className="btn-details">
            Dettagli →
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default CardMovie;

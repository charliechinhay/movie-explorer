import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CardMovie.css";

function CardMovie({ movie, toggleFavorite }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  const handleFavorite = () => {
    toggleFavorite(movie);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="movie-card h-100">
        <div className="card-img-wrapper">
          <Link to={`/movie/${movie.id}`}>
            <Card.Img variant="top" src={imageUrl} alt={movie.title} />
          </Link>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.release_date?.slice(0, 4)}</Card.Text>

          <Button
            onClick={handleFavorite}
            className={`btn-favorite ${movie.isFavorite ? "is-favorite" : ""}`}
          >
            {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>

          <Button as={Link} to={`/movie/${movie.id}`} className="btn-details">
            Details
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default CardMovie;

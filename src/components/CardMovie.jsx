import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toggleFavorite } from "../services/favoritesServices.js";

function CardMovie({ movie }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  const handleFavorite = () => {
    toggleFavorite(movie);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={imageUrl} />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title}</Card.Title>

          <Card.Text>{movie.release_date?.slice(0, 4)}</Card.Text>

          <Button
            onClick={handleFavorite}
            variant="outline-warning"
            className="mb-2"
          >
            {movie.isFavorite
              ? "Rimuovi dai preferiti"
              : "Aggiungi ai preferiti"}
          </Button>

          <Button
            as={Link}
            to={`/movie/${movie.id}`}
            variant="primary"
            className="mt-auto"
          >
            Dettagli
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default CardMovie;

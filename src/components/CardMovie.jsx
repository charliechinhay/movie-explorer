import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardMovie({ movie }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={imageUrl} />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>

        <Card.Text>{movie.release_date?.slice(0, 4)}</Card.Text>

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
  );
}
export default CardMovie;

import { useState, useEffect } from "react";
import { getFavorites } from "../../services/favoritesServices.js";
import { Container, Row, Col } from "react-bootstrap";
import CardMovie from "../../components/CardMovie.jsx";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();
    setMovies(favorites);
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Your Favorites</h1>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} lg={3} md={4} sm={6} className="mb-4">
            <CardMovie movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Favorites;

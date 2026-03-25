import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie.jsx";
import { FavoritesContext } from "../../Contexts/FavoritesContext";
import "./Favorites.css";

function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <Container className="favorites-container">
      <h1 className="favorites-title">Your Favorites</h1>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <div className="favorites-empty-icon">🎬</div>
          <h3>No movie found</h3>
          <p>Start exploring and add your favorite movies!</p>
          <Link
            to="/home"
            className="btn"
            style={{
              background: "linear-gradient(135deg, #e50914 0%, #b20710 100%)",
              color: "white",
              padding: "12px 30px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Esplora Film
          </Link>
        </div>
      ) : (
        <Row>
          {favorites.map((movie) => (
            <Col key={movie.id} xl={3} lg={3} md={4} sm={6} className="mb-4">
              <CardMovie
                movie={{ ...movie, isFavorite: true }}
                toggleFavorite={toggleFavorite}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Favorites;

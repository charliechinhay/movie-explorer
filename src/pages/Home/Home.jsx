import { useState } from "react";
import { searchMovies } from "../../services/movieService";
import "./Home.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CardMovie from "../../components/CardMovie";
import { Spinner } from "react-bootstrap";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      const results = await searchMovies(query);
      setMovies(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch movies. Please try again.");
      setLoading(false);
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
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />

          <Button type="submit" className="search-button">
            Search
          </Button>
        </Form>

        <Row>
          <Col className="movies-grid">
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : error ? (
              <p>{error}</p>
            ) : (
              movies.map((movie) => (
                <Col key={movie.id} lg={3} md={4} sm={6} className="mb-4">
                  <CardMovie movie={movie} />
                </Col>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

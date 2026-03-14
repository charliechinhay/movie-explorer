import { Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext.jsx";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar
      expand="lg"
      bg={theme === "light" ? "light" : "dark"}
      data-bs-theme={theme}
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4"
    >
      <Link className="navbar-brand" to="/">
        Movie Explorer
      </Link>

      <Nav className="ms-auto">
        <Link className="nav-link d-inline text-white" to="/">
          Home
        </Link>

        <Link className="nav-link d-inline text-white" to="/favorites">
          Favorites
        </Link>

        <Button onClick={toggleTheme} className="ms-2">
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

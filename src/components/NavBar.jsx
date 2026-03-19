import { Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext.jsx";
import "./NavBar.css";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Link className="navbar-brand" to="/">
        🎬 MovieX
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Link
            className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
            to="/home"
          >
            Home
          </Link>

          <Link
            className={`nav-link ${location.pathname === "/favorites" ? "active" : ""}`}
            to="/favorites"
          >
            ❤️ Favorites
          </Link>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

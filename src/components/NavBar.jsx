import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
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
      </Nav>
    </Navbar>
  );
}

export default NavBar;

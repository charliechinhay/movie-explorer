import NavBar from "./NavBar.jsx";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;

import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.scss"

const Navigation = () => {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-link-brand">
            Kaisa Hakola
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/"  className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-me" className="nav-link">
                About me
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" className="nav-link">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacts" className="nav-link">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

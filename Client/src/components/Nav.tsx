import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="navigation-bar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          Next Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-links"
            navbarScroll
          >
            <Nav.Link as={Link} to="/myBooks" className="nav-link">
              MyBooks
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/recommend" className="nav-link">
              Recommended
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

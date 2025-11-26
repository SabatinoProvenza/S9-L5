import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="md" className="text-light">
      <Container fluid className="px-2">
        <Navbar.Brand href="#">
          <img src="/netflix_logo.png" alt="Netflix Logo" width="90" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/tv-shows" className="nav-link">
              Tv Shows
            </Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search"></i>
            <span>KIDS</span>
            <i className="bi bi-bell"></i>
            <img src="/kids_icon.png" width="32" alt="profile" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar

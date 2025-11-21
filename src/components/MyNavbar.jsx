import { Navbar, Nav, Container } from "react-bootstrap"

const MyNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="md" className="text-light">
      <Container fluid className="px-2">
        <Navbar.Brand href="#">
          <img src="public\netflix_logo.png" alt="Netflix Logo" width="90" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search"></i>
            <span>KIDS</span>
            <i className="bi bi-bell"></i>
            <img src="public\kids_icon.png" width="32" alt="profile" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar

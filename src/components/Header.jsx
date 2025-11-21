import { Container, Dropdown, Button } from "react-bootstrap"

const Header = () => {
  return (
    <header className="bg-dark py-4">
      <Container className="px-4">
        <div className="d-flex align-items-center justify-content-between">
          {/* Sinistra */}
          <div className="d-flex align-items-center gap-3">
            <h2 className="text-light m-0">TV Shows</h2>

            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                className="border-secondary rounded-0 bg-black"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Comedy</Dropdown.Item>
                <Dropdown.Item>Drama</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Destra */}
          <div className="d-flex">
            <Button
              variant="dark"
              className="text-secondary border border-secondary rounded-0 px-3"
            >
              <i className="bi bi-list"></i>
            </Button>

            <Button
              variant="dark"
              className="text-secondary border border-secondary rounded-0 px-3"
            >
              <i className="bi bi-grid"></i>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header

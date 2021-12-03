import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"


function NavbarItem() {
 
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Books
        </Link>
        {localStorage.tokenBook ? (
          <Nav className="me-auto">
            <Link className="nav-link" to="/add-book">
              Add Book
            </Link>
          </Nav>
        ) : null}
        {localStorage.tokenBook ? (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/" >
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              SignUp
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavbarItem

import { useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function NavbarItem() {
  const { logout } = useContext(BooksContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Books
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {localStorage.token !== undefined}
            <Link to="/add-product" className="nav-link">
              Add Book
            </Link>
          </Nav>
          <Nav className="me-auto">
            {localStorage.token === undefined ? (
              <>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/" onClick={logout} className="nav-link">
                  logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem

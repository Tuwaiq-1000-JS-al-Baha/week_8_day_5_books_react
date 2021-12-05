import { useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import BookContext from "../utils/BookContext"

function NavbarItem() {
  const { logout } = useContext(BookContext)
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

            {localStorage.token !== undefined ? (
              <Link to="/add-book" className="nav-link">
                Add Book
              </Link>
            ) : null}
          </Nav>
          <Nav className="ms-auto">
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

                <div className="nav-link" onClick={logout}>
                  Logout
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem

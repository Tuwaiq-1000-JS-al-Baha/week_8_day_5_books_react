import { useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function NavbarItem() {
  const { logout } = useContext(BooksContext)

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <div className="navbar-brand">
          <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" height="50px" />
        </div>
        {localStorage.tokenBook ? (
          <Nav className="me-auto">
            <Link className="nav-link" to="/add-post">
              Add Book
            </Link>
          </Nav>
        ) : null}
        {localStorage.tokenBook ? (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/" onClick={logout}>
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              Sign Up
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

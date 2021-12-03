import { useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function NavbarItem() {
  const { logout } = useContext(BooksContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <div className="navbar-brand">Book</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>

              {localStorage.token !== undefined ? (
                <Link to="/add-book" className="nav-link">
                  Add book
                </Link>
              ) : null}
            </>
          </Nav>
          <Nav className="ms-auto">
            {localStorage.token === undefined ? (
              <>
                <Link to="/signUp" className="nav-link">
                  SignUp
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

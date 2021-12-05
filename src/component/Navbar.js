import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function NavbarItem() {
  const { logout } = useContext(BooksContext)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {localStorage.userToken ? (
              <Nav className="me-auto">
                <Link className="nav-link" to="/add-book">
                  Add Book
                </Link>
              </Nav>
            ) : null}
            {localStorage.userToken ? (
              <Nav className="ms-auto">
                <div className="nav-link" onClick={logout}>
                  Logout
                </div>
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem

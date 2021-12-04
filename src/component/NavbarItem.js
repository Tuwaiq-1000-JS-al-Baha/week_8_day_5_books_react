import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function NavbarItem() {
  const { logout } = useContext(BooksContext)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            books
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
                profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                log out
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
              <Link className="nav-link" to="/login">
                Log in
              </Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem

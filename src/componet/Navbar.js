import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import BookContext from "../uitls/bookContext"

function Navbaritem() {
  const { logout } = useContext(BookContext)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Book
          </Link>
          {localStorage.tokenbook ? (
            <Nav className="md-auto">
              <Link className="nav-link" to="/add-book">
                Add book
              </Link>
            </Nav>
          ) : null}
          {localStorage.tokenbook ? (
            <Nav className="md-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
              <Link className="nav-link" to="/login">
                log in
              </Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default Navbaritem

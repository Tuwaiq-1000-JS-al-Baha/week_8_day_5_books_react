import { useContext } from "react"
import {Navbar, Nav,Container} from "react-bootstrap"
import { Link } from "react-router-dom"
import BookContext from "../utils/BookContext"




function NavbarItem() {
  const { logout } = useContext(BookContext)

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
      <Link className="nav-link" to="/">
              Home
            </Link>
        {localStorage.tokenBook ? (
          <Nav className="me-auto">
            <Link className="nav-link" to="/addbook">
              Add Post
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

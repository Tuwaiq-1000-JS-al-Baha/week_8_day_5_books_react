import {Navbar, Container, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function NavbarItem() {
    return (  
        <Navbar bg="dark" variant="dark">
         <Container>
         <Link to="/" className="navbar-brand">
        BOOKS
        </Link>
        {localStorage.token ? (
          <Nav className="me-auto">
            <Link to="/add-book" className="nav-link">
        Add Book
        </Link>
        </Nav>
        ) : null}

{localStorage.token ? (
          <Nav className="ms-auto">
            <Link to="/profile" className="nav-link">
            Profile
        </Link>
        <Link to="/" className="nav-link">
           Logout
        </Link>
        </Nav>
        ) : (
      <Nav className="ms-auto">
      <Link to="/signup" className="nav-link">
      Sgin Up
        </Link>
        <Link to="/login" className="nav-link">
        Login
        </Link>
      </Nav>
        )}
  </Container>
</Navbar>
    )
}

export default NavbarItem
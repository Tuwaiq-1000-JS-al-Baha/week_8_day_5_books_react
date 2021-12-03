import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavbarItem(props) {
  const { logout } = props
  return (
    <Navbar bg="dark" variant="dark" expand="lg" mb={4}>
      <Container>
        <div className="navbar-brand">Books</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <>
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
              {localStorage.token !== undefined ? (
                <Link to="/addbook" className="nav-link">
                  {" "}
                  Add Book
                </Link>
              ) : null}
            </>
          </Nav>
          <Nav className="ms-auto">
            {localStorage.token === undefined ? (
              <>
                <Link to="/signup" className="nav-link">
                  {" "}
                  Sing up
                </Link>
                <Link to="/login" className="nav-link">
                  {" "}
                  Login{" "}
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="nav-link">
                  {" "}
                  profile
                </Link>
                <div onClick={logout} className="nav-link">
                  {" "}
                  Logout{" "}
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

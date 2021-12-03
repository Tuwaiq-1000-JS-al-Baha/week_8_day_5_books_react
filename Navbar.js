import { useContext } from "react"
import{Navbar ,Container, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import postsContext from "../Utils/PostsContext"

function NavbarItem () {
    const {logout} = useContext(postsContext)
  return(

<Navbar bg="dark" variant="dark">
  <Container>
      <Link className="navbar-brand"  to="/">
     Books
      </Link>
      {localStorage.tokenPost? (
          <Nav className="me-auto">
              <Link className="nav-link" to="/add-book">
                  Add Book
                  </Link>
                  </Nav>
      ):null}
      {localStorage.tokenPost ? (
  
  <Nav className="ms-auto">
      <Link className="nav-link" to="/profile">
          Profile
          </Link>
          <Link className="nav-link" to="/" onClick={logout}>
              Logout
              </Link>
              </Nav>
      ):(
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
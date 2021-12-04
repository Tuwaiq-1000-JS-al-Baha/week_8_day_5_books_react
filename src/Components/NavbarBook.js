import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"
import BookContext from "../utlis/BookContext";

function NavbarBook() {
  const {logout}=useContext(BookContext)
    return ( <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Book</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="nav-link">Books</Link>
      {localStorage.tokenBook!==undefined?(<Link to="/add-book" className="nav-link">Add Book</Link>):null}
    </Nav>
{localStorage.tokenBook === undefined ?( <Nav className="ms-auto">
      <Link to="/signUp" className="nav-link">sign up</Link>
      <Link to="/login" className="nav-link">login</Link>
    </Nav>):(<Nav className="ms-auto">
      <Link to="/profile" className="nav-link">profile</Link>
      <Link to="/logout" className="nav-link" onClick={logout}>logout</Link>
    </Nav>)}
   
    </Container>
  </Navbar>
    
    </> );
}

export default NavbarBook;
import { useContext } from "react";
import {Navbar, Container,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import BooksContext from "../Utils/BooksContext";

function NavbarItem() {
  const {logout}= useContext(BooksContext)
    return ( 
        <Navbar variant="dark"  bg="success" expand="lg">
  <Container>
    <Navbar.Brand  to="/">Library Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className="nav-link" >Home</Link>
        {localStorage.token !== undefined ? (
        <Link to="/add-books" className="nav-link" >Add Books
        </Link>
        ) : null }
      </Nav>
      <Nav className="ms-auto">
      {localStorage.token === undefined ? ( 
       <>
         <Link to="/signup" className="nav-link" >signup</Link>
        <Link to="/login" className="nav-link" > Login</Link>
       </>
      ):(
        <>
         <Link to="/profile" className="nav-link" >profile</Link>
        <div className="nav-link" onClick={logout} > logout</div>
        </>
      )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}

export default NavbarItem; 
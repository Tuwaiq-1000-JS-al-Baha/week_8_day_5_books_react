import { useContext } from "react";
import { Col,  Card, Button} from "react-bootstrap"
import BooksContext from "../Utils/BooksContext";

function BookItem(props) {
    const { book,  inProfile} = props
    const {editBook, deleteBook,} = useContext(BooksContext)
    return ( 
     
        <Col>
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text> {book.description}</Card.Text>
          <Card.Text>{book.auther}  </Card.Text>
      
          {inProfile === true ? (
            <>
              <Button variant="info" id={book._id} onClick={editBook}>
                Edit
              </Button>
              <Button className="ms-2" variant="danger" id={book._id} onClick={deleteBook}>
                Delete
              </Button>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  )
}


export default BookItem;
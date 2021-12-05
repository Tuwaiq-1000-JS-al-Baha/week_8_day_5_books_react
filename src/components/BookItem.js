import { useContext } from "react"
import { Col, Card, Button } from "react-bootstrap"
import BookContext from "../utils/BookContext"

function BookItem(props) {
  const { book, inProfile } = props
  const { editBook, deleteBook } = useContext(BookContext)
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.body}</Card.Text>
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

export default BookItem

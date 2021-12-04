import { useContext } from "react"
import { Col, Card, Button } from "react-bootstrap"

import BooksContext from "../utils/BooksContext"

function BookItem(props) {
  const { book, inProfile } = props
  const { bookEdit, deleteBook } = useContext(BooksContext)
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.numberOfCopies}</Card.Text>
          <Card.Text>{book.author}</Card.Text>
          {inProfile === true ? (
            <>
              <Button id={book._id} size="sm" onClick={bookEdit}>
                Edit
              </Button>
              <Button id={book._id} variant="danger" size="sm" className="ms-2" onClick={deleteBook}>
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

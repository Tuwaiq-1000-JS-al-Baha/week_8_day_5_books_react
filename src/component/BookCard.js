import { useContext, useState } from "react"
import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function BookCard(props) {
  const { book, inProfile } = props
  const { deleteBook } = useContext(BooksContext)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }
  return (
    <>
      <Col>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.body}</Card.Text>
          {inProfile ? (
            <>
              <Button variant="success" className="me-2" onClick={handleOpen}>
                Edit
              </Button>
              <Button variant="danger" id={book._id} onClick={deleteBook}>
                Delet
              </Button>
            </>
          ) : (
            <Link className="btn btn-primary" to={`/book/${book._id}`}>
              View
            </Link>
          )}
        </Card.Body>
      </Col>
    </>
  )
}

export default BookCard

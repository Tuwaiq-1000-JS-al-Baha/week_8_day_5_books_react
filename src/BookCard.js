import { useContext, useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import ModelItem from "./ModelItem"

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
        <Card>
          <Card.Body>
            <Card.Title> {book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>

            <Card.Text>{book.auther}</Card.Text>
            <Card.Text>{book.price}</Card.Text>
            {inProfile ? (
              <>
                <Button onClick={handleOpen} variant="success" className="me-2">
                  {" "}
                  Edit
                </Button>
                <Button onClick={() => deleteBook(book._id)} variant="danger">
                  {" "}
                  Delete
                </Button>
              </>
            ) : (
              <Link to={`/book/${book._id}`} className="btn btn-primary">
                View
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
      <ModelItem show={show} handleClose={handleClose} book={book} />
    </>
  )
}

export default BookCard

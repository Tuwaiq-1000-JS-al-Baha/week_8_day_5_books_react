import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import ModalItem from "./Modal"

function BookCard(props) {
  const { book, inProfile } = props
  const { deleteBook } = useContext(BooksContext)
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  if (!book._id) return null
  return (
    <>
      <Col>
        <Card>
          <Card.Title>{book.title}</Card.Title>
          <Card.Img variant="top" src={book.image} />
          <Card.Body>
            <Card.Title>{book.author}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            {inProfile ? (
              <>
                <Button variant="success" className="me-2" onClick={handleOpen}>
                  Edit
                </Button>
                <Button id={book._id} variant="danger" onClick={deleteBook}>
                  Delete
                </Button>
              </>
            ) : null}
          </Card.Body>
        </Card>
      </Col>
      <ModalItem show={show} handleClose={handleClose} book={book} />
    </>
  )
}

export default BookCard

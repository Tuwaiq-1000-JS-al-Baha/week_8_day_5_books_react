import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import BookContext from "../uitls/bookContext"
import Modleitme from "./Modle"

function BookCard(props) {
  const { book, inProfile } = props
  const { deletpost } = useContext(BookContext)
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={book.image} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Title>{book.author}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            {inProfile ? (
              <>
                <Button variant="success" className="me-2" onClick={handleShow}>
                  Edit
                </Button>
                <Button variant="danger" onClick={deletpost} id={book._id}>
                  {" "}
                  delet
                </Button>
              </>
            ) : (
              <Link className="btn btn-danger" to={`/book/${book._id}`}>
                View
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Modleitme show={show} handleClose={handleClose} book={book} />
    </>
  )
}

export default BookCard

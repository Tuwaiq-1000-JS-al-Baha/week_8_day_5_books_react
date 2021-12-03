import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import postsContext from "../Utils/PostsContext"
import ModalItem from "./Modal"

function BookCard(props) {
  const { book, inProfile } = props
  const [show, setShow] = useState(false)
  const { deleteBook} = useContext(postsContext)
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
            <Card.Title>
              {" "}
              {book._user.firstName} {book._user.lastName}
            </Card.Title>
            <Card.Img variant="top" src={book.auther} />
            <Card.Title> {book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>

            <Card.Text>{book.price}</Card.Text>
            {inProfile ? (
              <>
                <Button variant="success" className="me-2" onClick={handleOpen}>
                  Edit
                </Button>
                <Button variant="danger" onClick={()=> deleteBook (book._id)}> 
                Delete
                </Button>
              </>
            ) : (
              <Link className="btn btn-primary" to={`/book/${book._id}`}>
                View
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
      <ModalItem show={show} handleClose={handleClose} book={book} />
    </>
  )
}

export default BookCard

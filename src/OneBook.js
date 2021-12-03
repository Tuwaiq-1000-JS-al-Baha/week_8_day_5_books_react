import { useParams } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import { useContext } from "react"
import { Col, Container, Row, Card } from "react-bootstrap"

function OneBook() {
  const { bookId } = useParams()
  console.log(bookId)
  const { books, Profile } = useContext(BooksContext)
  const book = books.find(p => p._id === bookId)
  if (!book) {
    return null
  }

  return (
    <Container className="mt-5 mb-3">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={2}>
          <h3>Owner</h3>
        </Col>

        <Col md={4}>
          <h3>
            {Profile.owner.firstName} {Profile.owner.lastName}
          </h3>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center ">
        <Col>
          <Card>
            <Card.Header>
              <Card.Title className="text-center">{book.title}</Card.Title>
            </Card.Header>
            <Card.Body className="text-center" style={{ height: 200 }}>
              <Card.Text>{book.description}</Card.Text>
            </Card.Body>
            <Card.Body className="text-center" style={{ height: 200 }}>
              <Card.Text>{book.auther}</Card.Text>
            </Card.Body>
            <Card.Body className="text-center" style={{ height: 200 }}>
              <Card.Text>{book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OneBook

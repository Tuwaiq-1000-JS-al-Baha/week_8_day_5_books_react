import { useContext } from "react"
import { Col, Container, Image, Row, Card } from "react-bootstrap"
import { useParams } from "react-router"
import PostsContext from "../Utils/BookContext"

function OnePost() {
  const { bookId } = useParams()
  const { books } = useContext(PostsContext)
  const book = books.find(p => p._id === bookId)

  if (!book) {
    return <h1>Loading</h1>
  }
  return (
    <Container className="mt-5 mb-3">
      <Row className="d-fiex align-items-center justify-content-center">
        <Col md={2}>
          <h3>Owner</h3>
        </Col>
        <Col md={3}>
          <Image src={book.owner.avtar} style={{ height: 200 }} />
        </Col>
        <Col md={4}>
          <h3>
            {book.owner.firstName}
            {book.owner.lastName}
          </h3>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center">
        <Col>
          <Image src={book.image} style={{ height: 400 }} thumbnail />
        </Col>
        <Col md={7}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center">{book.title}</Card.Title>
            </Card.Header>
            <Card.Body style={{ heghit: 200 }}>
              <Card.Text className="text-center">{book.description}</Card.Text>
              <Card.Text className="text-center">{book.author}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OnePost

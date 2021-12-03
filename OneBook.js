import { useContext } from "react"
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import postsContext from "../Utils/PostsContext"
function OneBook() {
  const {bookId } = useParams()
  const { books } = useContext(postsContext)
  const book = books.find(p => p._id === bookId)
  if (!book) {
    return <h1>Loading....</h1>
  }
  return (
    <Container className="mt-5 md-3">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={2}>
          <h3>Owner</h3>
        </Col>
        <Col md={3}>
          <Image src={book._user.photo} style={{ height: 200 }} />
        </Col>
        <Col md={4}>
          <h3>
            {book._user.firstName}
            {book._user.lastName}
          </h3>
        </Col>
      </Row>
      <Row className=" mt-5 d-flex align-items-center">
        <Col>
          <Image src={book.auther} style={{ height: 400 }} thumbnail />
        </Col>
        <Col md={7}>
          <Card.Header>
            <Card.Title className="text-center">{book.title}</Card.Title>
          </Card.Header>
          <Card.Body style={{ height: 200 }}>
            <Card.Text className="text-center">{book.description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  )
}
export default OneBook

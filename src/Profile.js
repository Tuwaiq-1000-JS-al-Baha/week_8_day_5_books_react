import { Row, Col, Container, Image } from "react-bootstrap"
import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
import BookCard from "../components/BookCard"

function Profile() {
  const { profile, books, deleteBook } = useContext(BooksContext)
  if (!profile) {
    return <h1>Loading ..</h1>
  }
  const myBooks = books.filter(book => book.owner._id === profile._id)

  return (
    <Container>
      <Row className="d-flex align-items-center my-4 mb-5">
        <Col md="5">
          <Image variant="top" src={profile.avatar} height={250} />
        </Col>

        <Col>
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>

          <p className="text-muted"> {profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {myBooks.map(book => (
          <BookCard book={book} inProfile={true} deleteBook={deleteBook} />
        ))}
      </Row>
    </Container>
  )
}

export default Profile

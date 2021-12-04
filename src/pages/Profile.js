import { useContext } from "react"
import BookCard from "../components/BookCard"
import BooksContext from "../utils/BooksContext"
import { Container, Row, Col, Image } from "react-bootstrap"

function Profile() {
  const { profile, books } = useContext(BooksContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }
  const myBooks = books.filter(book => book.owner._id === profile._id)

  

  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.avatar} height="250px" />
        </Col>

        <Col>
          <h2 className="mb-2">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {myBooks.map(book => (
          <BookCard book={book} inProfile={true} />
        ))}
      </Row>
    </Container>
  )
}

export default Profile

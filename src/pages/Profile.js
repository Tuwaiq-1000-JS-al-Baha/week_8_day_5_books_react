import { useContext } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import BookContext from "../utils/BookContext"
import BookCard from "../component/BookCard"

function Profile() {
  const { profile, books } = useContext(BookContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }

  const myBooks = books.filter(book => book.user._id === profile._id)

  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.photo} height="250px" />
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

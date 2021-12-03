import { useContext } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import BookCard from "../components/BookCard"
import BooksContext from "../Utils/BookContext"
function Profile() {
  const { profile, books } = useContext(BooksContext)
  const myBooks = books.filter(book => book.owner._id === profile._id)
  if (!profile) {
    return <h1>Loading...</h1>
  }
  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.avtar} height="250px" />
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

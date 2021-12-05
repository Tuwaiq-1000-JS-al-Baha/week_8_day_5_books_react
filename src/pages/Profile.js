import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import BookCard from "../component/BookCard"
import BooksContext from "../utils/BooksContext"

function Profile() {
  const { profile, books } = useContext(BooksContext)
  console.log(books)
  const mybooks = books.filter(book => book.owner._id === profile._id)

  if (!profile) return <h4>Loding...</h4>
  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <h2 className="mb-2">
            {profile.first_Name} {profile.last_Name}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {mybooks.map(book => (
          <BookCard book={book} inProfile={true} />
        ))}
      </Row>
    </Container>
  )
}

export default Profile

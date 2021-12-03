import { useContext } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import BookCard from "../componet/BookCard"
import BookContext from "../uitls/bookContext"

function Profile() {
  const { profile, books } = useContext(BookContext)
  if (!profile) {
    return <h1>Loding.....</h1>
  }
  const mybook = books.filter(book => book._user._id === profile._id)

  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.avatar} height="250px" />
        </Col>
        <Col>
          <h2 className="mb-2">
            {profile.firstName}
            {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {mybook.map(book => (
          <BookCard book={book} inProfile={true} />
        ))}
      </Row>
    </Container>
  )
}

export default Profile

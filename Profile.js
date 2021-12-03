import {useContext} from "react"
import {Col,Container,Image, Row} from "react-bootstrap"
import BookCard from "../components/BookCard"
import PostsContext from "../Utils/PostsContext"
function Profile() {
  const { profile,books } = useContext(PostsContext)
  const myBooks = books.filter(book =>book._user._id === profile._id)

  if (!profile) {
    return <h1>Loading</h1>
  }

  return (
    <Container>
      <Row className="d-flex align-items-center md-5">
        <Col >
          <Image src={profile.avatar}  height="250px"   />
        </Col>
        <Col>
        <h2 className="md-2 ">
            {profile.firstName}
            {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email} </p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {myBooks.map(book=>(
        <BookCard book={book} inProfile={true}/>))}
      <Col>

      </Col>
      </Row>
    </Container>
  )
}
export default Profile

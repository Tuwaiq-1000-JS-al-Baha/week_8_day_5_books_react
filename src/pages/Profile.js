import { Card, Row, Col } from "react-bootstrap"
import BookItem from "../components/BookItem"
import BookEdit from "../components/BookEdit"

function Profile(props) {
  const { profile, editBook, deleteBook, confirmEdit, editId , books} = props
  const myBooks = books.filter(book => book.owner._id === profile._id)
  return (
    <>
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={profile.avatar} />
            <Card.Body>
              <Card.Title>
                {profile.firstName} {profile.lastName}
              </Card.Title>
              <Card.Text>{profile.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        {myBooks.map(book => {
          if (profile._id === editId) {
            return <BookEdit book={book} confirmEdit={confirmEdit} />
          }
          return (
            <BookItem book={book} inProfile={true} editBook={editBook} deleteBook={deleteBook} />
          )
        })}
      </Row>
    </>
  )
}

export default Profile

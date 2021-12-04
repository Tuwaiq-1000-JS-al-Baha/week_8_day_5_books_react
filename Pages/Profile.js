import { useContext } from "react"
import { Col, Card, Row } from "react-bootstrap"
import BookEdit from "../compontes/bookedit"
import BookItem from "../compontes/bookItem"
import BooksContext from "../utils/bookscontext"

function Profile() {
  const { profile, bookEdit, deleteBook, editId, confirmEdit } = useContext(BooksContext)
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
        {profile.books?.map(book => {
          if (editId === book._id) {
            return <BookEdit key={book._id} book={book} confirmEdit={confirmEdit} />
          } else {
            return (
              <>
                <BookItem key={book._id} inProfile={true} book={book} bookEdit={bookEdit} deleteBook={deleteBook} />
              </>
            )
          }
        })}
      </Row>
    </>
  )
}

export default Profile
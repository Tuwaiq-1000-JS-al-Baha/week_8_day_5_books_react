import { useContext } from "react"
import { Card, Col, Row, Spinner } from "react-bootstrap"
import BookEdit from "../Componets/BookEdit"
import Bookitem from "../Componets/Bookitem"
import BooksContext from "../utils/BooksContext"

function Profile() {
  const { profile, editBook, deleteBook, confirmEdit, editId, books } = useContext(BooksContext)

  const myBooks = books.filter(book => book.owner._id === profile._id)
  //const { inProfile } = props
  if (profile.avatar === undefined)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  else
    return (
      <>
        <Row>
          <Col md="2">
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
            if (book._id === editId) {
              return <BookEdit key={book._id} book={book} confirmEdit={confirmEdit} />
            }
            return <Bookitem key={book._id} inProfile={true} book={book} editBook={editBook} deleteBook={deleteBook} />
          })}
        </Row>
      </>
    )
}

export default Profile

import {Card,Col,Row} from "react-bootstrap"
import BookItem from "../componets/BookItem";
import BooktEdit from "../componets/BookEdit"
import { useContext } from "react";
import BooksContext from "../Utils/BooksContext"
function Profile(props) {
    const {books}=props
    const {profile,editId,editBook,confirmEdit,deleteBook} = useContext(BooksContext)
    const myBooks = books.filter(book => book.owner._id == profile._id)
  
    return (
        <>
          <Row>
            <Col md="6">
              <Card>
                <Card.Img variant="top" src={profile.photo} />
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
            {myBooks?.map(book => {
              if (book._id === editId) {
                return <BooktEdit book={book} confirmEdit={confirmEdit} />
              }
              return (
                <BookItem book={book} inProfile={true} editBook={editBook} deleteBook={deleteBook} />
              )
            })}
          </Row>
        </>
      )
}

export default Profile;
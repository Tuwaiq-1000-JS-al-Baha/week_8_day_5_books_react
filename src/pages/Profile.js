import { Card, Row, Col } from "react-bootstrap"
import BookEdit from "../components/BookEdit"
import BookItem from "../components/BookItem"

function Profile(props) {
  const { profile, editbook, deletebook, confirmEdit, editId, books } = props

  const myBooks = books.filter(book => book.owner._id == profile._id)

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
          if (book._id === editId) {
            return <BookEdit book={book} confirmEdit={confirmEdit} />
         
          }
          return (
             <BookItem book={book} inProfile={true}  editbook={editbook} confirmEdit={confirmEdit}  deletebook={ deletebook}  />
          )
            // <div class="col-lg-15 ">
            //   <img src={book.image} alt="" class="img-fluid rounded shadow-sm" />
            //   <h6> {book.title}</h6>
            //   <p>{book.description}</p>
            //   <h5>{book.author}</h5>
            // </div>
         
        })}
      </Row>

      {/* <Row> */}
        {/* {profile.books?.map(book => {
          if (book._id === editId) {
            return <bookEdit book={book} confirmEdit={confirmEdit} />
          }
          return (
            <bookItem book={book} inProfile={true} editbook={editbook} deletebook={deletebook} />
          )
        })}  */}
      {/* </Row> */}
    </>
  )
}

export default Profile

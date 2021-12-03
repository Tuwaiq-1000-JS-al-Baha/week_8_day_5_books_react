import { Col, Card, Button } from "react-bootstrap"

function BookItem(props) {
  const { book, editBook, deleteBook, inProfile } = props
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>Title: {book.title}</Card.Title>
          <Card.Text>Description: {book.description}</Card.Text>
          <Card.Text>author: {book.author} SAR</Card.Text>
          {inProfile === true ? (
            <>
              <Button variant="info" id={book._id} onClick={editBook}>
                Edit
              </Button>
              <Button className="ms-2" variant="danger" id={book._id} onClick={deleteBook}>
                Delete
              </Button>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BookItem
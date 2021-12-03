import { Col, Card, Button } from "react-bootstrap"

function BookItem(props) {
  const { book, editbook, deletebook, inProfile } = props
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text> description : {book.description}</Card.Text>
          <Card.Text>Author : {book.author}</Card.Text>
          {inProfile === true ? (
            <>
              <Button variant="info" id={book._id} onClick={editbook}>
                Edit
              </Button>
              <Button className="ms-2" variant="danger" id={book._id} onClick={deletebook}>
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

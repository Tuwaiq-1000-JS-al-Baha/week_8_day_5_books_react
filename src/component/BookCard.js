
import { Card, Col } from "react-bootstrap"



function BookCard(props) {
  const { book} = props


  
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              {book._user.firstName} {book._user.lastName}
            </Card.Title>
            <Card.Img variant="top" src={book.image} />
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>

          </Card.Body>
        </Card>
      </Col>
      
    </>
  )
}

export default BookCard

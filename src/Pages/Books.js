import { useContext } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import Bookedit from "../Components/Bookedit"
import BookContext from "../utlis/BookContext"

function Books() {
  const { books, editBook, deleteBook, editId } = useContext(BookContext)
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {books.map(book => {
          if (editId == book._id) {
            return <Bookedit book={book} />
          } else {
            return (
              <Col>
                <Card>
                  <Card.Img variant="top" src={book.image} height="200" />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Title>{book.author}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                  </Card.Body>
                </Card>
                <Button onClick={editBook} id={book._id}>
                  Edit
                </Button>
                <Button onClick={deleteBook} id={book._id}>
                  Delete
                </Button>
              </Col>
            )
          }
        })}
      </Row>
    </>
  )
}

export default Books

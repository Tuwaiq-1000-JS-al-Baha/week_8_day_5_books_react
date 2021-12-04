import { useContext } from "react"
import { Form, Col, Row, Button, Card } from "react-bootstrap"
import BooksContext from "../Utils/BooksContext";
function BookEdit(props) {
  const { book } = props
  const { confirmEdit } = useContext(BooksContext)
  return (
    <Col>
      <Card>
        <Form className="mt-5" onSubmit={confirmEdit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={book.title} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control type="textarea" name="description" rows={3} defaultValue={book.description} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Auther
            </Form.Label>
            <Col sm="8">
              <Form.Control type="number" name="auther" defaultValue={book.price} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Image
            </Form.Label>
            <Col sm="8">
              <Form.Control type="url" defaultValue={book.image} name="image" required />
            </Col>
          </Form.Group>
          <Button type="submit" variant="success">
            Confirm
          </Button>
        </Form>
      </Card>
    </Col>
  )
}

export default BookEdit
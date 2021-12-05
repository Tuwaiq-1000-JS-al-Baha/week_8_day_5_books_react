import { useContext } from "react"
import { Form, Col, Row, Button, Card } from "react-bootstrap"
import BookContext from "../utils/BookContext"

function BookEdit(props) {
  const { book } = props
  const { confirmEdit } = useContext(BookContext)

  return (
    <Col>
      <Card>
        <Form className="m-2" onSubmit={confirmEdit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" defaultValue={book.title} type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Body
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="body" rows={3} defaultValue={book.body} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Author
            </Form.Label>
            <Col md="8">
              <Form.Control name="author" defaultValue={book.author} type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={book.image} required />
            </Col>
          </Form.Group>

          <Button variant="success" type="submit">
            Confirm
          </Button>
        </Form>
      </Card>
    </Col>
  )
}

export default BookEdit

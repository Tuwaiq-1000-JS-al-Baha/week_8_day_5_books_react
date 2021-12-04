import { useContext } from "react"
import { Col, Form, Row, Button, Card } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function ProductEdit(props) {
  const { book } = props
  const { confirmEdit } = useContext(BooksContext)
  return (
    <Col>
      <Card>
        <Form className="mt-2" onSubmit={confirmEdit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" required name="title" defaultValue={book.title} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" rows={3} required name="description" defaultValue={book.description} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              author
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" required name="author" defaultValue={book.author} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" required name="image" defaultValue={book.image} />
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

export default ProductEdit

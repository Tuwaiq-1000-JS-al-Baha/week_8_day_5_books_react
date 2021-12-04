import { Form, Col, Row, Button, Card } from "react-bootstrap"

function BookEdit(props) {
  const { confirmEdit, book } = props

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
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" rows={3} defaultValue={book.description} required />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={book.avatar} required />
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
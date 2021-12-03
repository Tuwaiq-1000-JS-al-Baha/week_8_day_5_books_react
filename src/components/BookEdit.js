import { Form, Col, Row, Button, Card } from "react-bootstrap"

function BookEdit(props) {
  const { confirmEdit, book } = props

  return (
    <Col>
      <Card>
        <Form className="m-2" onSubmit={confirmEdit}>
            {/* title */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" defaultValue={book.title} type="text"  />
            </Col>
          </Form.Group>
          {/* desription */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" rows={3} defaultValue={book.description}  />
            </Col>
          </Form.Group>
          {/* author */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Author
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="author" defaultValue={book.author}  />
            </Col>
          </Form.Group>
         
        {/* image */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={book.image}  />
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

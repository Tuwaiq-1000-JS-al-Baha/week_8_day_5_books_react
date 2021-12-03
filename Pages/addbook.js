import { Row, Form, Col, Button } from "react-bootstrap"

function addbook(props) {
  const { addBook } = props
  return (
    <div className="ms-4 mt-4">
      <h1>Add Book</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col md="6">
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            NumberOfCopies
          </Form.Label>
          <Col md="6">
            <Form.Control name="numberOfCopies" type="number" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Author
          </Form.Label>
          <Col md="6">
            <Form.Control name="author" type="text" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Book</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default addbook
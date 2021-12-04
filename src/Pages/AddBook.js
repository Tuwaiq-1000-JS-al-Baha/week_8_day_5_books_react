import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddBook() {
  const { addBook, setErrorSignup } = useContext(BooksContext)
  setErrorSignup(null)
  return (
    <div className="ms-4 mt-4">
      <h1>Add Book</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" required name="title" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Description
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" rows={3} required name="description" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            author
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" required name="author" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" required name="image" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="onsubmit">Add Book</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook

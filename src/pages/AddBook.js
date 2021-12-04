import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import BookContext from "../utils/BookContext"

function AddBook() {
  const { addBook } = useContext(BookContext)
  return (
    <div className="ms-4" onSubmit={addBook}>
      <h1>Add product</h1>
      <Form className="mt-5">
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
            description
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="description" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="image" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            author
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="author" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Post</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook

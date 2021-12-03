import { Form, Col, Row, Button } from "react-bootstrap"
import {useContext } from "react";
import BooksContext from "../Utils/BooksContext"
function AddBook() {
  const { addProduct, setErrorSignUp } = useContext(BooksContext)
  setErrorSignUp(null)
  return (
    <div className="ms-4 mt-4">
      <h1>Add Books</h1>
      <Form className="mt-5" onSubmit={addProduct}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="title" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Description
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="description" required />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            auther
          </Form.Label>
          <Col sm="6">
            {/* <Form.Control type="number" name="price" required /> */}
            <Form.Control type="text" name="auther" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col sm="6">
            <Form.Control type="url" name="image" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="primary">
              Add Books
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook
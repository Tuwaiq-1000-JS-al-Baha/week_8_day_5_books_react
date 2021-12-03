import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"

function AddBook() {
  const { addBook } = useContext(PostsContext)

  return (
    <>
      <div className="ms-4" onSubmit={addBook}>
        <h1>Add product</h1>
        <Form className="mt-5">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
            description
            </Form.Label>
            <Col md="6">
              <Form.Control type="textarea" name="description" rows={3} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              auther
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="auther" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              price
            </Form.Label>
            <Col md="6">
              <Form.Control type="number" name="price" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Add Book</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default  AddBook

import { useContext } from "react"
import { Form, Col, Button, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddBook() {
  const { addBook } = useContext(BooksContext)

  return (
    <div className="ms-5 mt-4">
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title:</Form.Label>
          <Col md="6">
            <Form.Control name="title" className=" l-5" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>description</Form.Label>
          <Col md="6">
            <Form.Control name="description" as="textarea" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label> author:</Form.Label>
          <Col md="6">
            <Form.Control name=" author" className=" l-5" type="text" required />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>image:</Form.Label>
          <Col md="6">
            <Form.Control name="image" type="url" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="my-5" type="submit">
              Add book
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook

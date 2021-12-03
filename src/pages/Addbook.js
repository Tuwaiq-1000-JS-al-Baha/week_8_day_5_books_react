import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import BookContext from "../uitls/bookContext"

function Addbook() {
  const { addbook } = useContext(BookContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Add book</h1>
      <Form className="mt-5" onSubmit={addbook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            Title
          </Form.Label>
          <Col sm={6}>
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            description
          </Form.Label>
          <Col sm={6}>
            <Form.Control as="textarea" rows={3} required name="description" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            author
          </Form.Label>
          <Col sm={6}>
            <Form.Control name="author" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            image
          </Form.Label>
          <Col md={6}>
            <Form.Control name="image" type="url" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sibmit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Addbook

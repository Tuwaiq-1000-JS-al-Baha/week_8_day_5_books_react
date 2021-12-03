import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
function SignUp() {
  const { signup } = useContext(BooksContext)

  return (
    <div className="ms-4 mt-4">
      <Form className="mt-5" onSubmit={signup}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            First name
          </Form.Label>
          <Col sm="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last name
          </Form.Label>
          <Col sm="6">
            <Form.Control name="lastName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col sm="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            password
          </Form.Label>
          <Col sm="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col sm="6">
            <Form.Control type="url" name="photo" required />
          </Col>
        </Form.Group>
        <Row></Row>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign Up </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp

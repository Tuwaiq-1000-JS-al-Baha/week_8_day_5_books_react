import { useContext } from "react"
import { Alert, Row, Form, Col, Button } from "react-bootstrap"
import BooksContext from "../utils/bookscontext"

function SignUp() {
  const { signUp, errorSignUp } = useContext(BooksContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Sign Up</h1>
      <Form className="mt-5" onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            First Name:
          </Form.Label>
          <Col md="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last Name:
          </Form.Label>
          <Col md="6">
            <Form.Control name="lastName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control name="email" type="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password:
          </Form.Label>
          <Col md="6">
            <Form.Control name="password" type="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control name="avatar" type="url" required />
          </Col>
        </Form.Group>
        <Row>
          <Col className="md-8">{errorSignUp !== null ? <Alert variant="danger">{errorSignUp}</Alert> : null}</Col>
        </Row>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp
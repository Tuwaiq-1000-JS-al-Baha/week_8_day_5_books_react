import { useContext } from "react"
import { Form, Col, Row, Button, Alert } from "react-bootstrap"
import BooksContext from "../Utils/BooksContext"
function SignUp() {
  const { signUp, errorSignup } = useContext(BooksContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Sign Up</h1>
      <Form className="mt-5" onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            First Name
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="firstName" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last Name
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="lastName" required />
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
            <Form.Control type="url" name="avatar" required />
          </Col>
        </Form.Group>
        <Row>
          <Col md="8">{errorSignup !== null ? <Alert variant="danger"> {errorSignup}</Alert> : null}</Col>
        </Row>
        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp 
import { useContext } from "react"
import { Col, Form, Row, Button, Alert } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

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
          <Col md="6">
            <Form.Control type="text" required name="firstName" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last Name
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" rows={3} required name="lastName" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" required name="email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            avatar
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="avatar" />
          </Col>
        </Form.Group>
        <Row>
          <Col md="8">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col>
        </Row>

        <Form.Group as={Row} className="mb-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp

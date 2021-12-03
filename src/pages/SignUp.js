import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import BooksContext from "../Utils/BookContext"

function SignUp() {
  const { signUp } = useContext(BooksContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Sign Up</h1>
      <Form className="mt-5" onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            First Name
          </Form.Label>
          <Col md="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last Name
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="lastName" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="photo" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp

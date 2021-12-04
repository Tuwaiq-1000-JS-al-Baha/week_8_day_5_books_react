import { useContext } from "react"
import { Form, Col, Button, Row, Alert } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function SignUp() {
  const { signup } = useContext(BooksContext)

  return (
    <div className="ms-5 mt-4">
      <Form className="mt-5" onSubmit={signup}>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>First Name:</Form.Label>
          <Col md="6">
            <Form.Control name="firstName" className=" l-5" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>Last Name:</Form.Label>
          <Col md="6">
            <Form.Control type="text" name="lastName" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email:</Form.Label>
          <Col md="6">
            <Form.Control name="email" type="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>password:</Form.Label>
          <Col md="6">
            <Form.Control name="password" type="password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
          <Form.Label>category:</Form.Label>
          <Col md="6"></Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>photo:</Form.Label>
          <Col md="6">
            <Form.Control name="photo" type="url" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="my-5" type="submit">
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
export default SignUp

import { useContext } from "react"
import { Form, Col, Button, Row, Alert } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function Login() {
  const { login } = useContext(BooksContext)

  return (
    <div className="ms-5 mt-4">
      <Form className="mt-5" onSubmit={login}>
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
        {/* <Row>
          <Col md="8">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col>
        </Row> */}
        <Form.Group as={Row} as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="my-5" type="submit">
              Log In
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
export default Login

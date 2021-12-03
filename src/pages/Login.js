import { useContext } from "react"
import { Alert, Row, Form, Col, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function Login() {
  const { login, errorLogin } = useContext(BooksContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Login</h1>
      <Form className="mt-5" onSubmit={login}>
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

        <Row>
          <Col className="md-8">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col>
        </Row>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login

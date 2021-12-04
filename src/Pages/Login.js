import { useContext } from "react"
import { Alert, Col, Form, Row, Button } from "react-bootstrap"
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

        <Row>
          <Col md="8">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col>
        </Row>

        <Form.Group as={Row} className="mb-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login

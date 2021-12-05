import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function Login() {
  const { login } = useContext(BooksContext)
  return (
    <div className="ms-5 mt-4 me-5">
      <Form onSubmit={login}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  )
}

export default Login

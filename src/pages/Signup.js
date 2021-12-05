import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function Signup() {
  const { signup } = useContext(BooksContext)
  return (
    <div className="ms-5 mt-4 me-5">
      <Form onSubmit={signup}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" name="firs_tName" placeholder="Enter your First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" name="last_Name" placeholder="Enter your last name " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" required type="submit">
          Sign
        </Button>
      </Form>
    </div>
  )
}

export default Signup

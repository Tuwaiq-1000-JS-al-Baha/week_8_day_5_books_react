import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import BookContext from "../uitls/bookContext"

function SignUp() {
  const { signUp } = useContext(BookContext)
  return (
    <div className="ms-4 mt-4">
      <Form className="mt-5" onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            firstName
          </Form.Label>
          <Col sm={6}>
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            LastName
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="text" required name="lastName" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            email
          </Form.Label>
          <Col md={6}>
            <Form.Control name="email" type="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            password
          </Form.Label>
          <Col md={6}>
            <Form.Control name="password" type="password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2}>
            photo
          </Form.Label>
          <Col md={6}>
            <Form.Control name="avatar" type="url" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit"> Sing Up </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp

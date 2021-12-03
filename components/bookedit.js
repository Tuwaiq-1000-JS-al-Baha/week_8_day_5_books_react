import { useContext } from "react"
import { Row, Form, Col, Button, Card } from "react-bootstrap"
import BooksContext from "../utils/bookscontext"

function bookedit(props) {
  const { book } = props
  const { confirmEdit } = useContext(BooksContext)
  return (
    <Col>
      <Card>
        <Form className="m-2" onSubmit={confirmEdit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" defaultValue={book.title} type="text" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              NumberOfCopies
            </Form.Label>
            <Col md="8">
              <Form.Control name="numberOfCopies" defaultValue={book.numberOfCopies} type="number" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Author
            </Form.Label>
            <Col md="8">
              <Form.Control name="author" defaultValue={book.author} type="text" required />
            </Col>
          </Form.Group>

          <Button type="submit" variant="success">
            Confirm
          </Button>
        </Form>
      </Card>
    </Col>
  )
}

export default bookedit
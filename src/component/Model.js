import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function ModalItem(props) {
  const { show, handleClose, book } = props
  const { confirmBook } = useContext(BooksContext)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit book</Modal.Title>
      </Modal.Header>
      <Form className="mt-5" onSubmit={e => confirmBook(e, book._id)}>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
            <Form.Label>Title:</Form.Label>
            <Col md="6">
              <Form.Control name="title" defaultValue={book.title} className=" l-5" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
            <Form.Label>description</Form.Label>
            <Col md="6">
              <Form.Control defaultValue={book.description} name="description" as="textarea" rows={3} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
            <Form.Label>authore</Form.Label>
            <Col md="6">
              <Form.Control defaultValue={book.author} name="authore" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>image:</Form.Label>
            <Col md="6">
              <Form.Control defaultValue={book.image} name="image" type="url" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalItem

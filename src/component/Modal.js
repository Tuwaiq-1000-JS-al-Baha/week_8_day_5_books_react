import { useContext } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function ModalItem(props) {
  const { show, handleClose, book } = props
  const { confirmBook } = useContext(BooksContext)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit book</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e => confirmBook(e, book._id)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label> Title </Form.Label>
              <Form.Control required type="text" name="title" defaultValue={book.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description </Form.Label>
              <Form.Control required type="text" name="description" defaultValue={book.body} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>author </Form.Label>
              <Form.Control required type="text" name="author" defaultValue={book.body} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control required type="url" name="image" defaultValue={book.image} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ModalItem

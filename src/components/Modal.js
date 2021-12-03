import { useContext } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import BooksContext from "../Utils/BookContext"

function ModalItem(props) {
  const { show, handleClose, book } = props
  const { confirmBook } = useContext(BooksContext)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>

      <Form onSubmit={e => confirmBook(e, book._id)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              {" "}
              Title </Form.Label>
            <Form.Control name="title" type="text" defaultValue={book.title} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              {" "}
              description{" "}
            </Form.Label>
            <Form.Control as="textarea" name=" description" defaultValue={book.description} rows={3} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              Image
            </Form.Label>
            <Form.Control type="url" name="image" rows={3} defaultValue={book.image} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              {" "}
              author{" "}
            </Form.Label>
            <Form.Control as="textarea" name="author" defaultValue={book.author} rows={3} required />
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
  )
}

export default ModalItem

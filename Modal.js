import { useContext } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"

function ModalItem(props) {
  const { show, handleClose, book } = props
  const { confirmBook } = useContext(PostsContext)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit books</Modal.Title>
      </Modal.Header>
      <Form onSubmit={e => confirmBook(e, book._id)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" defaultValue={book._title} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
            description
            </Form.Label>
            <Form.Control as="textarea" name="description" defaultValue={book._description} rows={3} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              auther
            </Form.Label>
            <Form.Control type="text" name="auther" defaultValue={book._auther} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
            price
            </Form.Label>
            <Form.Control type="number" name="price" defaultValue={book._price} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="Submit" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalItem

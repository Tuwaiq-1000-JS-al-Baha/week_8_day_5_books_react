import { useContext } from "react"
import { Modal, Button, Form, Col } from "react-bootstrap"
import BookContext from "../uitls/bookContext"

function Modleitme(props) {
  const { show, handleClose, book } = props
  const { confirm } = useContext(BookContext)
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Form className="mt-5" onSubmit={e => confirm(e, book._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit book </Modal.Title>
          </Modal.Header>

          <Form.Group className="mb-3">
            <Form.Label column md={2}>
              Title
            </Form.Label>
            <Col sm={6}>
              <Form.Control name="title" type="text" required defaultValue={book.title} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label column md={2}>
              author
            </Form.Label>
            <Col sm={6}>
              <Form.Control name="author" type="text" required defaultValue={book.author} />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md={2}>
              description
            </Form.Label>
            <Col sm={6}>
              <Form.Control as="textarea" rows={3} required name="description" defaultValue={book.description} />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md={2}>
              image
            </Form.Label>
            <Col md={6}>
              <Form.Control name="image" type="url" required defaultValue={book.image} />
            </Col>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              clos
            </Button>
            <Button variant="primary" type="onsubmit" onClick={handleClose}>
              confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Modleitme

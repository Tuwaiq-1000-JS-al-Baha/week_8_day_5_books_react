import { Button, Modal, Form, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
function ModelItem(props) {
  const { show, handleClose, book } = props
  const { confirmBook } = useContext(BooksContext)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form className="mt-5" onSubmit={e => confirmBook(e, book._id)}>
          <Modal.Header closeButton>
            <Modal.Title> Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Title
              </Form.Label>
              <Col sm="6">
                <Form.Control name="title" type="text" defaultValue={book.title} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                description
              </Form.Label>
              <Col sm="6">
                <Form.Control as="textarea" name="description" defaultValue={book.description} row={3} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                auther
              </Form.Label>
              <Col sm="6">
                <Form.Control type="text" name="auther" defaultValue={book.auther} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                price
              </Form.Label>
              <Col sm="6">
                <Form.Control type="number" name="price" defaultValue={book.price} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-5"></Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ModelItem

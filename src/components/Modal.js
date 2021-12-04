
import { useContext } from "react"
import { Form, Modal ,Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function ModalItem (props) {
const{ show , handleClose , book } =props
const { confirmBook } = useContext(BooksContext)


    return (  
        <Modal show={show} onHide={handleClose} centered>
           <Modal.Header closeButton>
           <Modal.Title> Edit Book </Modal.Title>
         </Modal.Header>

  <Form onSubmit={e => confirmBook(e, book._id)} >
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label> Title </Form.Label>
        <Form.Control type="text" name="title" defaultValue={book.title} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label column md="2"> Description </Form.Label>
         <Form.Control as="textarea" name="description" defaultValue={book.description} rows={3} required />
        </Form.Group>
          
        <Form.Group className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
            <Form.Control type="url" name="image" defaultValue={book.image} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Author </Form.Label>
        <Form.Control type="text" name="author" defaultValue={book.author} required />
        </Form.Group>

        </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="success" type="submit" onClick={handleClose}>Confirm</Button>
  </Modal.Footer>
</Form>
</Modal>
    )
}

export default ModalItem 
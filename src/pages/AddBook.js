import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddBook() {
  const { addBook } = useContext(BooksContext)
  return (
    <div className="ms-5 mt-4 me-5">
      <h1>Add Book: </h1>
      <Form onSubmit={addBook}>
        <Form.Group className="mb-3">
          <Form.Label> Title </Form.Label>
          <Form.Control required type="text" name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description </Form.Label>
          <Form.Control required type="text" name="description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author </Form.Label>
          <Form.Control required type="text" name="author" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control required type="url" name="image" />
        </Form.Group>
        <Button variant="primary" required type="submit">
          Add Post
        </Button>
      </Form>
    </div>
  )
}

export default AddBook

import { Row } from "react-bootstrap"
import BookItem from "./BookItem"
import BookEdit from "./BookEdit"

function BookGroup(props) {
  const { books, editBook, editId, confirmEdit, deleteBook } = props
  return (
    <Row xs={2} md={4} className="g-4">
      {books.map(book => {
        if (book._id === editId) {
          return <BookEdit key={book._id} book={book} confirmEdit={confirmEdit} />
        } else {
          return (
            <BookItem
              key={book._id}
              inProfile={false}
              book={book}
              editBook={editBook}
              deleteBook={deleteBook}
            />
          )
        }
      })}
    </Row>
  )
}

export default BookGroup
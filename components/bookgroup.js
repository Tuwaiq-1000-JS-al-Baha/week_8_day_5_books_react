import { useContext } from "react"
import { Row } from "react-bootstrap"
import BooksContext from "../utils/bookscontext"

import BookEdit from "./BookEdit"
import BookItem from "./BookItem"

function  bookgroup() {
  const { books, editId } = useContext(BooksContext)
  return (
    <Row xs={1} md={4} className="g-4">
      {books.map(book => {
        if (editId === book._id) {
          return <BookEdit key={book._id} book={book} />
        } else {
          return <BookItem key={book._id} inProfile={false} book={book} />
        }
      })}
    </Row>
  )
}

export default bookgroup
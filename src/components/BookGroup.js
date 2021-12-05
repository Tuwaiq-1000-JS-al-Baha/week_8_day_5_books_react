import { Row } from "react-bootstrap"
import BookItem from "./BookItem"
import BookEdit from "./BookEdit"
import { useContext } from "react"
import BookContext from "../utils/BookContext"

function BookGroup() {
  const { books, editId } = useContext(BookContext)
  return (
    <Row xs={2} md={4} className="g-4">
      {books.map(book => {
        if (book._id === editId) {
          return <BookEdit key={book._id} book={book}/>
        } else {
          return (
            <BookItem key={book._id} inProfile={false} book={book}/>
          )
        }
      })}
    </Row>
  )
}

export default BookGroup

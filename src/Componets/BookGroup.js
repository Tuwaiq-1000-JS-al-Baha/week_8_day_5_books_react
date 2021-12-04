import { Row } from "react-bootstrap"
import Bookitem from "./Bookitem"
import BookEdit from "./BookEdit"
import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
function BookGroup() {
  const { books, editId } = useContext(BooksContext)
  return (
    <>
      <Row xs={2} md={4} className="g-4">
        {books.map(book => {
          if (book._id === editId) {
            return <BookEdit key={book._id} book={book} />
          } else {
            return <Bookitem key={book._id} inProfile={false} book={book} />
          }
        })}
      </Row>
    </>
  )
}

export default BookGroup

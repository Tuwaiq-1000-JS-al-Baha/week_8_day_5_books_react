import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
import BookCard from "../component/BookCard"

function Home() {
  const { books } = useContext(BooksContext)
  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="g-4 mt-4">
        {books.map(book => (
          <BookCard book={book} />
        ))}
      </Row>
    </Container>
  )
}

export default Home

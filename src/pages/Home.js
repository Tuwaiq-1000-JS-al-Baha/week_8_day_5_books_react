import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import BookCard from "../component/BookCard"
import BooksContext from "../utils/BooksContext"

function Home() {
  const { books } = useContext(BooksContext)
  return (
    <Container>
      <h1>Books List: </h1>
      <Row xs={1} md={4} className="g-4">
        {books.map(book => (
          <BookCard book={book} />
        ))}
      </Row>
    </Container>
  )
}

export default Home

import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import BookCard from "../componet/BookCard"
import BookContext from "../uitls/bookContext"

function Home() {
  const { books } = useContext(BookContext)
  return (
    <Container>
      <Row xs={1} md={4} ms={2} className="g-4 mt-4">
        {books.map(book => (
          <BookCard book={book} />
        ))}
      </Row>
    </Container>
  )
}

export default Home

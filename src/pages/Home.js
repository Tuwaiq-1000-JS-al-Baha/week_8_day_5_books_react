import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import BookCard from "../component/BookCard"
import BookContext from "../utils/BookContext"

function Home() {
  const { books } = useContext(BookContext)

  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="g-4">
        {books.map(book => (
          <BookCard book={book}  inProfile={false}/>
        ))}
      </Row>
    </Container>
  )
}

export default Home

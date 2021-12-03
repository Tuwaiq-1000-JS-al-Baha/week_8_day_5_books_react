import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import BookCard from "../components/BookCard"
import postsContext from "../Utils/PostsContext";





function Home() {
    const {books } = useContext(postsContext)

    return(
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
import { useContext } from "react"
import BookGroup from "../Componets/BookGroup"
import BooksContext from "../utils/BooksContext"

function Home() {
  const { setErrorSignup } = useContext(BooksContext)
  setErrorSignup(null)
  return (
    <>
      <h1>Books</h1>
      <BookGroup />
    </>
  )
}

export default Home
